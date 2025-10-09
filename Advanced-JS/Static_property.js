
/*Static Method --> 1. Utility Function
static ka matlab hota hai — class level property ya method, 
jo sirf class se hi access hota hai, object (instance) se nahi.
*/


class User{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  //Age ke hisab se sort karne ke liya function banaya
  static compareByAge(user1,user2){
    return user1.age - user2.age
  }
}
const Rakesh = new User('Rakesh',30);
const Rohit = new User('Rohit',20);
const Ramu = new User('Ramu',40);

//sare user ko ek array ke andar store kiya hu
const AllUsers = [Rakesh, Rohit, Ramu];
// here sort kiya 
AllUsers.sort(User.compareByAge);
//last main print kiya
console.log(AllUsers)

/* 2. Static property ko kaise use karte hai---->
Task-sabme ek id add karna hai 1st obj ka 1,2nd obj ka 2,3rd obj ka 3*--aisa karke*/

class User{
  
  static id =1; //this is a static property

  //create constructor
  constructor(name, age){
    this.name = name;
    this.age = age;
    this.id = User.id++ //static property ko aise use karta hai constructor ke andar
  }
}

const Rakesh1 = new User('Rakesh',30);
const Rohit1 = new User('Rohit',20);
const Ramu1 = new User('Ramu',40);
console.log(Rakesh1,Rohit1,Ramu1);


//3. How to access static property or method
class config{
  static dbUser = 'UserName';
  static dbPassword = 'scret';
  static apiToken = 'abcd';
}


console.log(config.dbPassword)
console.log(config.dbUser)
console.log(config.apiToken)