let userName = "Jane";
userName? console.log("Hello, Jane!") : console.log("Hello!");
let userQuestion = "what are your intentions?";
console.log(userName + ", " +userQuestion);
var randomnumber = Math.floor(Math.random() * 8);
let eightBall = "";

if (randomnumber === 0) {
  console.log('It is certain');
} else if (randomnumber === 1){
  console.log('It is decidedly so');
}else if (randomnumber === 2){
  console.log('Reply hazy try again');
}else if (randomnumber === 3){
  console.log('Cannot predict now');
}else if (randomnumber === 4){
  console.log('Do not count on it');
}else if (randomnumber === 5){
  console.log('My sources say no');
}else if (randomnumber === 6){
  console.log('Outlook not so good');
}else if (randomnumber === 7){
  console.log('Signs point to yes');
} else {"default";}
