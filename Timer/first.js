
function Timing(){
    const timer=document.getElementById('root');
    const now = new Date();
    const current = now.toLocaleTimeString();
    timer.innerHTML = current;
}

setInterval(()=>{
    Timing();
})
