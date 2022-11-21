import React from "react";
import "./styles.css";
import trash from "../../../assets/trash.svg";

const FinancialCard = ({ moneyMovement, removeMovement }) => {
  return (
    <div>
      <li
        className={
          moneyMovement.category === "entrada"
            ? "card flex between cardBorderGreen"
            : "card flex between cardBorderGrey"
        }
      >
        <section className="flex column gap-05rem">
          <h3>{moneyMovement.title}</h3>
          <h4 className="text-2">{moneyMovement.category}</h4>
        </section>
        <section className="flex gap-3rem align-start">
          <h5 className="text-2">R${moneyMovement.value}</h5>
          <button
            onClick={() => removeMovement(moneyMovement.title)}
            className="clean-btn"
          >
            <img src={trash} alt="remove" />
          </button>
        </section>
      </li>
    </div>
  );
};

export default FinancialCard;
