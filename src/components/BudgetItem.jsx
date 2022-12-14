import { useEffect } from "react";

function BudgetItem({ presu, i }) {
  //const arrayBudguets = JSON.parse(localStorage.getItem('Presupuesto')) ?? []

  /*  useEffect(() => { 
        
    },[data]) */

  return (
    <div className="container-item" key={i} id={i}>
      <div className="card text-info mt-3 w-100 shadow p-3 mb-5 bg-light.bg-gradient rounded" style={{ width: "9rem" }}>
        <div className="card-body">
          <h1 className="card-title text-warning bg-dark">{presu.budgetName}</h1>
          <h2 className="card-subtitle mb-2 text-muted">
          {presu.costumerName}
          </h2>
          <div className="card-text">
          <h3>Data: {presu.date}</h3>
            {(presu.web) ? (<> <h4 className="text-success">Servei Web: SI</h4><h5>Pàgines: {presu.pages} Idiomes: {presu.lang} </h5></>) : <h5 className='text-danger'>Servei Web: No contractat</h5>}
            {(presu.seo) ? (<> <h4 className="text-success">Servei Seo: SI</h4></>) : <h5 className='text-danger'>Servei Seo: No contractat</h5>}
            {(presu.ads) ? (<> <h4 className="text-success">Servei Ads: SI</h4></>) : <h5 className='text-danger'>Servei Ads: No contractat</h5>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudgetItem;
