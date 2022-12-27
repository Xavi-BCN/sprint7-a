import { useState, useEffect } from "react";
import BudgetItem from "./BudgetItem";

const PanelBudgetsList = ({ searchBudgets, onFilter, actionDelete, actionModify }) => {

  //const [action, setAction] = useState(0);
  // const [searchBudget, setSearchBudget] = useState([]);

    /*  useEffect(() => {
      setSearchBudget([...listBudgets])
     // console.log('HE PASSAAT PEL USEEFFECTY')
    }, [listBudgets]) */
  
  

  
  

  
  const handleSearchBudget = (value) => {
    //let searchBudget = (value.toUpperCase())
    //console.log(searchBudget)
    //listBudgets.map(presu => presu.budgetName.includes(searchBudget))
    //listBudgets.filter(presu => presu.budgetName === searchBudget);
    //console.log(searchBudget)
    //setAction(()=> action + 1)
    //setSearchBudget(value.toUpperCase())
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
          "R"
          </button>
          <input
            className="form-control p-2 mt-2"
            type="text"
            placeholder="Cercador"
            onChange={event => onFilter('bySearch', event.target.value)}
          ></input>
        </div><br />

        <p>NUM. DE PRESSUPOSTOS: {searchBudgets.length}</p>
        <div className="container-budgets">
        {searchBudgets.length === 0 ? (
          <h1>NO EXISTEIX CAP PRESSUPOST</h1>
        ) : (
          
          searchBudgets.map((presu, index) => {
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

