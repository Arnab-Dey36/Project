const obj = {
    name : "Rahul",
    age : 25,
    profession: "Student"
};

//Method 1 Create prototype
// const obj2 ={
//     gender : "Male",
//     city : "Kolkata",
//     //__proto__: obj  //Create prototype
// };

//2nd Method Of Create prototype 
const obj3 = Object.create(obj);
obj3.gender = "Male";
obj3.city = "Kolkata";

const obj4 = Object.create(obj3);
obj4.rollno = 1;
obj4.bankblance=5000;

console.log(obj.age);
console.log(obj3.age);//obj3 se obj access ho raha hai 
console.log(obj4.age);//obj4 se obj acess ho raha hai
console.log(obj4.gender);//obj4 se obj3 access ho raha hai