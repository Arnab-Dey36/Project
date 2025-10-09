
function placeOrder(callback){
    console.log("Talking With Domino's !!");
    setTimeout(()=>{
        console.log("Order Placed Successfully!!");
        callback();
    },2000);
}

function PreparingOrder(callback){
    console.log("Pizza Prepartion Started....");
    setTimeout(()=>{
        console.log("Pizza Preparation done!!");
        callback();
    },5000);
}

function PickupOrder(callback){
    console.log("Reaching Resturant for picking Order!!");
    setTimeout(()=>{
        console.log("Order Pick up by Delivery boy!!");
        callback();
    },3000);
}

function deliverOrder(){
    console.log("Deliver boy On the way!!");
    setTimeout(() => {
        console.log("Order Deliver Successfully!!")
    }, 5000);
}

// Callback hell:-ek callback ke andar dusre callback uske andar tisre
placeOrder(()=>{
    PreparingOrder(()=>{
        PickupOrder(()=>{
            deliverOrder();
        });
    });
});
//here placeorder call->PreparingOrder call->PickupOrder call->deliverOrder

