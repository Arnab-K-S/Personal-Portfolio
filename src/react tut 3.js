import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

ReactDOM.render(
<h1>Lets add css</h1>
,document.getElementById('root'))

// here we use classname because class is already a keyword i.e class component
// To use inline css you need to create na object with camel casing.
const design={
    border:' 1vh solid rgb(79, 79, 79)',
    backgroundColor:'white',
    color:' black',
    padding:' 10%',
    fontFamily:"cursive",
    fontSize:' 4vh',
};
ReactDOM.render(
    <>
<div className='comment'>Lets add css</div>
        <div className='textContent' style={design}>To use inline css you need to create an object with camel casing.</div>
</>
,document.getElementById('root'))