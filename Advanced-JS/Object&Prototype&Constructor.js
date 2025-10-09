/*
    📌 Creating Objects in JavaScript

    1. Using Object Literals

    "greet" or "greeting" refers to a method (function) that says hello or introduces the object.
*/
 const person = {
   name: "Alice",
   age: 25,
   greet: function () { // You can Pass function in object...
     console.log(`Hello, my name is ${this.name}`);
    }
 };

 person.greet(); // OUTPUT--> Hello, my name is Alice


// 2. Using Constructor Functions (Before ES6)
function BankAccount(username, balance=0) { //by defult balance zero hai agar koii balance pass nahi karega to
  this.username = username;
  this.accountNumber = Date.now(); //Date.now() ek random number generate karke deta hai usiko AccNo.man leta hai
  this.balance = balance;

  // for deposit 
  this.deposit = (amount) =>{
    this.balance += amount;
  }

  // for withdraw
  this.withdraw = function(amount){
    this.balance -= amount
  }
}

//Access Particular data
// console.log(RakeshAccount.username) 
const RakeshAccount = new BankAccount("Rakesh", 1000);
//agar kisi value ko change karna hai to
// RakeshAccount.balance =2500;    
RakeshAccount.deposit(6000);

RakeshAccount.withdraw(2000);
 
console.log(RakeshAccount);

const RahulAccount = new BankAccount("Rahul");
console.log(RahulAccount);



// 3. Example (Constructor + Prototype):

function BankAccount(username, balance=0) { //by defult balance zero hai agar koii balance pass nahi karega to
  this.username = username;
  this.accountNumber = Date.now(); //Date.now() ek random number generate karke deta hai usiko AccNo.man leta hai
  this.balance = balance;

}

/*Adding method to prototype(different object iss method ko access kar sakta hai..
2nd time 2nd object ke liya create karne ka jarurat nahi hai)
&& Prototype ke andar arrow function kam nahi karta hai*/


// Direct Object.prototype(Grand parent) ke andar function ko inject(add) kiya hu
// Object.prototype.deposit = function(amount){
//   this.balance += amount;
// }
// Object.prototype.withdraw = function(amount){ 
//   this.balance -= amount
// }



BankAccount.prototype.deposit = function(amount){
  this.balance += amount;
}
BankAccount.prototype.withdraw = function(amount){ 
  this.balance -= amount
}

const Ram1Account = new BankAccount('Ram',1000)
const ShyamAccount = new BankAccount('Shyam')

Ram1Account.deposit(4000);
Ram1Account.withdraw(3000);

ShyamAccount.deposit(500);
ShyamAccount.withdraw(100);


console.log(Ram1Account, ShyamAccount);




// 4. Object INHERITANCE-->
/*__proto__ is a special property in JavaScript that points to the prototype of another object.
It helps to create a prototype chain — allowing one object to inherit properties/methods from another.*/ 

const Teacher ={  //---> 1st object
  makevideo : true
}

const TeachingSupport = {   //--->2nd object
  isAvaliable : false,
 // __proto__ : Teacher //here TeachingSupport Teacher ka Property Ko inherit kiya hai
}

const TASupport = {   //--->3rd object
  makeAssignment : "JS Assignment",
  fullTime : true,
  //__proto__ : TeachingSupport ////here TASupport TeachingSupport ka Property Ko inherit kiya hai

}

// Modern Syntax of inherit the property
Object.setPrototypeOf(TeachingSupport,Teacher) //TeachingSupport Teacher ka Property Ko inherit kiya hai
Object.setPrototypeOf(TASupport,TeachingSupport) //TASupport TeachingSupport ka Property Ko inherit kiya hai

console.log(TASupport.isAvaliable)
console.log(TASupport.makevideo)
console.log(TASupport.makeAssignment)


/* 5.call method-->
kisi function ke andar dusre function ko call karana hai to and
reference hold karke rakhta hai dusre function ki*/

function SetUserName(userName){
  this.userName = userName
}

function CreateUser(userName,email,password){
  SetUserName.call(this,userName) 
  this.email = email
  this.password = password
}

const Ram = new CreateUser('Ram','ram@example.com','123456')
console.log(Ram)








