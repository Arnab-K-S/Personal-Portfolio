import React from 'react';


const Cards=(props)=>{
        let cardHeading=props.cardHeading;
        let cardImg=props.cardImg;
        let cardText=props.cardText;
    return(     
    <>
        <div className="card">
            <h1>{cardHeading}</h1>
            <img src={cardImg} alt='.'/>
            <div className="cardbody">
                
            {cardText}
            </div>
        </div>
    </>
    );
}

export default Cards