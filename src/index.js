import App from './App'
import React from "react"
import ReactDOM from "react-dom"
import CommentBox from './commentbox'
document.body.onselectstart=()=>false;
ReactDOM.render(<App/>,document.getElementById('root'))