const passwordInput = document.getElementById("password");
const generateButton = document.querySelector("button");
const copyButton = document.querySelector(".display img");

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
const passwordLength = 12;

function generatePassword() {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    passwordInput.value = password;
}

function copyPassword() {
    passwordInput.select();
    document.execCommand("copy");
}

generateButton.addEventListener("click", generatePassword);
copyButton.addEventListener("click", copyPassword);


