sessionStorage.setItem("user", "user57");
sessionStorage.setItem("password", "Kalender21");
sessionStorage.setItem("user2", "user 78");
sessionStorage.setItem("password2", "Panter01");
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

    if (username === sessionStorage.getItem("user") && password === sessionStorage.getItem("password")) {
        // If the credentials are valid, show an alert box and reload the page
        sessionStorage.setItem("loggedIn", true);
        redirect();
    } else {
        // Otherwise, make the login error message show (change its oppacity)
        loginErrorMsg.style.opacity = 1;
        
    if (username === sessionStorage.getItem("user2") && password === sessionStorage.getItem("password2")) {
        // If the credentials are valid, show an alert box and reload the page
        sessionStorage.setItem("loggedIn", true);
        redirect();
    } else {
        // Otherwise, make the login error message show (change its oppacity)
        loginErrorMsg.style.opacity = 1;
    }
})
