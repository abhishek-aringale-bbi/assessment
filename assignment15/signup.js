function validateSignupForm() {
    let firstName = document.forms["signup"]["firstName"].value;
    let lastName = document.forms["signup"]["lastName"].value;
    let email = document.forms["signup"]["email"].value;
    let phone = document.forms["signup"]["phone"].value;
    let password = document.forms["signup"]["password"].value;

    console.log(firstName);

    let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,15}$/;
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let phoneregex=/^[0-9]{10}$/

    if (firstName === "" || lastName === "" || email === "" || phone === "" || password === "") {
        alert("All fields are required");
        return false;
    }

    if (!email.match(emailRegex)) {
        alert("Invalid email address");
        return false;
    }

    if (!password.match(passwordRegex)) {
        alert("Password must be 9-15 characters long and must have at least one uppercase letter, one digit, and one special symbol");
        return false;
    }

    if (!phone.match(phoneregex)) {
        alert("phone no must be of 10 digit");
        return false;
    }
}