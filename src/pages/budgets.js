import { useState, useEffect } from "react";
import Filter from "../components/Filter";
import Panel from "../components/Panel";
import PanelBudgetsList from "../components/PanelBudgetsList";

let existBudget;
let date;
let suma = 0;

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
  const [listBudgets, setListBudgets] = useState([]);

  function getNow() {
    const current = new Date();
    date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    return setDateBudget(date);
  }

  const calculateBudget = () => {
    let priceWeb,
      priceSeo,
      priceAds = 0;
    web ? (priceWeb = 500 + pages * lang * 30) : (priceWeb = 0);
    seo ? (priceSeo = 300) : (priceSeo = 0);
    ads ? (priceAds = 200) : (priceAds = 0);
    return priceWeb + priceSeo + priceAds;
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
    existBudget = JSON.parse(localStorage.getItem("Presupuesto"));
    if (existBudget) {
      setListBudgets(existBudget);
    }
  }, []);

  useEffect(() => {
    setTotal(calculateBudget());
  }, [web, seo, ads, pages, lang]);

  useEffect(() => {
    if (listBudgets.length !== 0) {
      localStorage.setItem("Presupuesto", JSON.stringify(listBudgets));
    }else if(listBudgets.length === 0){
      localStorage.removeItem('Presupuesto');
    }
  }, [listBudgets]);

  //const loadData = (existBudget) => {
  const loadData = (listBudgets) => {
    setWeb(listBudgets[0].web);
    setPages(listBudgets[0].pages);
    setLang(listBudgets[0].lang);
    setSeo(listBudgets[0].seo);
    setAds(listBudgets[0].ads);
    setBudgetName(listBudgets[0].budgetName);
    setCostumerName(listBudgets[0].costumerName);
    setDateBudget(listBudgets[0].date);
    setTotal(listBudgets[0].total);
  };

  const saveData = () => {
    if (web || seo || ads) {
      getNow();

      setListBudgets([
        ...listBudgets,
        { budgetName, date, costumerName, web, pages, lang, seo, ads, total },
      ]);
    }
  };

  const deleteData = () => {
    console.log("borrado de local storage");
    localStorage.removeItem("Presupuesto");
    setListBudgets([]);
    window.location.reload(true);
  };

  const actionOnDelete = (value) => {
    console.log('este es el indice a borrar', value)
    listBudgets.splice(value, 1)
    console.log(listBudgets)
    /* const tempArray = listBudgets.map((item, index)=> {
      if(index !== value){
        return item
      }
    }) */
    //console.log(tempArray)
    setListBudgets([listBudgets]);
    
  }

  return (
    <div className="container App">
      <div className="row">
        <div className="container-presu col-12 col-lg-6">
          <div className="py-3">Data del pressupost: {dateBudget}</div>
          <br />
          <input
            className="form-control w-50 p-2"
            type="text"
            placeholder="Introdueix Nom pel pressupost"
            onChange={(e) => setBudgetName(e.target.value)}
            value={budgetName.toUpperCase() }
          ></input>
          <input
            className="form-control w-50 p-2"
            type="text"
            placeholder="Introdueix Nom de client"
            onChange={(e) => setCostumerName(e.target.value)}
            value={costumerName}
          ></input>
          <h3>Què desitges que fem?</h3>
          <br />
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
          <h5 style={{ display: "inline" }}> Una pàgina Web (500€)</h5>
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
          <h5 style={{ display: "inline" }}> Una consultora SEO (300€)</h5>
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
          <h5 style={{ display: "inline" }}>
            {" "}
            Una campanya de Google Ads (200€)
          </h5>
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
            className="btn btn-primary ms-1 mt-2"
            onClick={deleteData}
          >
            Esborrar
          </button>
          <br />
          <br />
          <span className="noCheckeds d-none">No hi ha res seleccionat</span>
        </div>
        <div className="container-list-presu col-12 col-lg-6">
          <Filter />
          <div className="container-list text-danger sticky-top overflow: auto p-3 mt-5 mh-100">
            LLISTAT DE PRESSUPOSTOS
            <PanelBudgetsList data={listBudgets} action={actionOnDelete} />
          </div>
        </div>
      </div>
    </div>
  );
}
