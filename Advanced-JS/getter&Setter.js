
/* 1. Getter aur Setter JavaScript (ya kisi bhi OOP language) mein object ke properties ko 
access karne aur set karne ka controlled tarika hota hai. Ye ek encapsulation technique
hai jiska matlab hai data ko directly access na karna, balki uske liye method ke zariye kaam lena.

--> Agr getter method karna hai to Setter bhi karna hoga */ 


class student{

    constructor(name,age){
        this.name = name
        this.age = age
    }

    /* getter method  ---> Syntax-> get property_Name(){
                                      return statement
                                    }
    */                              
    
    get name(){
        return this._name;
    }

    /* Setter method  ---> Syntax-> set property_Name(value){
                                      this.property =value
                                    }
    */   

    set name(NewName){
        this._name = NewName;
    }
}

// const user1 = new student('Rahul',32);
// console.log(user1.name)


// 2. Real Life Example of getter and setter
class BankAccount{
    constructor(userName, balance=0, accountNumber){
        this.userName = userName
        this.balance = balance
        this.accountNumber = Date.now();
    }

    //get method
    get balance(){
        return this._balance
    }

    //set method
    set balance(amount){
        if(amount >= 0){
            this._balance = amount
        }
        else{
            console.log('Invalid Amount');
        }
    }
}

// const user2 = new BankAccount('Ramu',1000)
// console.log(user2.balance)

// user2.balance = -100    //Invalid Amount



// 3. properties based get-set

function Person(name,age,profession){
    this.name = name
    this.age = age
    this.profession = profession

 //Jab get & set method nahi tha tab properties ki through kaise get-set ko use karte tha
    Object.defineProperty(this,'name',{
        get: function(){
            return this._name;
        },
        set: function(newName){
            this._name = newName;
        }
    })
}

const user4 = new Person('Kalu',40,'Farmer')
console.log(user4.name)


// 4. Object Based get-set 

const User = {
    _email : 'chai@exmple.com',
    _password : '123',

    get email(){
        return this._email;
    },

    set email(newEmail){
        this._email =newEmail;
    }
}

/*iss line ka meaning-->User ke base pe ek object create karo or usko user5 ke andar refer kar do matlab
User ke sare data user5 ke andar chala jayaga*/
const user5 = Object.create(User)   //this is called factory function 
console.log(user5.email)







