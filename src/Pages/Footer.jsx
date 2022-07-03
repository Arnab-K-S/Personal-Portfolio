import { useState } from 'react'
import './css/footer.css'
import SocialIcons from './components/SocialIcons'
const Footer=()=>{
    const [show , setShow]=useState('hidden')
    const showfooter = () => setShow('footer')
    const hidefooter = () => setShow('hidden')

    return(
        <>
                <li className='menu'>
                    <button onClick={showfooter} id='menu'>
                        <span class="material-symbols-outlined">
                            menu
                        </span>
                    </button>
                </li>
        <footer id={show}>
                <button onClick={hidefooter} id='close'>
                    <span class="material-symbols-outlined">
                        close
                    </span>
                </button>
                <SocialIcons/>
                <h5>Copyright © | All Rights Reserved under Arnab Kumar Singh</h5>
                <h6>Note: All images are obtained from internet. I don't claim any ownership to the images.Rights belong to respective owners</h6>
        </footer>
        </>
    )
}
export default Footer

