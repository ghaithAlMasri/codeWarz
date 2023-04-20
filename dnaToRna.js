function DNAtoRNA(dna) {
  let dna2=dna.split('')
  for(let i =0; i<dna2.length;i++){
    if(dna2[i]==='T') dna2[i]='U'
    
  }
  let retVal=dna2.join("")
  console.log(retVal)
  dna=retVal
  return dna
}