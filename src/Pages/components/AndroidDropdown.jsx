import { useState } from "react"
const themes = ["DarkTheme", "Ocean", "neongreen", "redbaselight", "greenery", "redbase", "purewhite","default"]
const ADropdown = () => {
    const [cur,setcur]=useState(0)

    const newTheme = () => {
        console.log("Executed")
        if (cur<8)
            setcur(cur+1)
        else
            setcur(0)
        document.body.removeAttribute('class');
        document.body.classList.add(themes[cur]);
    }



    return (<>
            <button id="athemes" onClick={newTheme}>
                <span class="material-symbols-outlined">
                dark_mode
            </span>
            </button>
    </>)
}

export default ADropdown
