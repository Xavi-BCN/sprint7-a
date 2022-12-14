//import BudgetItem from "./BudgetItem"
import { useEffect } from "react";

const PanelBudgetsList = ({ data }) => {
    
    //useEffect(() => {}, [data]);

  return (
    <>
    {data.map((presu, i) => {
        return (
            <>
                
                <h6 key={i} id={i}>Nom pressupost:{presu.budgetName}</h6>
                <h6 key={i} id={i}>Client:{presu.costumerName}</h6>
                <h6 key={i} id={i}>Data:{presu.date}</h6>
                <h6 key={i} id={i}>Servei Web:{presu.web}</h6>
                <h6 key={i} id={i}>Pàgines:{presu.pages}</h6>
                <h6 key={i} id={i}>Idiomes:{presu.lang}</h6>
                <h6 key={i} id={i}>Servei Seo:{presu.seo}</h6>
                <h6 key={i} id={i}>Servei Ads:{presu.ads}</h6>
                <hr width="75%" />
            </>
        )
    })}
    </>
  );
};

export default PanelBudgetsList;
