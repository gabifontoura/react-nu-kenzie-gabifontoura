import React from 'react'
import './styles.css'
import trash from '../../../assets/trash.svg'


const FinancialCard = ({moneyMovement, removeMovement}) => {
  return (
    <div>
        <li className='card flex between'>
            <section>
                <h3>{moneyMovement.title}</h3>
                <h4>{moneyMovement.category}</h4>
            </section>
            <section className='flex gap-3rem align-start'>
                <h5>R${moneyMovement.value}</h5>
                <button onClick={() => removeMovement(moneyMovement.title)} className='clean-btn'>
                    <img src={trash} alt="remove" />
                </button>

            </section>
        </li>
    </div>
  )
}

export default FinancialCard