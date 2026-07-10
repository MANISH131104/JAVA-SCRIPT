// singleTon
// object.create

// object literals

const mySym = Symbol("key1")


const jsUser = {
    name: "Manish",
    "full name": "Manish-kumar",
    [mySym]: "mykey1",
    age: 21,
    location: "Delhi",
    email: "Manish@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "abc@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "manishMicrosoft@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());