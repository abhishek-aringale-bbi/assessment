let firstname = document.getElementById('firstname')
let lastname = document.getElementById('lastname')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let password = document.getElementById('password')

let nameregex=/^[a-zA-Z]{2,10}$/;
let emailregex=/^[a-zA-z0-9]+@gmail+.com$/;
let phoneregex=/^[0-9]{10}$/;
let passwordregex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,15}$/;

let firstnameError=document.getElementById('firstnameError');
let lastnameError=document.getElementById('lastnameError');
let emailError=document.getElementById('emailError');
let phoneError=document.getElementById('phoneError');
let passwordError=document.getElementById('passwordError');



function validateSignupForm(){
    let valid=true;

    if(!nameregex.test(firstname.value)){
        firstnameError.textContent="please enter valid first name";
        valid=false;
    }else{
        firstnameError.textContent="";
    }

    if(!nameregex.test(lastname.value)){
        lastnameError.textContent="please enter valid last name";
        valid=false;
    }else{
        lastnameError.textContent="";
    }

    if(!emailregex.test(email.value)){
        emailError.textContent="please enter valid email ending with @gmail.com";
        valid=false;
    }else{
        emailError.textContent="";
    }

    if(!phoneregex.test(phone.value)){
        phoneError.textContent="please enter valid phoneno";
        valid=false;
    }else{
        phoneError.textContent="";
    }

    if(!passwordregex.test(password.value)){
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
    if(validateSignupForm()){
        form.submit();
    }
});

// function validateSignupForm() {
//     let firstName = document.forms["signup"]["firstName"].value;
//     let lastName = document.forms["signup"]["lastName"].value;
//     let email = document.forms["signup"]["email"].value;
//     let phone = document.forms["signup"]["phone"].value;
//     let password = document.forms["signup"]["password"].value;

//     console.log(firstName);

//     let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,15}$/;
//     let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//     let phoneregex = /^[0-9]{10}$/

//     if (firstName === "" || lastName === "" || email === "" || phone === "" || password === "") {
//         alert("All fields are required");
//         return false;
//     }

//     if (!email.match(emailRegex)) {
//         alert("Invalid email address");
//         return false;
//     }

//     if (!password.match(passwordRegex)) {
//         alert("Password must be 9-15 characters long and must have at least one uppercase letter, one digit, and one special symbol");
//         return false;
//     }

//     if (!phone.match(phoneregex)) {
//         alert("phone no must be of 10 digit");
//         return false;
//     }
// }