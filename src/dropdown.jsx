import Wave from "./svgwave";
const Dropdown=()=>{
    return(<>
    <div class="dropdown">
        <button id="themes" class="dropbtn">Themes</button>
            <div id="dropmenu">
                <button id="default">Default</button>
                <button id="dark">Dark</button>
                <button id="greenery" >Greenery</button>
                <button id="purewhite">Pure White</button>
        </div>
    </div>
    </>)
}



export default Dropdown