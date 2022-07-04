// import './css/cursor.css'
import {useState} from 'react'
const Cursor=()=>{
    const [mouseY,setMouseY] = useState('0px');
    const [mouseX,setMouseX] = useState('0px');
    const moveCursor = (e) => {
        setMouseY(e.clientY)
        setMouseX(e.clientX)
    }
    // window.addEventListener('mousemove', )
    return(
        <>
            <div className="move" onMouseMove={moveCursor} ></div>
        <div className="cursor"
         style={
            {'top':mouseY,'left':mouseX }
        }> </div>
        </>
    )
}

export default Cursor