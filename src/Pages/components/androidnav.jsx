import '../css/index.css'
import ADropdown from './AndroidDropdown'
import { NavLink } from "react-router-dom"
import { useState } from 'react'
const menu = [
    { id: 1, name: 'home', address: "Personal-Portfolio-Reactjs/", 'pos': '5%' },
    { id: 2, name: "apps", address: "Personal-Portfolio-Reactjs/projects", 'pos': '30%' },
    { id: 3, name: "info", address: "Personal-Portfolio-Reactjs/me", 'pos': '55%' },
    { id: 4, name: "sync_alt", address: "Personal-Portfolio-Reactjs/feedback", 'pos': '80%' }
]
// 7 32 57 82
const ANavbar = () => {
    const [pos, setPos] = useState('5%')
    const navbg = (parm) => { setPos(parm); }
    return (
        <>
                    <li className='aul2'><ADropdown/></li>
                <div className='aul'>
                    {menu.map((options) => (
                            <NavLink to={options.address}>
                            <button className='iconbuttons' onClick={() => navbg(options.pos)}>
                                <span class="material-symbols-outlined">
                                    {options.name}
                                </span>
                            </button>  
                            </NavLink>
                    ))}
                </div>
                <div className="navBg" style={{'left':pos}}></div>
                <div className="Bg"></div>
        </>
    )
}

export default ANavbar;