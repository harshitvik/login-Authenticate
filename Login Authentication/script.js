document.addEventListener("DOMContentLoaded", function () {
    const loginContainer = document.getElementById("login-container");
    const registerContainer = document.getElementById("register-container");
    const showRegister = document.getElementById("show-register");
    const showLogin = document.getElementById("show-login");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const loginMessage = document.getElementById("login-message");
    const registerMessage = document.getElementById("register-message");

   
    showRegister.addEventListener("click", function (event) {
        event.preventDefault();
        loginContainer.style.display = "none";
        registerContainer.style.display = "block";
    });

    showLogin.addEventListener("click", function (event) {
        event.preventDefault();
        registerContainer.style.display = "none";
        loginContainer.style.display = "block";
    });

    
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("register-username").value;
        const password = document.getElementById("register-password").value;

        
        if (localStorage.getItem(username)) {
            registerMessage.textContent = "Username already exists. Please choose another.";
        } else {
           
            localStorage.setItem(username, password);
            registerMessage.style.color = "green";
            registerMessage.textContent = "Registration successful! You can now log in.";
        }
    });

    
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;

        
        const storedPassword = localStorage.getItem(username);

        
        if (storedPassword && password === storedPassword) {
            loginMessage.style.color = "green";
            loginMessage.textContent = "Login successful!";
        
            window.location.href = "demo.html"; // 
        } else {
            loginMessage.textContent = "Invalid username or password.";
        }
    });
});
