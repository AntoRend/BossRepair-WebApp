import React from 'react'
import './button.css'

function Button (props) {
  return <div className='boton-h button-div mr-4 text-right'><button onClick={props.onClick} className={`primary-button ${props.class}`}>{props.text}</button></div>
}

export default Button
