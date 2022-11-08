import React from 'react';
import styling from './Input.module.css';

export default function Input(props) {


  return (
    <div>
        <div className={styling.inputContainer}>
            <input
                defaultValue={props.defaultValue}
                className={props.className}
                name={props.name} 
                type={props.type} 
                placeholder={props.placeholder} 
                onChange={props.onChange}
                id={props.id}
                onBlur={props.onBlur}
                ref={props.ref}
            />
            {props.passIcon != undefined ? <img className={styling.passIcon} src={require(`../assets/${props.passIcon}.svg`)}/> : null}
        </div>
    </div>
  )
}
