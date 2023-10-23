
// Questions & Answers (3)
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("activee");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


// un menu burger 

function myFunction() {
    document.documentElement.scrollTop = 0;

    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


// la page du catalogue
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



//    validate sign in 

function validateSign() {
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordRegex = /^[a-zA-Z\s]+$/;
    const validationResult = document.getElementById("validationResult");
    const validationResultpassword = document.getElementById("validationResultpassword");


    if (emailRegex.test(emailInput)) {
        validationResult.textContent = "Valid email address.";
        validationResult.style.color = "green";
    } else {
        validationResult.textContent = "Invalid email address.";
        validationResult.style.color = "red";
    }

    if (passwordRegex.test(passwordInput)) {
        validationResultpassword.textContent = "";
    } else {
        validationResultpassword.textContent = "entrez password.";
        validationResultpassword.style.color = "red";
    }

}



//    validate Create new Account

function validate() {
    const emailInput = document.getElementById("email").value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const validationResult = document.getElementById("validationResult");

    if (emailRegex.test(emailInput)) {
        validationResult.textContent = "Valid email address.";
        validationResult.style.color = "green";
    } else {
        validationResult.textContent = "Invalid email address.";
        validationResult.style.color = "red";
    }

    const passwordInput = document.getElementById("password").value;
    const namedInput = document.getElementById("name").value;
    const passwordRegex = /^(?=.*[a-z]).{8,}$/;
    const nameRegex = /^[a-zA-Z\s]+$/;
    const validationpassword = document.getElementById("validationpassword");
    const validationname = document.getElementById("validationname");

    if (passwordRegex.test(passwordInput)) {
        validationpassword.textContent = "Strong password.";
        validationpassword.style.color = "green";
    } else {
        validationpassword.textContent = "Weak password. Passwords should have at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character.";
        validationpassword.style.color = "red";
    }
    if (nameRegex.test(namedInput)) {
        validationname.textContent = "name good.";
        validationname.style.color = "green";
    } else {
        validationname.textContent = "entrez full name.";
        validationname.style.color = "red";
    }
}


