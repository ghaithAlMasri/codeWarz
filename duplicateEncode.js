function duplicateEncode(word){
    word=word.toLowerCase()
    let arr=[]
      for(let i=0;i<word.length;i++){
        if(word.indexOf(word[i])===word.lastIndexOf(word[i])) arr.push("(")
        else(arr.push(")"))                                                               
      }
    
    return arr.join("")
  }
  