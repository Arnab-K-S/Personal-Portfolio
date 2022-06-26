import './navbar.css'
import Dropdown from './dropdown'
import { Link} from "react-router-dom"
const menu=[
    {id:1 , name:"Home"         ,address:"/"},
    {id:2 , name:"Project List" ,address:"/projects"},
    {id:3,  name:"About Me"     ,address:"/me"},
    {id:4,  name:"Feedback"     ,address:"/feedback"}
]



const Navbar =()=>{
    return(
    <nav>
        <h1 id='welcome'>Welcome</h1>
            <ul>
                {menu.map((options)=>(
                    <li id={options.id}>
                        <button><Link to={options.address} className="navigation">{options.name}</Link></button>
                    </li>
                ))}
                <Dropdown/>
            </ul>
    </nav>
    )
}

export default Navbar;