const name = "Manish"
const repoCount = 50

// console.log(name + repoCount + " value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Manish-Kumar-SE')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-7, 8)
// console.log(anotherString);

const newStringOne = "   manish   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://manish.com/manish%20kumar"

console.log(url.replace('%20', '-'));


console.log(url.includes('manish'));

console.log(gameName.split('-'));

