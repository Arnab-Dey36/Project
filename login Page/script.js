
document.querySelector("button[type='submit']").addEventListener("click", (e)=>{
    e.preventDefault();

    const Email = document.getElementById('#email');
    const PassWord = document.getElementById('#password');
    if (Email==="" || PassWord === "") {
        alert("please fill in all");
    }
    else{
        alert("login successful")
    }
})