import React, { StrictMode, useState} from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Pages/home"
import Navbar from "./Pages/navbar"
import Projects from "./Pages/Projectlist"
import AboutMe from './Pages/aboutme'
import Feedback from "./Pages/feedback"
import Footer from "./Pages/Footer"
import '../src/Pages/css/index.css'
import '../src/Pages/components/css/android.css'
import '../src/Pages/css/cursor.css'

const App = () => {
    const [X,setX]=useState();
    const [Y,setY]=useState();
    window.addEventListener('mousemove',(e)=>{
        setX(e.pageX)
        setY(e.pageY)
    })
    return (
        <StrictMode>
        <Router>
                <div className="cursor" style={{ 'left': X, 'top': Y }} />
            <Navbar />
            <Routes>
                    <Route path="Personal-Portfolio-Reactjs/" element={<Home/>}/>
                    <Route path="Personal-Portfolio-Reactjs/projects" element={<Projects/>} />
                    <Route path="Personal-Portfolio-Reactjs/me" element={<AboutMe/>} />
                    <Route path="Personal-Portfolio-Reactjs/feedback" element={<Feedback/>} />
            </Routes>
            <Footer />
        </Router>
        </StrictMode>)
}

export default App;