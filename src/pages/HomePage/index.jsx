import React from 'react'
import './styles.css'
import '../../App.css'

import Header from '../../components/Header'
import FinancialList from '../../components/FinancialSummaryList'
import MoneyMovementForm from '../../components/Form'
import ButtonDefault from '../../components/Buttons/ButtonDefault'
import Counter from '../../components/Counter'


const HomePage = ({movementsList, categoryList, addMovement, removeMovement, setFilter, setLogin}) => {
  return (
    <div>
        <Header setLogin = { setLogin } />
        <main className='container flex between'>

            <section>
                <MoneyMovementForm categoryList={categoryList} addMovement={addMovement} />
                {/* <Counter /> */}
            </section>


            <section className='summary'>
                <nav className='nav flex between gap-1rem'>
                    <h1 className='title-2'>Resumo Financeiro</h1> 
                    <ul className='btn-list flex gap-1rem clean-list'>
                        <li onClick={()=> setFilter('todos')}><ButtonDefault content='Todas'/></li>
                        {categoryList.map((category, index) => (
                            <li onClick={()=> setFilter(category.value)} key={index}><ButtonDefault content={category.label}/></li>

                        ))}
                    

                    </ul>
                </nav>
                <FinancialList movementsList= {movementsList} removeMovement = {removeMovement}/>
            </section>
        </main>

    </div>
  )
}

export default HomePage