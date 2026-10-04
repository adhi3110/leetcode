// noinspection SpellCheckingInspection

function processStr(s: string, k: number): string {
  let res = ""

  for (let c of s) {
    if (c === "*") {
      res = res.substring(0, res.length - 1)
      continue
    }

    if (c === "#") {
      res += res
      continue
    }

    if (c === "%") {
      res = res.split("").reverse().join("")
      continue
    }

    res += c
  }

  console.log(res.length)
  return res[k] || "."
}

processStr("nr#x#gva#jq%yqi%##f###i#u#%##wynnck#reh%u#gv###g#xufhis%l#ng##o%%##v#qt%i", 415249132440988)