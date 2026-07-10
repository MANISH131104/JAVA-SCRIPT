// console.log("M");
// console.log("A");
// console.log("N");
// console.log("I");
// console.log("S");
// console.log("H");

function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){

    // let result = number1 + number2
    // return result

    return number1 + number2

}

const result = addTwoNumbers(3,4)
// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just loggedIn`
}

// console.log(loginUserMessage("Manish"))
// console.log(loginUserMessage("Manish"))


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username: "Manish",
    prices: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArr = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([200,400,500,1000]));
