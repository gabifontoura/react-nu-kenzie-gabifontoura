import React, { useState } from "react";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import InputDefault from "../Inputs";

import "./styles.css";
import "../../App.css";
import { categoryData } from "../../data/data";

const MoneyMovementForm = ({ addMovement }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: categoryData[1].value,
    value: "",
  });

  const submit = (event) => {
    event.preventDefault();

    if (
      formData.title !== "" &&
      formData.value !== "" &&
      formData.category !== ""
    ) {
      addMovement(formData);
      setFormData({
        title: "",
        category: categoryData[1].value,
        value: "",
      });
    }
  };

  const newCategoryList = categoryData.filter(
    (category) => category.value !== "todos"
  );

  return (
    <form onSubmit={submit} className="form flex column gap-2rem">
      <InputDefault
        value={formData.title}
        onChange={(event) =>
          setFormData({ ...formData, title: event.target.value })
        }
        labelContent="Descrição"
        htmlFor="title"
        name="title"
        type="text"
        placeholder="Digite aqui sua descrição"
        required
      />

      <div className="flex between gap-1rem">
        <div className="currencyDiv">
          <InputDefault
            value={formData.value}
            onChange={(event) =>
              setFormData({ ...formData, value: event.target.value })
            }
            labelContent="Valor"
            htmlFor="value"
            name="value"
            type="number"
            placeholder="1"
            required
          />
          <span className="absolute currency">R$</span>
        </div>

        <div className="flex column gap-05rem">
          <label htmlFor="category">Tipo de Valor</label>
          <select
            defaultValue={formData.category}
            onChange={(event) =>
              setFormData({ ...formData, category: event.target.value })
            }
            name="category"
            className="select"
            required
          >
            {newCategoryList.map((category) => (
              <option
                key={category.value}
                value={category.value}
                className="text-2"
              >
                {category.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ButtonPrimary type="submit" content="Inserir Valor" />
    </form>
  );
};

export default MoneyMovementForm;
