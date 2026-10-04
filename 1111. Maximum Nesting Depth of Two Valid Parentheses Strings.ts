function maxDepthAfterSplit(seq: string): number[] {
  const res: number[] = new Array(seq.length).fill(0);
  let depth = 0;

  for(let i = 0; i< seq.length; i++) {
    const ch = seq[i]

    // ( ( ( ) ) )
    // (   ( )
    //   (

    if(ch == "(" && (depth%2) === 1) {
      res[i] = 1
    }

    if(ch == ")" && (depth%2) === 0) {
      res[i] = 1
    }



    ch === "(" ? depth++ : depth--
  }


  return res
}