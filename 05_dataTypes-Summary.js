//   Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

const bigNumber = 965485237852456215n



// Reference (Non-Primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Manish",
    age: 21,
}

const myfunction = function(){
   // console.log("Hello World !");
}

// console.log(typeof bigNumber);
// console.log(typeof myfunction);
// console.log(typeof heros);
// console.log(typeof anotherId);



// ++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYouTubeName = "manishkumar"

let anotherName = myYouTubeName
anotherName = "GamingWorld"

console.log(myYouTubeName);
console.log(anotherName);


let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "abc@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


