// my age
let myAge = 26;

//earlyYears - first  two years have another rate
let earlyYears = 2;
earlyYears *= 10.5;

//removes early years from myAge
let laterYears = myAge - 2;
//multiplies later years by four
laterYears *= 4;
console.log(earlyYears, laterYears);
// totals dog age
var myAgeInDogYears = earlyYears + laterYears;
// my name in lowercase
var myName = 'Salman'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
