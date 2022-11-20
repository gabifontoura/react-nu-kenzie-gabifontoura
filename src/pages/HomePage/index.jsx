import React from 'react'
import './styles.css'
import Header from '../../components/Header'
import FinancialList from '../../components/FinancialSummaryList'
import MoneyMovementForm from '../../components/Form'
import ButtonDefault from '../../components/Buttons/ButtonDefault'


const HomePage = ({movementsList, categoryList, addMovement, removeMovement, setFilter, setLogin}) => {
  return (
    <div>
        <Header setLogin = { setLogin} />
        <main className='container flex between'>

        <MoneyMovementForm categoryList={categoryList} addMovement={addMovement} />

        <section className='summary'>
        <nav className='nav flex between'>
            <h1>Resumo Financeiro</h1> 
            <ul className='flex gap-1rem clean-list'>
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