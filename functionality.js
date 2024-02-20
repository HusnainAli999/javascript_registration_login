var username = document.getElementById("username");
var email = document.getElementById("email");
var mobile = document.getElementById("mobile");
var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");
var alert_main_div = document.getElementById("alert_main_div");
var alert_s_p = document.getElementById("alert_s_p");

document.getElementById("register").addEventListener("click", function () {

    if (username.value == "") {
        alertMessageShow("Please Fill Username", "orangered");
        return;
    } else if (email.value == "") {
        alertMessageShow("Please Fill Email", "orangered");
        return;
    } else if (mobile.value == "") {
        alertMessageShow("Please Fill Mobile", "orangered");
        return;
    } else if (password.value == "") {
        alertMessageShow("Please Fill Password", "orangered");
        return;
    }

    if (password.value != confirm_password.value) {
        alertMessageShow("Please Match The Both Passwords", "orangered")
        return;
    }

    localStorage.setItem('name', username.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('mobile', mobile.value);
    localStorage.setItem('password', password.value);

    alertMessageShow("You Register Successfully <i class='fa-solid fa-check-double'></i>", "greenyellow");

})

function alertMessageShow(message, color) {
    alert_main_div.style.top = "0%";
    alert_s_p.innerHTML = message;
    alert_s_p.style.color = color;

    setTimeout(function () {
        alert_main_div.style.top = "-100%";
    }, 7000);
}

function show_name() {
    var usernameInput = document.getElementById("username");
    var emailInput = document.getElementById("email");
    var mobileInput = document.getElementById("mobile");
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirm_password");

    var storedName = localStorage.getItem('name');
    var storedEmail = localStorage.getItem('email');
    var storedMobile = localStorage.getItem('mobile');
    var storedPassword = localStorage.getItem('password');

    if (storedName) {
        usernameInput.value = storedName;
    }

    if (storedEmail) {
        emailInput.value = storedEmail;
    }

    if (storedMobile) {
        mobileInput.value = storedMobile;
    }

    if (storedPassword) {
        passwordInput.value = storedPassword;
        confirmPasswordInput.value = storedPassword;
    }
}

show_name();


//Remove Account

document.getElementById("removeBtn").addEventListener("click", function () {
    var name = localStorage.getItem('name');
    var email = localStorage.getItem('email');
    var mobile = localStorage.getItem('mobile');
    var password = localStorage.getItem('password');

    if (!name) {
        alertMessageShow("You are not an existing member of our state.", "orangered")
        return false;
    }

    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("mobile");
    localStorage.removeItem("password");

    window.location.href = "index.html";

    alertMessageShow("You have been successfully removed from Husnain Pakistan Federation.", "orangered")

});

//Move Btn

var login_main_div = document.getElementById("login_main_div");
var move_btn = document.getElementById("move_btn");
var register_main_div = document.getElementById("register_main_div");
move_btn.innerText = "Login";

move_btn.addEventListener("click", () => {
    if (login_main_div.style.display == "none") {
        login_main_div.style.display = "block";
        register_main_div.style.display = "none";
        move_btn.innerText = "Register";
    } else {
        login_main_div.style.display = "none";
        register_main_div.style.display = "block";
        move_btn.innerText = "Login";
    }
});

//Login Process

document.getElementById("login").addEventListener("click", () => {
    var login_username = document.getElementById("login_username");
    var login_password = document.getElementById("login_password");

    var existing_username = localStorage.getItem("name");
    var existing_password = localStorage.getItem("password");

    if (existing_username != login_username.value) {
        alertMessageShow("Username Not Found!", "orangered")
        return;
    }

    if (existing_password != login_password.value) {
        alertMessageShow("Your Password Is False", "orangered");
        return;
    }

    if (login_username.value === existing_username && login_password.value === existing_password) {
        alertMessageShow("Login Successful by Husnain Federation", "greenyellow");

    } else {
        alertMessageShow("Incorrect username or password. Please try again.", "orangered");
    }
});




var show_password = document.getElementById("show_password");
var login_password = document.getElementById("login_password");

show_password.addEventListener("change", () => {
    if (show_password.checked) {
        login_password.type = "text";
    } else {
        login_password.type = "password";
    }
})

var show_c_password = document.getElementById("show_c_password");
var confirm_password = document.getElementById("confirm_password");
var password = document.getElementById("password");

show_c_password.addEventListener("change", () => {
    if (show_c_password.checked) {
        confirm_password.type = "text";
        password.type = "text";
    } else {
        confirm_password.type = "password";
        password.type = "password";
    }
})

var fa_circle_xmark = document.getElementsByClassName("fa-circle-xmark")[0];
var alert_main_div = document.getElementById("alert_main_div");

fa_circle_xmark.addEventListener("click", function () {
    alert_main_div.style.top = "-100%";
})