document.querySelector("button[type='submit']").addEventListener("click", function(event){
    event.preventDefault();
    const username = document.getElementById("Username").value;
    const password = document.getElementById("Password").value;
    if(username === "" || password === ""){
        alert("Please fill in all fields.");
    } else {
        alert("Login successful!");
    }
});

