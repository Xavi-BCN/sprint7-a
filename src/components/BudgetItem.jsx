import { useEffect } from "react"

function BudgetItem({ data }) {
    //const arrayBudguets = JSON.parse(localStorage.getItem('Presupuesto')) ?? []

    useEffect(() => { 
        
    },[data])


    return (
        <div className="s">
            {data.map((presu, i) => {
                return (
                    <>
                        <h6 key={i}>Nom pressupost:{presu.budgetName}</h6>
                        {/* <h6 key={id}>Client:{presu.costumerName}</h6>
                        <h6 key={id}>Data:{presu.date}</h6>
                        <h6 key={id}>Servei Web:{presu.web}</h6>
                        <h6 key={id}>Pàgines:{presu.pages}</h6>
                        <h6 key={id}>Idiomes:{presu.lang}</h6>
                        <h6 key={id}>Servei Seo:{presu.seo}</h6>
                        <h6 key={id}>Servei Ads:{presu.ads}</h6>
                        <hr width="75%" /> */}
                    </>
                )
            })}
        </div>
    )
}

export default BudgetItem