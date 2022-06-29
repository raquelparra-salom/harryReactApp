import React from "react";

function Character(props) {

    return (
        <div className='List'>
            <h2>{props.title}</h2>
            <img src={props.img} alt="harryPotter" width="500" height="auto"></img>
            <p>Casa a la que pertenece: {props.house}</p>
        </div>
    )
}

export { Character }