import React, { useEffect } from 'react'
import { useState } from 'react'
import { getDatabase, ref, onValue, child } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCsa8Tj_5kj5ugy2PLwowp6Z0u-T6RRhJs",
    authDomain: "personal-portfolio-websi-b804f.firebaseapp.com",
    projectId: "personal-portfolio-websi-b804f",
    storageBucket: "personal-portfolio-websi-b804f.appspot.com",
    messagingSenderId: "430090594611",
    databaseURL: "https://personal-portfolio-websi-b804f-default-rtdb.firebaseio.com/",
    appId: "1:430090594611:web:e99a41451558fbd4107646"
};

function CommentBox(){
    const [newUserState, setNewUserState] = useState([])
    const showComments = () => {
        console.log(newUserState);
        setNewUserState(newUserState);
    }
        const app = initializeApp(firebaseConfig);
        const db = getDatabase();
        const starCountRef = ref(db, 'users/')
        onValue(starCountRef, (snapshot) => {
            snapshot.forEach(data => {
            newUserState.push({
                Name    : data.val().username,
                Email   : data.val().email,
                Comment : data.val().comment,
            })
            })
        });

        useEffect(()=>{
            console.log(newUserState)
        })
    return(
        <>
            <button id='box' onClick={showComments} >Show Comments</button>
        <div className="commentbox" >
            <ul>
                {newUserState.map((options) => (
                    <li>{options.Name} {options.Email} </li>
                ))}
                </ul>
        </div>
        </>
    )
}
    
    export default CommentBox