import React, { useState } from 'react'
import ButtonPrimary from '../Buttons/ButtonPrimary'
import InputDefault from '../Inputs'

import './styles.css'


const MoneyMovementForm = ({categoryList, addMovement}) => {
    
    const [formData, setFormData] = useState({
        title: '',
        category: categoryList[0].value,
        value: '',
    
    })


     
    const submit = (event) => {
        event.preventDefault()
        addMovement(formData)
        setFormData({
            title: '',
            category: categoryList[0].value,
            value: '',
        })

    }

  
    

    

  return (
   <form onSubmit={submit} className='form flex column gap-2rem'>
    
    
        <InputDefault value={formData.title} onChange={(event)=> setFormData({...formData, title: event.target.value})} labelContent='Descrição' htmlFor='title' name='title' type='text' placeholder='Digite aqui sua descrição'/>

        <div className='flex between gap-1rem'>

            <div className='currencyDiv'>
                <InputDefault value={formData.value} onChange={(event)=> setFormData({...formData, value: event.target.value})}labelContent='Valor' htmlFor='value' name='value' type='number' placeholder='1'/>
                <span className='absolute currency'>R$</span>
            </div>


            <div className='flex column gap-05rem'>

                <label htmlFor='category'>Tipo de Valor</label>
                <select defaultValue={formData.category} onChange={(event)=> setFormData({...formData, category: event.target.value})} name='category' className='select'>
                    {categoryList.map((category) => (
                        <option key={category.value} value={category.value}>{category.label}</option>
                    ))}
                    
                </select>
            </div>

        </div>

        <ButtonPrimary content='Inserir Valor'/>
   </form>
  )
}

export default MoneyMovementForm