import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./navbar"
import './index.css'
import Home from "./home"
import Footer from "./Footer"

document.body.onselectstart=()=>false;
var active=1;
function content() {
    if (active===1)
        return <Home/>
    else
        return <h1>Next Option</h1>
}
ReactDOM.render(
    <>
    <Navbar/>
    {content()}
    <Footer/>
    </>,
     document.getElementById('root')
);
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

function show (){
    document.getElementById("dropmenu").style.display = 'block';
};

function hide(){
    document.getElementById("dropmenu").style.display = 'none';
}

document.getElementById("default").addEventListener("click", defaultTheme);
document.getElementById("dark").addEventListener("click", darktheme);
document.getElementById("greenery").addEventListener("click",greenery);
document.getElementById("purewhite").addEventListener("click",pureWhite);
document.getElementById("themes").addEventListener("mouseover", show);
document.getElementById("dropmenu").addEventListener("mouseleave", hide);