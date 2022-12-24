
function BudgetItem({ presu, i , actionDelete, actionModify}) {
 
  return (
    <div className="container-item" key={i} id={i}>
      <div className="card text-info mt-0 w-100 shadow p-3 mb-3 bg-light.bg-gradient rounded" style={{ width: "1rem" }}>
        <div className="card-body">
          
          <h4 className="card-title text-warning bg-dark">{presu.budgetName}</h4>
          <h4 className="card-subtitle mb-2 text-muted">
          {presu.costumerName}
          </h4>
          <div className="card-text">
          <h6>Data: {presu.date}</h6>
            {(presu.web) ? (<> <h6 className="text-success">Servei Web: SI</h6><h6>Pàgines: {presu.pages} Idiomes: {presu.lang} </h6></>) : <h6 className='text-danger'>Servei Web: No contractat</h6>}
            {(presu.seo) ? (<> <h6 className="text-success">Servei Seo: SI</h6></>) : <h6 className='text-danger'>Servei Seo: No contractat</h6>}
            {(presu.ads) ? (<> <h6 className="text-success">Servei Ads: SI</h6></>) : <h6 className='text-danger'>Servei Ads: No contractat</h6>}
            <h4 className="text-success">Total : {presu.total}€</h4>
          </div>
          <div className="card-footer"><br /><br />
            <button onClick={() => actionModify(i)} name="btn-modify" type="button" className="btn btn-outline-warning ms-1">Modificar</button>
            <button  onClick={() => actionDelete(i)} name="btn-delete" type="button" className="btn btn-outline-danger ms-2">Eliminar</button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudgetItem;
