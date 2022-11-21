import React from "react"
import "./styles.css"

const ButtonDefault = ({content, onClick, onChange,className}) => {
  return (
    <div>

        <button className={className} onClick={onClick} onChange={onChange}>{content}</button>
    </div>
  )
}

export default ButtonDefault