import './navbar.css'
import Dropdown from './dropdown'
const menu=[
    {id:1 , name:"Home"},
    {id:2 , name:"Project List"},
    {id:3,  name:"About Me"},
    {id:4,  name:"Feedback"}
]
const Navbar =()=>{
    return(
    <nav>
        <h1 id='welcome'>Welcome</h1>
            <ul>
                {menu.map((options)=>(
                    <li id={options.id}><button>
                        {options.name}
                </button></li>
                ))}
                <Dropdown/>
            </ul>
        </nav>)
}

export default Navbar;