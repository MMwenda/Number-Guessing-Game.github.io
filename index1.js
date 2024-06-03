const myLabel = document.getElementById("myLabel");
let myBtn = document.getElementById("myBtn");
let myInput = document.getElementById("myInput");
const textArea = document.getElementById("myText");
const myWin = document.getElementById("myWin");

const minNum = 1;
const maxNum = 100;
let answer =  Math.floor(Math.random() *(maxNum - minNum + 1)) + minNum;

let attempts = 0;
// let guess = -1; // initialize guess to a number outside the valid range

myInput.addEventListener("input", () => {
  if (myInput.value.trim() === "") {
    textArea.innerHTML = ""; // clear the text area when input is empty
  }
});

myBtn.onclick = function() {
  guess = Number(myInput.value);

  if(isNaN(guess) || guess < minNum || guess > maxNum) {
    textArea.innerHTML = `Please enter a valid number between ${minNum} and ${maxNum}.`;
  } else {
    attempts++;
    textArea.innerHTML = ""; // clear any previous messages
    if(guess < answer) {
      textArea.innerHTML = `Too low, try again.`;
    } else if (guess > answer) {
      textArea.innerHTML = `Too high, try again.`;
    } else {
      myWin.innerHTML = `CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`;
      myBtn.disabled = true; // disable the button to end the game
    }
  }
};
