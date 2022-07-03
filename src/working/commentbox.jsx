import React from 'react'
// import { useState } from 'react'
// import { getDatabase, ref, onValue, child } from "firebase/database";
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCsa8Tj_5kj5ugy2PLwowp6Z0u-T6RRhJs",
    authDomain: "personal-portfolio-websi-b804f.firebaseapp.com",
    projectId: "personal-portfolio-websi-b804f",
    storageBucket: "personal-portfolio-websi-b804f.appspot.com",
    messagingSenderId: "430090594611",
    databaseURL: "https://personal-portfolio-websi-b804f-default-rtdb.firebaseio.com/",
    appId: "1:430090594611:web:e99a41451558fbd4107646"
};
// const cb =cb;
function CommentBox() {
    return (
        <>
            <div id="commentbox" className="commentbox" >
                <ul>
                    <li>
                        <h1>Arnab Kumar Singh</h1>
                        <span id='emailspan'></span>
                    </li>
                </ul>
            </div>
        </>
    );


}

export default CommentBox