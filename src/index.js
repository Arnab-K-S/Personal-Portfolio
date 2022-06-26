import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import App from './App'
import React from "react"
import ReactDOM from "react-dom"
document.body.onselectstart=()=>false;
ReactDOM.render(<App/>,document.getElementById('root'))

function defaultTheme() {
    document.body.classList.remove('DarkTheme');
    document.body.classList.remove('greenery');
    document.body.classList.remove('purewhite');
    document.body.classList.add('default');
    document.getElementById("path").setAttribute("fill", getComputedStyle(document.querySelector('body')).getPropertyValue('--basecolor'));
}
function darktheme() {
    document.body.classList.remove('greenery');
    document.body.classList.remove('default');
    document.body.classList.remove('purewhite');
    document.body.classList.add('DarkTheme');
    document.getElementById("path").setAttribute("fill", getComputedStyle(document.querySelector('body')).getPropertyValue('--basecolor'));
}
function greenery() {
    document.body.classList.remove('default');
    document.body.classList.remove('purewhite');
    document.body.classList.remove('DarkTheme');
    document.body.classList.add('greenery');
    document.getElementById("path").setAttribute("fill", getComputedStyle(document.querySelector('body')).getPropertyValue('--basecolor'));
}
function pureWhite() {
    document.body.classList.remove('default');
    document.body.classList.remove('DarkTheme');
    document.body.classList.remove('greenery');
    document.body.classList.add('purewhite');
    document.getElementById("path").setAttribute("fill", getComputedStyle(document.querySelector('body')).getPropertyValue('--basecolor'));
}

function show() {
    document.getElementById("dropmenu").style.display = 'block';
};

function hide() {
    document.getElementById("dropmenu").style.display = 'none';
}

document.getElementById("default").addEventListener("click", defaultTheme);
document.getElementById("dark").addEventListener("click", darktheme);
document.getElementById("greenery").addEventListener("click", greenery);
document.getElementById("purewhite").addEventListener("click", pureWhite);
document.getElementById("themes").addEventListener("mouseover", show);
document.getElementById("dropmenu").addEventListener("mouseleave", hide);



// const firebaseConfig = {
//     apiKey: "AIzaSyCsa8Tj_5kj5ugy2PLwowp6Z0u-T6RRhJs",
//     authDomain: "personal-portfolio-websi-b804f.firebaseapp.com",
//     projectId: "personal-portfolio-websi-b804f",
//     storageBucket: "personal-portfolio-websi-b804f.appspot.com",
//     messagingSenderId: "430090594611",
//     databaseURL: "https://personal-portfolio-websi-b804f-default-rtdb.firebaseio.com",
//     appId: "1:430090594611:web:e99a41451558fbd4107646"
// };

// const app = initializeApp(firebaseConfig);
// function writeUserData(name, email, comment) {
//     const db = getDatabase();
//     set(ref('users/'+name) ,{
//         username: name,
//         email: email,
//         comment: comment,
//     });
// }

// function send() {
//     console.log("Send function");
//     let name = document.getElementById("name");
//     let email = document.getElementById("email")
//     let comment = document.getElementById("comment")
//     if (name !== ' ' && email !== ' ' && comment !== ' ') {
//         alert("Comment Added");
//         writeUserData(name, email, comment);
//     }
//     else{
//         alert("Enter the required fields");
//     }
// }
// document.getElementById("submit").addEventListener("click", send);