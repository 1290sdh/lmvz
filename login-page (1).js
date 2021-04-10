// add more users in this array
const users = ["user57", "user78"];
// add corresponding passwords !!!! ORDER  MUST MATCH WITH USERS
const passwords = ["Kalender21", "Panter01"];

sessionStorage.setItem("user", users);
sessionStorage.setItem("password", passwords);
const isLoggedIn = sessionStorage.getItem("loggedIn");

const redirect = (redirectFile = "main-page.html") => {
    const path = window.location.href.split("/");
    path.pop();
    path.push(redirectFile);
    window.location.href = path.join("/");
}

if (isLoggedIn) {
    redirect();
}

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {
    // Prevent the default submission of the form
    e.preventDefault();
    // Get the values input by the user in the form fields
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    const validUser = sessionStorage.getItem("user").split(",").indexOf(username);
    const validPwd = sessionStorage.getItem("password").split(",").indexOf(password);

    if (validUser === validPwd && validUser !== -1) {
        // If the credentials are valid, show an alert box and reload the page
        sessionStorage.setItem("loggedIn", true);
        redirect();
    } else {
        // Otherwise, make the login error message show (change its oppacity)
        loginErrorMsg.style.opacity = 1;
    }
});
