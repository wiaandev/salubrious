import React from 'react';

export default function Dropdown(props) {
  return (
    <option className={props.className} name={props.name} value={props.dropItem}>{props.dropItem}</option>
  )
}
