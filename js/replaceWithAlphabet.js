function alphabetPosition(text) {
  let textToLetters = text.split("");
  let validLetters = [];
  for (let letter of textToLetters){
    if (letter.toLowerCase() !== letter.toUpperCase()) {
    validLetters.push(letter);
    }
  }
 return validLetters.map((letter) => letter.charCodeAt() - letter.toUpperCase().charCodeAt()).join(" ");
}

console.log(alphabetPosition("The o' clock."));