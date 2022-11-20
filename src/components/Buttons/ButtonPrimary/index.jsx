import React from 'react'
import './styles.css'

const ButtonPrimary = ({content,onClick}) => {
  return (
    <div>
      <button className='btnPrimary' onClick={onClick}>{content}</button>
    </div>
  )
}

export default ButtonPrimary