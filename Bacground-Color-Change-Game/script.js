
/*✅ Goal Statement (Properly Written):
"Create a JavaScript function that changes the background color of the webpage every second 
when the 'Start' button is clicked, and stops the color-changing process when the 'Stop' button is clicked." */



//Generate random color

const randomColor = () =>{
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]  //Random number generate karke usko color ke sath add kiya hu
    }
    return color;
}

//Start Button
let intervalId;
document.querySelector('#start').addEventListener('click',()=>{
    if(!intervalId){
        intervalId = setInterval(()=>{
            document.body.style.backgroundColor = randomColor()
        },1000);    // Change color every 1000ms (1 second)
    }
});

//Stop Button
document.querySelector('#stop').addEventListener('click',()=>{
    clearInterval(intervalId);
    intervalId = null;
})