import './navbar.css'
import Dropdown from './dropdown'
import { Link} from "react-router-dom"
const menu=[
    { id: 1, name: "Home", address:"Personal-Portfolio/"},
    { id: 2, name: "Project List", address:"Personal-Portfolio/projects"},
    { id: 3, name: "About Me", address:"Personal-Portfolio/me"},
    { id: 4, name: "Feedback", address:"Personal-Portfolio/feedback"}
]



const Navbar =()=>{
    return(
    <nav>
        <h1 id='welcome'>Welcome</h1>
            <ul>
                {menu.map((options)=>(
                    <li id={options.id}>
                        <Link to={options.address} className="navigation"> <button>{options.name}</button></Link>
                    </li>
                ))}
                <Dropdown/>
            </ul>
    </nav>
    )
}

export default Navbar;