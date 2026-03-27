const container = document.querySelector("#container");

const paragraph = document.createElement('p');
paragraph.setAttribute('Style',"color:red");
paragraph.textContent = "Hey I'm red!";
container.appendChild(paragraph);

const subHeadingThree = document.createElement("h3");
subHeadingThree.style.color = "blue";
subHeadingThree.textContent = "I'm a blue h3";
container.appendChild(subHeadingThree);

const blackDiv = document.createElement('div');
blackDiv.setAttribute('Style','border:1px solid black; background-color:pink');
const headingOne = document.createElement('h1');
headingOne.textContent = 'I\'m in a div';
const paragraphTwo = document.createElement('p');
paragraphTwo.textContent = 'ME TOO!';
blackDiv.appendChild(paragraphTwo);
blackDiv.insertBefore(headingOne,paragraphTwo);
container.appendChild(blackDiv);
