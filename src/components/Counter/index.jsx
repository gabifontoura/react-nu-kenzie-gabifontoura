import React from 'react'
import './styles.css'
import { useState } from 'react'

const Counter = () => {
    
    const [counter, setCounter] = useState(0)

    function add(){
        console.log("+")
        setCounter(counter + 1)
    }

    function sub(){
        console.log("-")
        setCounter(counter - 1)
    }
  return (
    <div className='form'>
        <div className='flex between'>
            <p>Valor Total</p>  
            <span>${counter}</span>

        </div>
            <button type='button' onClick={add}>+</button>
            <button type='button' onClick={sub}>-</button>
        <p className='text-2'>O valor se refere ao saldo</p>
    </div>
  )
}

export default Counter