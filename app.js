import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";


const form = document.querySelector('#form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
// const modalMessage = document.querySelector('#modal-message');
// const uploadPhoto = document.querySelector('#upload-photo');

form.addEventListener ('submit' , (event) => {
    event.preventDefault();
    if (password.value != confirmPassword) {
        console.log('passwords are not same!');
    }
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, firstName.value, lastName.value, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            firstName.value = ''
            lastName.value = ''
            email.value = ''
            password.value = ''
            window.location = 'login.html'
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
})



