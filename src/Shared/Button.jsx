import React from 'react'

const Button = (props) => {
    const className="bg-gray-dark text-white font-semibold pr-5 pl-5 pt-3 pb-3 hover:bg-white hover:text-gray-dark " + props.className;
  return (
    <div>
    <button className={className} onClick={props.onClick} {...props}>{props.buttonname}</button>
    </div>
  )
}

export default Button