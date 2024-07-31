
//Validate matching passwords
const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm_password")
const submit_button = document.querySelector("#submit");
const password_text = document.querySelector("#password_text");
const confirm_text = document.querySelector("#confirm_text");

function PassCheck(){
    if(password.value != confirm_password.value){
        submit_button.disabled = true;
        password_text.innerText="Password doesn't match.";
    }
    else {
        submit_button.disabled = false;
        password_text.innerText=" ";
    }
}
