function removeChar(str){
 let chars = str.split("");
  if (chars.length === 2) {
    return '';
  } else {
    chars.pop();
    chars.shift();
    return chars.join("");
  }

}

console.log(removeChar('eloquent'));

