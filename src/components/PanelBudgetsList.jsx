import { useEffect, useState } from "react";
import BudgetItem from "./BudgetItem";

const PanelBudgetsList = ({ listBudgets, actionDelete, actionModify, setListBudgets }) => {
  
  const [tempArray, setTempArray] = useState([listBudgets]);
  
   useEffect(() => {
    
  }, [tempArray]);
  
  function onFilter(filter) {
    
    
    
    if (filter === 'byName') {
      
      //tempArray = listBudgets.sort((x, y) => x.budgetName.localeCompare(y.budgetName))
      setTempArray(listBudgets.sort((x, y) => x.budgetName.localeCompare(y.budgetName)))
      console.log(tempArray)
    }

    if (filter === 'byDate') {
      
      //tempArray = listBudgets.sort((x, y) => x.date.localeCompare(y.date))
      setTempArray(listBudgets.sort((x, y) => x.date.localeCompare(y.date)))
      console.log(tempArray)
    }
    if (filter === 'byTotal') {
      
      //tempArray = listBudgets.sort((x, y) => (y.total)-(x.total) )
      setTempArray(listBudgets.sort((x, y) => (y.total)-(x.total) ))
      console.log(tempArray)
    }
  }


  return (
    <>
        <p>FILTRES PER APLICAR</p>
        <div className="container">
          <button type="button"
            className="btn btn-primary ms-0 my-auto"
            onClick={event => onFilter('byName')}>
            PER NOM PRESSUPOST
          </button>
          <button type="button"
            className="btn btn-primary  ms-1 my-auto"
            onClick={event => onFilter('byDate')}>
            PER DATA
          </button>
           <button type="button"
          className="btn btn-primary ms-1 my-auto"
          onClick={event => onFilter('byTotal')}>
          IMPORT TOTAL
          </button>
        </div><br />

        <p>LLISTAT DE PRESSUPOSTOS</p>

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
    </>
  );
};

export default PanelBudgetsList;

