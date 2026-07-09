const accountId = 144553
let accountEmail = "Manish@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;


// accountId = 2   // not allowed

accountEmail = "abc@gmail.com"
accountPassword = "21212121"
accountCity = "Bangaluru"

console.log(accountId);


/*
prefer  not to use var 
bcz of issue in block scope and  functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

