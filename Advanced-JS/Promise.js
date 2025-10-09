
//1. Create Promise 

const PromiseOne = new Promise( (resolve,reject) =>{
    //promise ke andar koi bhii async task kar sakte ho like-DataBase Calls,Cryptography,network

    setTimeout(() => {
        console.log('Async Task is Complete');
        resolve() //resolve and .then() ko apas mein connect kiya 
    }, 1000);
});

/*resolve ka direct relation hai .then() ke sath but dono apas mein connect nahi hai
connect karne ke liya resolve method ko promise ke andar call karna padega...
*/
PromiseOne.then( ()=>{   
    console.log('promise consumed')
})




// 2. Or Method Create Promise

new Promise( (resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Task 2");
        resolve()   //connect resolve and .then()
    },1000);
}).then(()=>{
    console.log("Async Task 2 Complete");
});




//3. kaise data conjumption hota hai value ati hai

const PromiseThree = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({userName:"Ram",UserEmail:"basic@example.com"}) //resolve ke andar value pass 
    }, 1000);
})

/* Here User ek parameter hai...
resolve ke andar ek object hai or resolve .then ke sathe connect hai
therfore user kuch na kuch value ayaga usiko hi print kiya hai
output main resolve ke andar jo pura object tha vo hi aya */
PromiseThree.then((user)=>{
    console.log(user);
})





//4. how to use resolve,reject,and .then,.catch,.finally
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Data fetched successfully!");
  } else {
    reject("Something went wrong!");
  }
});
myPromise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Always runs (success or error)");
  });



//5. How.then(),.catch()and.finally() works (step-by-step):
const myPromiseOne = new Promise( (resolve,reject)=>{
    setTimeout(() => {
        let Error = true;
        if (Error) {  //if ka matlab agar error exit karta hai tab resolve chalega agar exit nahi karta hai to reject chalega
            resolve({userName:"Shyam",password:"123"});
        } else{
            reject("Error: Something Went Wrong");
        }
    }, 1000);
})

myPromiseOne.then((user)=>{
    console.log(user); //pura obejct print hoga resolve ke andar jo hai

    /*Only user name ko find karne ke liya retrun karna para first username ko, uske bad
    or ek then laga ke username ko print kiya*/

    return user.userName
}).then((userName)=>{       // this is called chaining(You can chain multiple .then() calls)
    console.log(userName);
}).catch((error)=>{         // catch Error ko handel karta hai and .then success/ture value ko handel karta hai
    console.log("Error: ",error)
}).finally(()=>{
    console.log("The promise is either resolved or rejected")
})




//6. How async/await works (step-by-step):[You can use anyone method-->.then(),.catch()or async/await]

const MyPromiseTwo = new Promise( (resolve,reject) => {
  setTimeout(() => {
    let Error = false;
    if(!Error){
      resolve({languageName:"JavaScript",password:"12345"})
    }else{
      reject("Error: Js Went Wrong!!")
    }
  }, 1000);
})

/* create async function using "async,function" keyword....
  An async function always returns a Promise, even if you don’t explicitly return one.*/
async function consumeMyPromiseTwo() {
  try {
    /*You can use await only inside an async function.
    It waits for a Promise to resolve, 
    and pauses the function until the Promise is fulfilled or rejected. */
    const response = await MyPromiseTwo
    console.log(response);
  } catch (error) {
    console.log(error)
  }
}
consumeMyPromiseTwo() //called the async funtion




//7. GET Request using async/await[RealWorld main kam kaise hota hai]
async function getAllUsers(){
  try {
    const response =await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json(); //data ko JSON mein convert kiya hai
    console.log(data)
  } catch (error) {
    console.log("Error: ",error);
  }
}
getAllUsers()  //-->call the function


//8.  GET Request using .then()/.catch()[RealWorld main kam kaise hota hai]
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
  return response.json();
})
.then((data)=>{
  console.log(data)
})
.catch((Error) =>{
  console.log("Error!!")
})