import { useState } from "react";
import BudgetItem from "./BudgetItem";

const PanelBudgetsList = ({ listBudgets, actionDelete, actionModify }) => {
  
  const [action, setAction] = useState(0);
  
  function onFilter(filter) {
    
    if (filter === 'byName') {
      listBudgets.sort((x, y) => x.budgetName.localeCompare(y.budgetName))
      setAction(()=> action + 1)
    }
    if (filter === 'byDate') {
      listBudgets.sort((x, y) => x.date.localeCompare(y.date))
      setAction(()=> action + 1)
    }
    if (filter === 'byTotal') {
      listBudgets.sort((x, y) => (y.total)-(x.total))
      setAction(()=> action + 1)
    }
    if (filter === 'byDefault') {
      listBudgets.sort((x, y) => x.date.localeCompare(y.date))
      setAction(()=> action + 1)
    }
  }

  return (
    <>
        <p>FILTRES: APLICAR PER ...</p>
        <div className="container mt-3 w-100 shadow p-3 mb-5 bg-light.bg-gradient rounded">
          <button type="button"
            className="btn btn-primary ms-0 my-auto"
            onClick={event => onFilter('byName')}>
            NOM
          </button>
          <button type="button"
            className="btn btn-primary  ms-1 my-auto"
            onClick={event => onFilter('byDate')}>
            DATA
          </button>
           <button type="button"
          className="btn btn-primary ms-1 my-auto"
          onClick={event => onFilter('byTotal')}>
          TOTAL
          </button>
          <button type="button"
          className="btn btn-warning ms-1 my-auto"
          onClick={event => onFilter('byDefault')}>
          DEFECTE
          </button>
        </div><br />

        <p>NUM. DE PRESSUPOSTOS: {listBudgets.length}</p>
        <div className="container-budgets">
        {listBudgets.length === 0 ? (
          <h1>NO EXISTEIX CAP PRESSUPOST</h1>
        ) : (
          
          listBudgets.map((presu, index) => {
            return (
              <>
                <BudgetItem
                  presu={presu}
                  i={index}
                  actionDelete={actionDelete}
                  actionModify={actionModify}
                />
              </>
            );
          })
        )}
        </div>
    </>
  );
};

export default PanelBudgetsList;

