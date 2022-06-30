import { useState } from "react"
const Dropdown=()=>{
    const [dp,setdp]=useState("none");
    const [dp2,setdp2]=useState("none");

    const newTheme=(event)=>{
        console.log(event.currentTarget.id)
        document.body.removeAttribute('class');
        document.body.classList.add(event.currentTarget.id)
    }


    const show=()=>{setdp("block")}
    const hide=()=>{setdp("none")}; 
    const show2=()=>{setdp2("block")}
    const hide2=()=>{setdp2("none")}; 
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
                <button onClick={newTheme} id="redbaselight">Red Base Light</button>
                <hr/>
                <div class="dropdown" onMouseLeave={() => hide2()}>
                    <button id="morethemes" onMouseEnter={() => show2()}
                        class="dropbtn">More Themes</button>
                    <div id="dropmenu2" style={{ "display": dp2 }}>
                <button onClick={newTheme} id="greenery">Greenery</button>
                <button onClick={newTheme} id="redbase">Red Base</button>
                <button onClick={newTheme} id="purewhite">Pure White</button>
                </div>
                </div>
        </div>
    </div>
    </>)
}

export default Dropdown