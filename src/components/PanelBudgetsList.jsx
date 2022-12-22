import { useEffect } from "react";
import BudgetItem from "./BudgetItem";

const PanelBudgetsList = ({ data, actionDelete, actionModify }) => {
  useEffect(() => {}, [data]);

  function onFilter(filter) {

    if(filter === 'byName'){
      alert(filter)
      data.sort((x, y) => x.budgetName.localeCompare(y.budgetName))
      console.log(data)
    }

    if(filter === 'byDate'){
      alert(filter)
      data.sort((x, y) => x.date.localeCompare(y.date))
      console.log(data)
    }
   /*  if(filter === 'byDate'){
      alert(filter)
      data.sort() 
      console.log(data) */
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
   {/*  <button type="button"
     className="btn btn-primary"
     onClick={event => onFilter('byDefault')}>
      RESTABLIR
    </button> */}
    </div><br />
  
  <p>LLISTAT DE PRESSUPOSTOS</p>

      {data.length === 0 ? (
        <h1>NO EXISTEIX CAP PRESSUPOST</h1>
      ) : (
        data.map((presu, index) => {
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

//.sort((a, b) => a.date > b.date)
//.sort((x, y) => x.name.localeCompare(y.name));
