import { useState, useEffect } from "react";
import Panel from "../components/Panel";
import PanelBudgetsList from "../components/PanelBudgetsList";

let date;
let suma = 0;
let budgetModyfying = -1;

export default function Budgets() {
  const [web, setWeb] = useState(false);
  const [seo, setSeo] = useState(false);
  const [ads, setAds] = useState(false);
  const [pages, setPages] = useState(1);
  const [lang, setLang] = useState(1);
  const [total, setTotal] = useState(0);
  const [budgetName, setBudgetName] = useState("");
  const [costumerName, setCostumerName] = useState("");
  const [dateBudget, setDateBudget] = useState("");
  const [listBudgets, setListBudgets] = useState( JSON.parse(localStorage.getItem("Presupuesto")) ?? []);
  
  

  function getNow() {
    const current = new Date();
    const hour = current.getHours()
    let min = current.getMinutes()
    if( min < 10 ) {
      min = '0'+ min
    }
    date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()} Hora ${hour}:${min}`;
    return setDateBudget(date);
  }

  const calculateBudget = () => {
    let priceWeb,
      priceSeo,
      priceAds, result = 0;
    web ? (priceWeb = 500 + pages * lang * 30) : (priceWeb = 0);
    seo ? (priceSeo = 300) : (priceSeo = 0);
    ads ? (priceAds = 200) : (priceAds = 0);
    //return priceWeb + priceSeo + priceAds;
    result =  priceWeb + priceSeo + priceAds
    result= result.toLocaleString('de-DE');
    return result
  };

  const handlePages = (numOfPages) => setPages(numOfPages);
  const handleLang = (numOfLang) => setLang(numOfLang);

  const handleOnChangeWeb = (checked, value) => {
    if (checked) {
      suma += parseInt(value);
      setWeb(true);
    } else {
      suma -= parseInt(value);
      setPages(1);
      setLang(1);
      setWeb(false);
    }
  };

  const handleOnChangeSeo = (checked, value) => {
    if (checked) {
      suma += parseInt(value);
      setSeo(true);
    } else {
      suma -= parseInt(value);
      setSeo(false);
    }
  };

  const handleOnChangeAds = (checked, value) => {
    if (checked) {
      suma += parseInt(value);
      setAds(true);
    } else {
      suma -= parseInt(value);
      setAds(false);
    }
  };

 

  useEffect(() => {
    setTotal(calculateBudget());
  }, [web, seo, ads, pages, lang ]);

  useEffect(() => {
      localStorage.setItem("Presupuesto", JSON.stringify(listBudgets));
    }
  , [listBudgets]);


  const initForm = () => {
    setWeb(false);
    setPages(1);
    setLang(1);
    setSeo(false);
    setAds(false);
    setBudgetName("");
    setCostumerName("");
    setDateBudget("");
    setTotal(0);
  };

  const saveData = () => {

    if (web || seo || ads || budgetName || costumerName) {

      if (budgetModyfying !== -1){
        listBudgets.splice(budgetModyfying, 1);
        budgetModyfying = -1
      }

      getNow();    
       
      setListBudgets([{ budgetName, date, costumerName, web, pages, lang, seo, ads, total },...listBudgets])
      initForm();  
      }
  };

  

  const deleteData = () => {
    console.log("borrado de local storage");
    localStorage.removeItem("Presupuesto");
    setListBudgets([]);
    window.location.reload(true);
  };

  const onDeleteBudget = (value) => {
    budgetModyfying = -1  
    const tempArray = listBudgets.filter((item, index)=> {
      if(index !== value){
        return item
      }else{
        return null
      }
    }) 
    setListBudgets(tempArray);
  };

  const onModifyBudget = (value) => {
    setWeb(listBudgets[value].web);
    setPages(listBudgets[value].pages);
    setLang(listBudgets[value].lang);
    setSeo(listBudgets[value].seo);
    setAds(listBudgets[value].ads);
    setBudgetName(listBudgets[value].budgetName);
    setCostumerName(listBudgets[value].costumerName);
    setDateBudget(listBudgets[value].date);
    setTotal(listBudgets[value].total);
    budgetModyfying = value;
  }

  return (
    <div className="container App">
      <div className="row">
        <div className="container-presu col-12 col-lg-6 mt-3 shadow p-3 bg-light.bg-gradient rounded">
          <div className="py-3">Data del pressupost: {dateBudget}</div>
          <br />
          <input
            className="form-control w-50 p-2"
            type="text"
            placeholder="Introdueix Nom pel pressupost"
            onChange={(e) => setBudgetName(e.target.value)}
            value={budgetName.toUpperCase()}
          ></input>
          <input
            className="form-control w-50 p-2"
            type="text"
            placeholder="Introdueix Nom de client"
            onChange={(e) => setCostumerName(e.target.value)}
            value={costumerName}
          ></input>
          <h5>Què desitges que fem?</h5>
          <br />
          <input
            id="checkyweb"
            className="form-check-input"
            type="checkbox"
            value={500}
            name="Web"
            checked={web}
            onChange={(e) =>
              handleOnChangeWeb(e.target.checked, e.target.value)
            }
          />
          <h6 style={{ display: "inline" }}> Una pàgina Web (500€)</h6>
          <br />
          <br />
          {web && (
            <>
              <Panel
                paginas={pages}
                idiomas={lang}
                onPageChange={handlePages}
                onLangChange={handleLang}
              />
              <br />
            </>
          )}
          <input
            className="form-check-input"
            type="checkbox"
            value={300}
            name="Seo"
            checked={seo}
            onChange={(e) =>
              handleOnChangeSeo(e.target.checked, e.target.value)
            }
          />
          <h6 style={{ display: "inline" }}> Una consultora SEO (300€)</h6>
          <br />
          <br />
          <input
            className="form-check-input"
            type="checkbox"
            value={200}
            name="Ads"
            checked={ads}
            onChange={(e) =>
              handleOnChangeAds(e.target.checked, e.target.value)
            }
          />
          <h6 style={{ display: "inline" }}>
            {" "}
            Una campanya de Google Ads (200€)
          </h6>
          <br />
          <br />
          <div className="total-section">Total: {total}€</div>
          <br />
          <br />
          <button
            type="button"
            className="btn btn-primary ms-1 mt-2"
            onClick={saveData}
          >
            Desar
          </button>
          <button
            type="button"
            className="btn btn-danger ms-1 mt-2"
            onClick={deleteData}
          >
            Eliminar TOTS
          </button>
          <br />
          <br />
          <span className="noCheckeds d-none">No hi ha res seleccionat</span>
        </div>
        <div className="container-list-presu col-12 col-lg-6">
          <div className="container-list text-danger sticky-top p-3 mt-5 mh-100">
            <PanelBudgetsList listBudgets={listBudgets} actionDelete={onDeleteBudget} actionModify={onModifyBudget} />
          </div>
        </div>
      </div>
    </div>
  );
}
