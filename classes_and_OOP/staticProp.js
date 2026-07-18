class User {
    constructor(Username){
        this.Username = Username
    }

    logMe(){
        console.log(`username: ${this.Username}`);
    }

    static createId(){
        return `123`
    }
}

const manish = new User("Manish")
// console.log(manish.createId())



class Teacher extends User{
    constructor(Username,email){
        super(Username)
        this.email = email
    }
}

const iPhone  = new Teacher("iPhone", "i@phone.com")
iPhone.logMe();