import "./App.css";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import { useState } from "react";
import { movementsData } from "./data/data";
import React from "react";

const App = () => {
  const [login, setLogin] = useState(false);
  const [movementsList, setMovementList] = useState(movementsData);
  const [filter, setFilter] = useState("todos");

  const filteredMovementList = movementsList.filter((movement) =>
    filter === "todos" ? true : movement.category === filter
  );

  const addMovement = (movementsData) => {
    setMovementList([...movementsList, movementsData]);
  };

  const removeMovement = (movementsTitle) => {
    const newList = movementsList.filter(
      (moneyMovement) => moneyMovement.title !== movementsTitle
    );
    setMovementList(newList);
  };

  const validateColor = (value) => {
    if (filter === value) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="App">
      {login ? (
        <HomePage
          movementsList={filteredMovementList}
          filter={filter}
          addMovement={addMovement}
          removeMovement={removeMovement}
          setFilter={setFilter}
          setLogin={setLogin}
          validateColor={validateColor}
        />
      ) : (
        <LandingPage setLogin={setLogin} />
      )}
    </div>
  );
};

export default App;
