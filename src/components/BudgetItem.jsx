import { useEffect } from "react";

function BudgetItem({ presu, i }) {
  //const arrayBudguets = JSON.parse(localStorage.getItem('Presupuesto')) ?? []

  /*  useEffect(() => { 
        
    },[data]) */

  return (
    <div className="container-item" key={i} id={i}>
      <div className="card text-info bg-dark mt-3 w-75" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{presu.budgetName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
          {presu.costumerName}
          </h6>
          <div className="card-text">
          <h6>Data:{presu.date}</h6>
                <h6>Servei Web:{presu.web}</h6>
                <h6>Pàgines:{presu.pages}</h6>
                <h6>Idiomes:{presu.lang}</h6>
                <h6>Servei Seo:{presu.seo}</h6>
                <h6>Servei Ads:{presu.ads}</h6>
          </div>
          <a href="#" className="card-link">
            Enlace de tarjeta
          </a>
          <a href="#" className="card-link">
            Otro enlace
          </a>
        </div>
      </div>

      {/* <h6>Nom pressupost:{presu.budgetName}</h6>
                <h6>Client:{presu.costumerName}</h6>
                <h6>Data:{presu.date}</h6>
                <h6>Servei Web:{presu.web}</h6>
                <h6>Pàgines:{presu.pages}</h6>
                <h6>Idiomes:{presu.lang}</h6>
                <h6>Servei Seo:{presu.seo}</h6>
                <h6>Servei Ads:{presu.ads}</h6>
                <hr width="75%" /> */}
    </div>
  );
}

export default BudgetItem;
