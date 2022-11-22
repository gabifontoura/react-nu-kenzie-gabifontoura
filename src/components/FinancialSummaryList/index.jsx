import React from "react";
import "./styles.css";

import FinancialCard from "./FinancialCard";
import NoCard from "../../assets/NoCard.svg"

const FinancialList = ({ movementsList, removeMovement }) => {
  return (
    <div>
      <ul className="movementsList clean-list flex column gap-2rem">
        
        { movementsList.length > 0 ? 
        
        movementsList.map((moneyMovement, index) => (
         
          <FinancialCard
            key={index}
            moneyMovement={moneyMovement}
            removeMovement={removeMovement}
          />
         
        ))

        :
        
        <div className="flex column gap-2rem padding-2rem">
            <p className="title-2 ">Você ainda não possui nenhum lançamento</p>
            <img src={NoCard} alt="" />
            <img src={NoCard} alt="" />
            <img src={NoCard} alt="" />

        </div>
      
      }
      </ul>
    </div>
  );
};

export default FinancialList;
