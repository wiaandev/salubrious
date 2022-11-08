import React from 'react';

const Button = (props) => {
    return (
        <button className={props.className} onClick={props.onClick} id={props.id} fName={props.fName}>
            <p id={props.id} fName={props.fName}>{props.name}</p>
        </button>
    );
};

export default Button;