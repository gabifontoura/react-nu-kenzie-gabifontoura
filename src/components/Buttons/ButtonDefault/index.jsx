import React from 'react'
import './styles.css'

const ButtonDefault = ({content, onClick}) => {
  return (
    <div>

        <button className='btnDefault' onClick={onClick}>{content}</button>
    </div>
  )
}

export default ButtonDefault