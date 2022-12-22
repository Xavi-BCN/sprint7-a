import { useEffect } from "react";
import BudgetItem from "./BudgetItem";

const PanelBudgetsList = ({ data, actionDelete, actionModify }) => {
  useEffect(() => {}, [data]);

  function onChange(name) {

  
    if (name === 'nom'){
      alert(name)
      /* order = [...data]
      .map(presu => presu.budgetName)
      .sort() */
    }
    //return order;
  }


  return (
    <>
    <p>FILTRES PER APLICAR</p><br />
    <button type="button"
     className="nom btn btn-primary"
     onClick={event => onChange(event.target.className)}>
      PER NOM
    </button>
  
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
