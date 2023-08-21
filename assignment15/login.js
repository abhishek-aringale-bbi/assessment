function validateLogin() {
    var username = document.forms["loginForm"]["username"].value;
    var loginPassword = document.forms["loginForm"]["loginPassword"].value;

    var passregex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,15}$/;
    var emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!username.match(emailregex)) {
        alert("Invalid email address");
        return false;
    }

    if (!loginPassword.match(passregex)) {
        alert("Password must be 9-15 characters long and contain at least one uppercase letter, one digit, and one special symbol");
        return false;
    }
}