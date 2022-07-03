import React, { StrictMode} from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Pages/home"
import Navbar from "./Pages/navbar"
import Projects from "./Pages/Projectlist"
import AboutMe from './Pages/aboutme'
import Feedback from "./Pages/feedback"
import Footer from "./Pages/Footer"

import '../src/Pages/css/index.css'
import '../src/Pages/components/css/android.css'

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