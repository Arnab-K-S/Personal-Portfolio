import './navbar.css'
import Dropdown from './dropdown'
import { NavLink} from "react-router-dom"
import { useState } from 'react'
import ANavbar from './androidnav'
const menu=[
    { id: 1, name: "Home", address:"Personal-Portfolio-Reactjs/",'pos':'101.5vh'},
    { id: 2, name: "Project List", address:"Personal-Portfolio-Reactjs/projects",'pos':'81vh'},
    { id: 3, name: "About Me", address:"Personal-Portfolio-Reactjs/me",'pos':'60vh'},
    { id: 4, name: "Feedback", address:"Personal-Portfolio-Reactjs/feedback",'pos':'38.5vh'}
]
// 46  34.5 23% 11.5%
const Navbar =()=>{
    const [pos,setPos]=useState('101.5vh')
    const underLine=(parm)=>{setPos(parm);}
    return(
    <>
    <nav>
        <h1 id='welcome'>Welcome</h1>
            <ul>
                {menu.map((options)=>(
                    <li id={options.id}>
                        <NavLink to={options.address} className="navigation" activeClassName="active"> <button onClick={()=>underLine(options.pos)}>{options.name}</button></NavLink>
                    </li>
                ))}
                <Dropdown/>
    <div className="underline" style={{'right':pos}}></div>
            </ul>
    </nav>
    <ANavbar/>
        </>
    )
}

export default Navbar;