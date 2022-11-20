
import './App.css';
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import { useState } from 'react';
import { categoryData, movementsData } from './data/data';
import React from 'react'


const App = () => { 

  

  const [login, setLogin] = useState(false)
  const [categoryList, setCategoryList] = useState(categoryData)
  const [movementsList, setMovementList] = useState(movementsData)
  const [filter, setFilter] = useState('todos')

  const filteredMovementList = movementsList.filter(movement => filter === 'todos' ? true : movement.category === filter)

  
  
  
  const addMovement = (movementsData) => {
    setMovementList([...movementsList,movementsData])
  }

  const removeMovement = (movementsTitle) => {
    const newList =movementsList.filter(moneyMovement => moneyMovement.title !== movementsTitle)
    setMovementList(newList)
   
  }
  
  
  return ( 
    <div className="App">

      {login ? ( <HomePage 
        movementsList={filteredMovementList} 
        categoryList={categoryList} 
        addMovement={addMovement}
        removeMovement={removeMovement}
        setFilter={setFilter}
        setLogin={setLogin} 
         />
         ) : (
         <LandingPage setLogin={setLogin} />
         ) }
  
    
    </div>
  );
}

export default App;
