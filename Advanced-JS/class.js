
/* 1. Class-->
class is a blueprint or template for creating objects with properties and methods.
kisi method or function ko define karna hai to usko class ke andar define karna hota hai*/

class BankAccount{
  coustomerName;
  accountNuber;
  balance;

  constructor(coustomerName,balance=0,accountNuber){
    this.coustomerName = coustomerName;
    this.accountNuber = Date.now();
    this.balance = balance;
  }

  //kaise kisi class ke andar method/function ko define karte hai
  deposit(amount){
    this.balance += amount;
  }

  withdraw(amount){
    this.balance -= amount;
  }

}

const RamAccount = new BankAccount('Ram',1000);
RamAccount.deposit(8000)
RamAccount.withdraw(5000)
console.log(RamAccount)



/* 2. Class Inheritance --->

extends keyword ka use class inheritance ke liye hota hai.
Jab hum ek class ko doosri class ke features (properties aur methods) inherit karwana chahte hain, 
tab extends ka use karte hain.
*/

class ParentClass {
  constructor(name) { //-->parent class ka constructor
    this.name = name;
  }

  greet() {
    console.log(`Hello, ${this.name}`);
  }
}

class ChildClass extends ParentClass {
  constructor(name, age) { //-->child ka constructor
    super(name); // Super keyword parent class ka constructor call karta hai & uska property ko use karta hai
    this.age = age;
  }

  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const Rahul = new ChildClass("Rahul", 22);
Rahul.greet();   // Output: Hello, Rahul
Rahul.display(); // Output: Name: Rahul, Age: 22




/* 3. getOwnPropertyDescriptor() --->
Yeh method kisi object ke andar di gayi ek specific property ke attributes 
(jaise value, writable, enumerable, configurable) ke baare mein poora detail deta hai.

Iska Output -->value : Ram
              writable : true
              enumerable : true
              configurable : true
*/

//Syntax -->

//Object.getOwnPropertyDescriptor(object name, uska property)


const Person = {
  name : 'Ram',
  age : 22,
  profession : 'student'
}

console.log(Person);

//how to use getOwnPropertyDescriptor

console.log(Object.getOwnPropertyDescriptor(Person,'name'));

/* 4. Object.defineProperty() ---->
Yeh method kisi object ki property ko define ya modify karta hai —
jaise uski value, writability, enumerability, etc.

Iska Output -->value : Ram
              writable : false
              enumerable : false
              configurable : true
*/

//Syntax -->

//Object.defineProperty(object, propertyName, descriptorObject)



Object.defineProperty(Person,'name',{
  writable : false,
  enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(Person,'name'));
