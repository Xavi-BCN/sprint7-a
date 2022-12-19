import { useEffect } from "react";
import BudgetItem from "./BudgetItem";

const PanelBudgetsList = ({ data, action }) => {
    
    useEffect(() => {}, [data]);

    /* function actionDelete(i){
      alert(`Eliminar registro ${i}`)
      data.slice(i, 1);
    }
    function actionModify(i){
      alert(`Modificar registro ${i}`)
    }
    function actionPrint(i){
      alert(`Imprimir registro ${i}`)
    } */

    /* function actions(i,name){
      alert(i, name)
      //setlistBudgets(listBudgets.slice(i, 1));
    } */

  return (
    <>
    {data.map((presu,i) => {
        return (
            <>
                <BudgetItem presu={presu} i={i} action={action}/>
            </>
        )
    })}
    </>
  );
};

export default PanelBudgetsList;

//.sort((a, b) => a.date > b.date)
//.sort((x, y) => x.name.localeCompare(y.name));