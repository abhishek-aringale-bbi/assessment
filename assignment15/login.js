let username=document.getElementById('username');
let password=document.getElementById('password');

let usernameError=document.getElementById('usernameError')
let passwordError=document.getElementById('passwordError');

let usenameregex=/^[a-zA-z0-9]+@gmail+.com$/;
let passwordregex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,15}$/;


function validateForm(){
    let valid=true;

    if(!usenameregex.test(username.value))
    {
        usernameError.textContent="Enter valid username/Email. ending with @gmail.com";
        valid=false;
    }else{
        usernameError.textContent="";
    }

    if(!passwordregex.test(password.value))
    {
        passwordError.textContent="Must contain at least one number and one uppercase and lowercase letter, and at least 8 and atmost 15 characters";
        valid=false;
    }else{
        passwordError.textContent="";
    }

    return valid;
}

let form=document.getElementById('form');
let submit=document.getElementById('submit');

submit.addEventListener("click",()=>{
    if(validateForm()){
        form.submit();
    }
});

// function validateLogin() {
//     // var username = document.forms["loginForm"]["username"].value;
//     // var loginPassword = document.forms["loginForm"]["loginPassword"].value;

//     let username=document.getElementById('username').value;
//     let loginPassword=document.getElementById('loginPassword').value;

//     var passregex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,15}$/;
//     var emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//     if (!username.match(emailregex)) {
//         alert("Invalid email address");
//         return false;
//     }

//     if (!loginPassword.match(passregex)) {
//         alert("Password must be 9-15 characters long and contain at least one uppercase letter, one digit, and one special symbol");
//         return false;
//     }
// }