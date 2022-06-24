import React from 'react';


const Cards=(props)=>{
        let cardHeading=props.cardHeading;
        let cardImg=props.cardImg;
        let cardText=props.cardText;
    return(     
    <>
        <div className="card">
            <h1>{cardHeading}</h1>
            <div className="cardbody">
            <img src={cardImg} alt='.'/>
            {cardText}
            </div>
        </div>
    </>
    );
}



export default Cards