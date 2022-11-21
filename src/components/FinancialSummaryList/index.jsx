import React from "react";
import "./styles.css";

import FinancialCard from "./FinancialCard";

const FinancialList = ({ movementsList, removeMovement }) => {
  return (
    <div>
      <ul className="movementsList clean-list flex column gap-2rem">
        {movementsList.map((moneyMovement, index) => (
          <FinancialCard
            key={index}
            moneyMovement={moneyMovement}
            removeMovement={removeMovement}
          />
        ))}
      </ul>
    </div>
  );
};

export default FinancialList;
