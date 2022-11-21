import React from "react";
import "./styles.css";

const ButtonPrimary = ({ content, onClick, onChange, type }) => {
  return (
    <div>
      <button
        className="btnPrimary"
        type={type}
        onClick={onClick}
        onChange={onChange}
      >
        {content}
      </button>
    </div>
  );
};

export default ButtonPrimary;
