import { useEffect } from "react";
import BudgetItem from "./BudgetItem";

const PanelBudgetsList = ({ data }) => {
    
    useEffect(() => {}, [data]);

  return (
    <>
    {data.map((presu,i) => {
        return (
            <>
                <BudgetItem presu={presu} i={i}/>
            </>
        )
    })}
    </>
  );
};

export default PanelBudgetsList;

//.sort((a, b) => a.date > b.date)
//.sort((x, y) => x.name.localeCompare(y.name));