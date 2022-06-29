import { useState, createContext } from "react"
const theme=createContext();
const Dropdown=()=>{
    const [dp,setdp]=useState("none");

    const newTheme=(event)=>{
        console.log(event.currentTarget.id)
        document.body.removeAttribute('class');
        document.body.classList.add(event.currentTarget.id)
    }


    const show=()=>{setdp("block")}
    const hide=()=>{setdp("none")}; 
    return(<>
        <div class="dropdown" onMouseLeave={() => hide()}>
                <button id="themes"
                 onMouseEnter={()=>show()} 
                 class="dropbtn">Themes</button>
        <div id="dropmenu" style={{ "display": dp }} >
                <button onClick={newTheme} id="default">Default</button>
                <button onClick={newTheme} id="DarkTheme">Dark</button>
                <button onClick={newTheme} id="Ocean">Ocean</button>
                <button onClick={newTheme} id="neongreen">Neon Green</button>
                <button onClick={newTheme} id="greenery">Greenery</button>
                <button onClick={newTheme} id="purewhite">Pure White</button>
                <button onClick={newTheme} id="redbase">Red Base</button>
        </div>
    </div>
    </>)
}

export default Dropdown