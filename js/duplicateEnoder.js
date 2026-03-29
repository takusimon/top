function duplicateEncode(word){
    let lowerCaseLetters = word.toLowerCase().split("");
    const count = {};
    let duplicateString = '';
    
  lowerCaseLetters.forEach(ele => {
    count[ele] = (count[ele] || 0) + 1;
  })
  for (let i of lowerCaseLetters) {
    if (count[i] === 1) {
    duplicateString = duplicateString + "(";
    } else {
      duplicateString = duplicateString + ")"
    }
  }
    return duplicateString;
}

console.log(duplicateEncode('recede'));