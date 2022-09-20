import React from "react"
import "./styles.css" 


interface ButtonProps {
  customStyle?: {}
  customClassName?: string
  children:   JSX.Element
  onClick?: () => void
  href?: string
}
function Button(props: ButtonProps) {
  return (
    <a href={props.href ? props.href : '#'}  target="__blank" onClick={props.onClick} className={props.customClassName ? props.customClassName : "custom_btn"} style={{...props.customStyle, textDecoration: 'none',}}>
      {props.children}
    </a>
  )
}

export default Button