let userName = "Kim";
userName ? console.log(`Hello ${userName}`) : console.log(`Hello!`);

let userQuestion = "Will I learn JavaScript today?"; // Added a sample question
console.log(`${userName}'s Question: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

// The switch statement now only assigns the value to the variable
switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  default:
    eightBall = "Signs point to yes";
}

console.log(eightBall);
