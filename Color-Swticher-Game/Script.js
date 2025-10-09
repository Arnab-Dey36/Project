
const box = document.querySelectorAll('.color-box');
const body = document.querySelector('body');

box.forEach( (box1)=>{
    box1.addEventListener('click',(ev) =>{
        if(ev.target.id === 'green'){
            body.style.background = ev.target.id;
        }
        if(ev.target.id === 'blue'){
            body.style.background = 'blue';
        }
        if(ev.target.id === 'red'){
            body.style.background = 'red';
        }
        if(ev.target.id === 'yellow'){
            body.style.background = 'yellow';
        }

    })
});