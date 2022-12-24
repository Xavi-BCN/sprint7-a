import { useState, useEffect } from "react";
import BudgetItem from "./BudgetItem";

const PanelBudgetsList = ({ listBudgets, actionDelete, actionModify }) => {
  
  const [action, setAction] = useState(0);
  
  // const [searchBudget, setSearchBudget] = useState([]);
  //   useEffect(() => {
  //  }, [searchBudget])
  
  

  
  function onFilter(filter, search) {
    
    if (filter === 'byName') {
      listBudgets.sort((x, y) => x.budgetName.localeCompare(y.budgetName))
    }
    if (filter === 'byDate') {
      listBudgets.sort((x, y) => x.date.localeCompare(y.date))
    }
    if (filter === 'byTotal') {
      listBudgets.sort((x, y) => (y.total)-(x.total))
    }
    if (filter === 'byDefault') {
      listBudgets.sort((x, y) => x.date.localeCompare(y.date))
    }
    if (filter === 'bySearch') {
      search = (search.toUpperCase());
      console.log(search);
      //listBudgets.filter(presu => presu.budgetName.includes(search,0))
      const searchBudget = listBudgets.filter(presu => presu.budgetName.includes(search,0))
      listBudgets = searchBudget
      console.log(searchBudget);
      console.log(listBudgets)
      //console.log(listBudgets.filter(presu => presu.budgetName.includes(search,0)))
    }

    //setSearchBudget(search)
    setAction(()=> action + 1)
  }

  
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

