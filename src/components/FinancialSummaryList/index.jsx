
import React from 'react'
import FinancialCard from './FinancialCard'
import './styles.css'

const FinancialList = ({movementsList, removeMovement}) => {
  return (
    <div>
        <ul className='movementsList clean-list'>
            {movementsList.map((moneyMovement,index) => 
                <FinancialCard key={index} moneyMovement={moneyMovement} removeMovement = {removeMovement}/>)}
        </ul>
    </div>
  )
}

export default FinancialList