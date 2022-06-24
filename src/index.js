import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./navbar"
import './index.css'
import Home from "./home"
import Footer from "./Footer"
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