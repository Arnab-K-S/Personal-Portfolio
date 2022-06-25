import React from "react"
import  ReactDOM  from "react-dom"
import Heading from './Components'
import List from './List'
//Using Components

// While Creating componets create a new file with first letter capital and extension jsx is recommended.
ReactDOM.render(
    <>
    {/* <h1> List of Super Heros</h1> */}
    {/* <Heading></Heading> */}
    <Heading/>
    <List/>
        {/* <li></li> */}
    </>
    ,document.getElementById('root')
);