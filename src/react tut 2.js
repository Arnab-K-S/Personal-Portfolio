import React from "react";
import ReactDOM  from "react-dom";
//  Using Javascript again inside the html
const myname = "Arnab Kumar Singh";

//  Method 1
ReactDOM.render(<h1>My name is {myname}</h1>,document.getElementById("root"));

// Method 2
// Adding Atributes
ReactDOM.render(<h1 contentEditable="true">My name is {myname}</h1>,document.getElementById("root"));

//  JS --> HTML --> JS
//  Only Expressions can be used inside the  {} and not statements like conditions and loops.
const superhero="Spiderman!";
const img1 ="https://i.ytimg.com/vi/BNcxTNrtRdk/maxresdefault.jpg";
//  When there is no childen in a tag , you can use self closing tag as < />
ReactDOM.render(
    <>
        <h1 contentEditable="true">This is {superhero}</h1>
        {/* <img></img> */}
        <img src={img1} alt="Spiderman"/>
    </>
        ,document.getElementById("root"));
