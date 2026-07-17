let myName = "Manish    "
let myChannel = "code    "

// console.log(myName.trueLenght);



let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hamer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.manish = function(){
    console.log("manish is present in all objects");
}

Array.prototype.heyManish = function(){
    console.log(`Manish say hello`);
}

// heroPower.manish()
// myHeros.manish()
// myHeros.heyManish()
// heroPower.heyManish()


// inheritance

const user = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ =  user

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "chaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Manish".trueLength()
"iceTea".trueLength()
