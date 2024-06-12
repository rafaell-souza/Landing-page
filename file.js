const form = document.getElementsByTagName("form")[0];

const name = document.querySelector(".name");
const email = document.querySelector(".email");
const address = document.querySelector(".address");
const expiry = document.querySelector(".expiry");
const cvv = document.querySelector(".cvv");
const cardNumber = document.querySelector(".card-number");


const error = document.querySelector(".error-message");


// validators 
const nameRegEx = /^[a-zA-Z\s]{3,}$/;
const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const addressRegEx = /^[a-zA-Z0-9\s,\-\(\)]{3,}$/;
const cvvRegEx = /^[0-9]{3}$/;
const cardNumberRegEx = /^(\d{4})-(\d{4})-(\d{4})-(\d{4})$/;


form.addEventListener("submit", (e) => {
    error.innerText = "";

    if (!nameRegEx.test(name.value)) {
        
        error.innerText = name.value.length
        == 0? "Enter your name" :
        "Enter a real name";

        e.preventDefault();
    }

    if (!emailRegEx.test(email.value)) {
        error.innerText = email.value.length
        == 0? "Enter your email" :
        "Enter a valid email address";

        e.preventDefault();
    }

    if (!addressRegEx.test(address.value)) {
        error.innerText = address.value.length
        == 0? "Enter your address" :
        "Enter a valid address";

        e.preventDefault();
    }

    if (!cvvRegEx.test(cvv.value)) {
        error.innerText = cvv.value.length
        == 0? "Enter the cvv number" :
        "Enter a valid cvv";

        e.preventDefault();
    }

    if (!cardNumberRegEx.test(cardNumber.value)) {
        error.innerText = cardNumber.value.length
        == 0? "Enter the card number" :
        "Enter a card number separated by -";

        e.preventDefault();
    }
} )

