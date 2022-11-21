import React from "react";
import "./styles.css";



const Counter = ({ movementsList }) => {
  
    const sum = movementsList.reduce((accumulator, currentValue) => {

        if(currentValue.category === "entrada"){

            return accumulator + Number(currentValue.value);
        }
        else{
            return accumulator - Number(currentValue.value);

        }
  }, 0);


  return (
    <div className="form">
      <div className="flex between">
        <p>Valor Total</p>
        <span className="title-2 colorPrimary">${ sum }</span>
      </div>

      <p className="text-2">O valor se refere ao saldo</p>
    </div>
  );
};

export default Counter;
