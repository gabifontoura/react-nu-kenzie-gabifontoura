import React from 'react'
import './styles.css'

const ButtonPrimary = ({content,onClick, onChange}) => {
  return (
    <div>
      <button className='btnPrimary' onClick={onClick} onChange={onChange}>{content}</button>
    </div>
  )
}

export default ButtonPrimary