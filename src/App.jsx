import React, { StrictMode, useState } from "react"
import Navbar from "./navbar"
import Home from "./home"
import Footer from "./Footer"
import './index.css'
import Feedback from "./feedback"
import Projects from "./Projectlist"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const App = () => {
    return (
        <StrictMode>
        <Router>
            <Navbar />
            <Routes>
                    <Route path="Personal-Portfolio/" element={<Home/>}/>
                    <Route path="Personal-Portfolio/feedback" element={<Feedback/>} />
                    <Route path="Personal-Portfolio/projects" element={<Projects/>} />
            </Routes>
            <Footer />
        </Router>
        </StrictMode>)
}

export default App;