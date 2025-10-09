// const buttons = document.querySelectorAll('button');
// const body = document.querySelector('body');

// buttons.forEach((button) => {
//     button.addEventListener('click',(event)=>{
            // first method:-
//         // console.log(button.id);-->har ek color ka acsess mil raha hai
//         // body.style.backgroundColor = button.id;
//         body.style.backgroundColor = event.target.id;
//         //button.id ==> jis color ka id hai uss color ko usi button ke sath attached karana hai
//         
            //2nd method:-
            // if(event.target.id ==='red')
//         //     body.style.backgroundColor=event.target.id;
//         // if(event.target.id ==='blue')
//         //     body.style.backgroundColor=event.target.id;
//         // if(event.target.id ==='yellow')
//         //     body.style.backgroundColor=event.target.id;
//         // if(event.target.id ==='purple')
//         //     body.style.backgroundColor=event.target.id;
//         // if(event.target.id ==='green')
//         //     body.style.backgroundColor=event.target.id;
//     })
// });

//3rd Method:-Event Bubbling se Ho raha hai -Sidha parent div ke upar eventlistener laga diya
document.getElementById('root').addEventListener('click',(event)=>{
    document.body.style.backgroundColor = event.target.id;
})