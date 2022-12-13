
import { useState,useEffect } from 'react'
import Panel from '../components/Panel'

let existBudget;
let suma = 0;
let date;

export default function Budgets() {
  
  const [web, setWeb] = useState(false);
  const [seo, setSeo] = useState(false);
  const [ads, setAds] = useState(false);
  const [pages, setPages] = useState(1);
  const [lang, setLang] = useState(1);
  const [total, setTotal ] = useState(0);
  const [budgetName, setBudgetName ] = useState('');
  const [costumerName, setCostumerName ] = useState('');
  const [dateBudget, setDateBudget ] = useState('');
  const [listBudgets, setListBudgets] = useState([]);

  function getNow(){
    const current = new Date();
    date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return setDateBudget(date);
  }
  
    
  const calculateBudget = () => {
    let priceWeb, priceSeo, priceAds = 0
    web ? priceWeb = 500 + (pages * lang * 30) : priceWeb = 0 ;
    seo ? priceSeo = 300 : priceSeo = 0 ;
    ads ? priceAds = 200 : priceAds = 0 ;
    return (priceWeb + priceSeo + priceAds)
  }

  const handlePages = numOfPages =>setPages(numOfPages);
  const handleLang = numOfLang => setLang(numOfLang);
  
  const handleOnChangeWeb = (checked, value) => {
    if(checked){
      suma += parseInt(value) 
      setWeb(true)
    }else{
      suma -= parseInt(value)
      setPages(1)
      setLang(1)
      setWeb(false)
    }
  }

  const handleOnChangeSeo = (checked, value) => {
    if(checked){
      suma += parseInt(value) 
      setSeo(true)
    }else{
      suma -= parseInt(value)
      setSeo(false)
    }
  }

  const handleOnChangeAds = (checked, value) => {
    if(checked){
      suma += parseInt(value) 
      setAds(true)
    }else{
      suma -= parseInt(value)
      setAds(false)
    }
  }

  useEffect(() => {
    existBudget = JSON.parse(localStorage.getItem('Presupuesto'));
    if (existBudget) {
      loadData(existBudget);      
    }
  }, [])

   useEffect(() => {setTotal(calculateBudget())
  }, [web, seo, ads, pages, lang])

  useEffect(() => { 
    if (listBudgets.length !== 0){
      localStorage.setItem('Presupuesto',JSON.stringify(listBudgets))}  
  },[listBudgets])
  
  const loadData = (existBudget) => {
    setWeb(existBudget[0].web)
    setPages(existBudget[0].pages);
    setLang(existBudget[0].lang);
    setSeo(existBudget[0].seo);
    setAds(existBudget[0].ads);
    setBudgetName(existBudget[0].budgetName);
    setCostumerName(existBudget[0].costumerName);
    setDateBudget(existBudget[0].date);
    setTotal(existBudget[0].total);
  }
  
  const saveData = ()=>{
    getNow()
    setListBudgets([...listBudgets, {budgetName, date, costumerName, web, pages, lang, seo, ads, total}]);  //Para mas de un presu
    //setListBudgets([{budgetName, date, costumerName, web, pages, lang, seo, ads, total}]);  // Para un solo presu
 }
 
 const deleteData = ()=>{
  console.log('borrado de local storage')
  localStorage.removeItem('Presupuesto');
  setListBudgets([]); 
  window.location.reload(true);
}

  return (
    <div className="App">
      <div>Data del pressupost: {dateBudget}</div><br/>
      <input
       className='form-control w-25 p-2'
       type="text"
       placeholder="Introdueix Nom de client"
       onChange={ (e) => setCostumerName(e.target.value)}
       value={costumerName}
       >
       </input>
      <input
        className='form-control w-25 p-2'
        type="text"
        placeholder="Introdueix Nom pel pressupost"
        onChange={ (e) => setBudgetName(e.target.value)}
        value={budgetName}>
        </input>
      <h3>Què desitges que fem?</h3><br/><br/>
          <input
            id='checkyweb'
            className='form-check-input'
            type="checkbox"
            value={500}
            name='Web'
            checked={web}
            onChange={ (e) => handleOnChangeWeb(e.target.checked, e.target.value)}
          />
          <h5 style={{ display: "inline" }}> Una pàgina Web (500€)</h5><br/><br/>
          {web && (<>
            <Panel paginas={pages} idiomas={lang} onPageChange={handlePages} onLangChange={handleLang} /><br/></>)}
          <input
            className='form-check-input'
            type="checkbox"
            value={300}
            name='Seo'
            checked={seo}
            onChange={ (e) => handleOnChangeSeo(e.target.checked, e.target.value)}
          /><h5 style={{ display: "inline" }}> Una consultora SEO (300€)</h5><br/><br/>
          
          <input
            className='form-check-input'
            type="checkbox"
            value={200}
            name='Ads'
            checked={ads}
            onChange={ (e) => handleOnChangeAds(e.target.checked, e.target.value)}
          /><h5 style={{ display: "inline" }}> Una campanya de Google Ads (200€)</h5><br/><br/>
       <div className="total-section">Total: {total}€</div><br/><br/>
      <button
        type="button"
        className="btn btn-primary ms-1 mt-2"
        onClick={saveData}>Desar</button>
        <button
        type="button"
        className="btn btn-primary ms-1 mt-2"
        onClick={deleteData}>Esborrar</button>
    </div>
  );
}


