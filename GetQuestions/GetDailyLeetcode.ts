// Generates starter files (function stub + example TestCases/results) for LeetCode problems.
//
// Usage (Node 22.18+ runs .ts directly; older: npx tsx generate-daily.ts ..., or bun / deno run -A):
//   node generate-daily.ts [--out DIR]                       today's daily problem
//   node generate-daily.ts --slug two-sum [--out DIR]        one specific problem
//   node generate-daily.ts --plan leetcode-75 [--out DIR]    every problem in a study plan
//   add --force to overwrite files that already exist (by default they are skipped)
//
// Function name + signature come from LeetCode's own TypeScript snippet.
// Test inputs come from `exampleTestcaseList`; expected outputs are parsed from the
// "Output:" lines of the problem statement. Files are written flat into DIR so that
// the `../TesterFunction.ts` import keeps resolving.
//
// Layout: DIR/<Topic>/<id>. <Title>.ts, with topics taken from the study plan's own groups
// (e.g. "Array - String", "Linked List"). --out must therefore be the folder that holds
// TesterFunction.ts, so that `../TesterFunction.ts` resolves from inside each topic folder.
// Daily problems go in DIR/Daily and --slug problems in DIR/Other.

import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const ENDPOINT = 'https://leetcode.com/graphql';

const DAILY_QUERY = `
  query daily {
    activeDailyCodingChallengeQuestion { date link question { titleSlug } }
  }`;

const PLAN_QUERY = `
  query plan($planSlug: String!) {
    studyPlanV2Detail(planSlug: $planSlug) {
      name
      planSubGroups { name questions { titleSlug } }
    }
  }`;

const QUESTION_QUERY = `
  query question($titleSlug: String!) {
    question(titleSlug: $titleSlug) {
      questionFrontendId
      title
      difficulty
      content
      exampleTestcaseList
      codeSnippets { langSlug code }
    }
  }`;

type Case = { args: unknown[]; expected: unknown };

// >>> Change only these two functions if runTestCases expects a different shape. <<<
// TestCases holds one args array per case; results holds the matching expected values.
function formatInput(c: Case): string {
    return `    ${JSON.stringify(c.args)},`;
}

function formatExpected(c: Case): string {
    return c.expected === undefined ? 'undefined /* TODO: fill in */' : JSON.stringify(c.expected);
}

function decodeEntities(s: string): string {
    return s
        .replace(/&nbsp;/g, ' ')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&');
}

function parseArg(raw: string): unknown {
    try {
        return JSON.parse(raw);
    } catch {
        return raw;
    }
}

function parseExpected(raw: string | undefined): unknown {
    if (raw === undefined) return undefined;
    try {
        return JSON.parse(raw);
    } catch {
        return undefined; // not valid JSON (e.g. multiple valid answers) -> leave a TODO
    }
}

export function buildCases(exampleInputs: string[], contentHtml: string): Case[] {
    const outputs = [...contentHtml.matchAll(/<pre[^>]*>([\s\S]*?)<\/pre>/g)]
        .map((m) => decodeEntities(m[1].replace(/<[^>]+>/g, '')).match(/Output:\s*([^\n]*)/)?.[1]?.trim())
        .filter((o): o is string => o !== undefined);

    return exampleInputs.map((input, i) => ({
        args: input.split('\n').map(parseArg),
        expected: parseExpected(outputs[i]),
    }));
}

export function buildSource(snippet: string, cases: Case[] = []): { name: string; source: string } {
    const match = snippet.match(/function\s+([A-Za-z_$][\w$]*)\s*\(/);
    if (!match) {
        throw new Error('no top-level function in the TypeScript snippet (class-based/design problem)');
    }
    const name = match[1];
    // LeetCode ends the snippet with "};" - drop the stray semicolon.
    const fn = snippet.trim().replace(/\};?\s*$/, '}');
    const inputs = cases.map(formatInput).join('\n');
    const expected = cases.map(formatExpected).join(', ');

    const source = `import {runTestCases} from "../TesterFunction.ts";

${fn}

const TestCases: any[] = [
${inputs}
]

const results: any[] = [${expected}]

runTestCases(TestCases, results, [], ${name})
`;
    return { name, source };
}

async function gql(query: string, variables: Record<string, unknown> = {}): Promise<any> {
    const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Referer: 'https://leetcode.com' },
        body: JSON.stringify({ query, variables }),
    });
    if (!res.ok) throw new Error(`LeetCode returned HTTP ${res.status}`);
    const json = await res.json();
    if (json.errors?.length) throw new Error(json.errors[0].message);
    return json.data;
}

// Make a string safe to use as a file or folder name ("Array / String" -> "Array - String").
function safeName(s: string): string {
    return s.replace(/\s*\/\s*/g, ' - ').replace(/[\\:*?"<>|]/g, '').replace(/\s+/g, ' ').trim();
}

async function generateFor(titleSlug: string, outDir: string, topic: string, force: boolean): Promise<string> {
    const { question: q } = await gql(QUESTION_QUERY, { titleSlug });
    if (!q) throw new Error('problem not found');

    const snippet = q.codeSnippets?.find((s: any) => s.langSlug === 'typescript');
    if (!snippet) throw new Error('no TypeScript snippet');

    const cases = buildCases(q.exampleTestcaseList ?? [], q.content ?? '');
    // `source` still calls the real function name; only the file is named "<id>. <Title>".
    const { source } = buildSource(snippet.code, cases);
    const label = `${q.questionFrontendId}. ${q.title} (${q.difficulty})`;
    const fileName = safeName(`${q.questionFrontendId}. ${q.title}`);

    const dir = join(outDir, safeName(topic));
    const file = join(dir, `${fileName}.ts`);
    if (existsSync(file) && !force) return `${label}: skipped, ${file} already exists (use --force to overwrite)`;

    mkdirSync(dir, { recursive: true });
    writeFileSync(file, source);

    const missing = cases.filter((c) => c.expected === undefined).length;
    return `${label}: created ${file} with ${cases.length} case(s)` + (missing ? `, ${missing} expected value(s) marked TODO` : '');
}

function parseArgs(argv: string[]) {
    const o = { plan: '', slug: '', out: '.', force: false };
    for (let i = 0; i < argv.length; i++) {
        const a = argv[i];
        if (a === '--plan') o.plan = argv[++i] ?? '';
        else if (a === '--slug') o.slug = argv[++i] ?? '';
        else if (a === '--out') o.out = argv[++i] ?? '.';
        else if (a === '--force') o.force = true;
        else if (!a.startsWith('--')) o.out = a; // positional outDir
        else throw new Error(`Unknown option ${a}`);
    }
    return o;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function run(argv: string[], delayMs = 600): Promise<void> {
    const o = parseArgs(argv);

    if (o.plan) {
        const data = await gql(PLAN_QUERY, { planSlug: o.plan });
        const groups = data.studyPlanV2Detail?.planSubGroups ?? [];
        const items: { slug: string; topic: string }[] = groups.flatMap((g: any) =>
            g.questions.map((q: any) => ({ slug: q.titleSlug, topic: g.name })),
        );
        if (!items.length) throw new Error(`No problems found for plan "${o.plan}"`);

        console.log(`Plan "${o.plan}": ${items.length} problems in ${groups.length} topics`);
        const failures: string[] = [];
        for (const { slug, topic } of items) {
            try {
                console.log(await generateFor(slug, o.out, topic, o.force));
            } catch (e: any) {
                failures.push(`${slug} (${topic}): ${e.message}`);
                console.log(`${slug}: FAILED, ${e.message}`);
            }
            await sleep(delayMs); // be gentle with LeetCode's rate limits
        }
        console.log(`\nDone. ${items.length - failures.length}/${items.length} ok` + (failures.length ? `, ${failures.length} need manual work:\n  ${failures.join('\n  ')}` : ''));
        return;
    }

    if (o.slug) {
        console.log(await generateFor(o.slug, o.out, 'Other', o.force));
        return;
    }

    const data = await gql(DAILY_QUERY);
    const daily = data.activeDailyCodingChallengeQuestion;
    console.log(`Daily problem for ${daily.date}: https://leetcode.com${daily.link}`);
    console.log(await generateFor(daily.question.titleSlug, o.out, 'Daily', o.force));
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
    run(process.argv.slice(2)).catch((e) => {
        console.error(e.message);
        process.exit(1);
    });
}