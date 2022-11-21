
import "./styles.css";
import "../../App.css";

import Header from "../../components/Header";
import FinancialList from "../../components/FinancialSummaryList";
import MoneyMovementForm from "../../components/Form";
import ButtonDefault from "../../components/Buttons/ButtonDefault";
import Counter from "../../components/Counter";
import { categoryData } from "../../data/data";

const HomePage = ({
  movementsList,
  addMovement,
  removeMovement,
  setFilter,
  setLogin,
  validateColor
}) => {



  return (
    <div>
      <Header setLogin={setLogin} />

      <main className="container flex between">
        <section>
          <MoneyMovementForm addMovement={addMovement} />
          <Counter movementsList={movementsList} />
        </section>

        <section className="summary">
          <nav className="nav flex between gap-1rem">
            <h1 className="title-2">Resumo Financeiro</h1>
            <ul className="btn-list flex gap-1rem clean-list">
              {categoryData.map((category, index) => {
    
                return (
                    
                    <li key={index}>
                      <ButtonDefault
                        className={
                          validateColor(category.value) ? "primary btnDefault" : "default btnDefault"
                        }
                        onClick={() => setFilter(category.value)}
                        content={category.label}
                      />
                    </li>
                  )
              })}
            </ul>
          </nav>
          <FinancialList
            movementsList={movementsList}
            removeMovement={removeMovement}
          />
        </section>
      </main>
    </div>
  );
};

export default HomePage;
