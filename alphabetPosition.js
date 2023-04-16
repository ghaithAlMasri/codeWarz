function alphabetPosition(text) {
  text=text.toLowerCase()
  let arr=[]
  for(let i=0;i<text.length;i++)
    if((text.charCodeAt(i)-96)>0 && (text.charCodeAt(i)-96)<=26) arr.push(String(text.charCodeAt(i)-96))
  arr = arr.join(' ')
  return arr;
}