import React, { StrictMode, useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "./home"
import Navbar from "./navbar"
import Projects from "./Projectlist"
import Feedback from "./feedback"
import Footer from "./Footer"

import './index.css'
import './android.css'

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