import React, { StrictMode, useState } from "react"
import Navbar from "./navbar"
import Home from "./home"
import Footer from "./Footer"
import './index.css'
import Feedback from "./feedback"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const App = () => {
    return (
        <StrictMode>
        <Router>
            <Navbar />
            <Routes>
                <Route  path="/" element={<Home />}/>
                <Route  path="/feedback" element={<Feedback/>} />
            </Routes>
            <Footer />
        </Router>
        </StrictMode>)
}

export default App;