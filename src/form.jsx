import React from 'react'
import { useState } from 'react'
import { getDatabase, push, ref } from "firebase/database";
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
const Form = () => {
    const app = initializeApp(firebaseConfig);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    // name, email, comment
    function send() {
        const db = getDatabase();
        if (name!==' ' && email!==' ' && comment!==' '){
            push(ref(db, 'users/'), {
            username: name,
            email: email,
            comment: comment
        });
            alert("Comment added! Thank you for your feedback");
            setName('');
            setEmail('');
            setComment('')
            
        }else{
                alert("Please fill all the necesarry fields");
            }
        
    }

    return (
        <>
            <div className="container">
                <input id="name" value={name} placeholder="Enter you Name"  onChange={(getName) => setName(getName.target.value)} />
                <input type="email" value={email} id="email" placeholder="Enter your email : someone@domain.com" onChange={(getEmail) => setEmail(getEmail.target.value)} />
                <textarea id="comment" value={comment} rows="4" cols="50" placeholder="Write a comment" onChange={(getComment) => setComment(getComment.target.value)} />
                <button id="submit" onClick={send}>Submit</button>
                <div className="commentContainer"></div>
            </div>
        </>

    )
}

export default Form