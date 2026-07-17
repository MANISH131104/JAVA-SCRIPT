const user = {
    userName: "Manish",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
       // console.log("Got user details from database");
      // console.log(`username ${this.userName}`);
      console.log(this);
      
    }
}



// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);


function User(userName, loginCount, isLoggedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.userName}`);
    }

    return this
}


const userOne = new User("Manish",12,true)
const  userTwo = new User("chaiAurCode",11,false)


console.log(userOne);
console.log(userTwo);



