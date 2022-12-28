import { useState, useEffect } from "react";
import Panel from "../components/Panel";
import PanelBudgetsList from "../components/PanelBudgetsList";

let date;
let suma = 0;
let budgetModyfying = -1;
let id;

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
  const [action, setAction] = useState(0);
  const [searchBudget, setSearchBudget] = useState([])

  useEffect(() => {
    setSearchBudget([...listBudgets]) 
  }, [listBudgets])
  

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
    let priceWeb, priceSeo, priceAds = 0;
    web ? (priceWeb = 500 + pages * lang * 30) : (priceWeb = 0);
    seo ? (priceSeo = 300) : (priceSeo = 0);
    ads ? (priceAds = 200) : (priceAds = 0);
    return priceWeb + priceSeo + priceAds
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
      id = Math.random().toString(30).substring(2);
      setListBudgets([{ id,budgetName, date, costumerName, web, pages, lang, seo, ads, total },...listBudgets])
      initForm();  
      }
  };

  const deleteData = () => {
    localStorage.removeItem("Presupuesto");
    setListBudgets([]);
    window.location.reload(true);
  };

  const onDeleteBudget = (value) => {
    budgetModyfying = -1  
    const tempArray = listBudgets.filter(item=> {
      if(item.id !== value){
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

  const onFilter = (filter, search) => {
    
      if (filter === 'byName') {
        setSearchBudget(listBudgets.sort((x, y) => x.budgetName.localeCompare(y.budgetName)))
      }
      if (filter === 'byDate') {
        setSearchBudget(listBudgets.sort((x, y) => x.date.localeCompare(y.date)))
      }
      if (filter === 'byTotal') {
        setSearchBudget(listBudgets.sort((x, y) => (y.total)-(x.total)))
      }
      if (filter === 'byDefault') {
        setSearchBudget(listBudgets.sort((x, y) => x.date.localeCompare(y.date)))
      }
      if (filter === 'bySearch') {
        search = (search.toUpperCase());
        setSearchBudget(listBudgets.filter(presu => presu.budgetName.includes(search,0)))
      }
       setAction(()=> action + 1)
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
            "ATENCIO: Això Eliminarà TOTS els Pressupostos" 
          </button>
          <br />
          <br />
          <span className="noCheckeds d-none">No hi ha res seleccionat</span>
        </div>
        <div className="container-list-presu col-12 col-lg-6">
          <div className="container-list text-danger sticky-top p-3 mt-5 mh-100">
            <PanelBudgetsList searchBudgets={searchBudget} onFilter={onFilter} actionDelete={onDeleteBudget} actionModify={onModifyBudget} />
          </div>
        </div>
      </div>
    </div>
  );
}
