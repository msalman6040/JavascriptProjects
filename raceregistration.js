let raceNumber = Math.floor(Math.random() * 1000);
const RegisteredEarly = true;
const age = 18;

if (RegisteredEarly === true && age >= 18) {
  raceNumber = raceNumber + 1000;
}

if (age > 18 && RegisteredEarly === true) {
  console.log(`Runner number ${raceNumber}, You will race at 9:30 am.`);
} else if (age > 18 && RegisteredEarly === false) {
  console.log(`Runner number ${raceNumber}, You will race at 11:00 am.`);
} else if (age < 18) {
  console.log(`Runner number ${raceNumber}, You will race at 12:30 pm.`);
} else {
  console.log('please see registration desk.');}
