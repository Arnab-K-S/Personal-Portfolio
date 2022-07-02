import React, { StrictMode} from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from "./home"
import Navbar from "./navbar"
import Projects from "./Projectlist"
import AboutMe from './aboutme'
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