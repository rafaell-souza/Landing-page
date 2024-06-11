const form = document.getElementsByTagName("form")[0];
const name = document.querySelector(".name");
const error = document.querySelector(".error-message");

// validators 
const nameRegEx = /^[a-zA-Z\s]{3,}$/;


form.addEventListener("submit", (e) => {
    error.innerText = "";

    if (!nameRegEx.test(name.value)) {
        error.innerText = "Please enter a valid name";
        e.preventDefault();
    }
} )

