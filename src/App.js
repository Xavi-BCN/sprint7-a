
import { useState,useEffect } from 'react'
import Panel from './components/Panel';
import './Styles/App.css'

let suma = 0;
let sumaweb = 0;
let pricePagesAndLang = 0
let viewPanel = false;
let bugetItem;

export default function App() {
  
  
  
  const [web, setWeb] = useState(false);
  const [seo, setSeo] = useState(false);
  const [ads, setAds] = useState(false);
  const [pages, setPages] = useState(1);
  const [lang, setLang] = useState(1);
  const [total, setTotal ] = useState(0);
  const [listBudgets, setListBudgets] = useState([]);
  

  const handlePages = (numOfPages) =>{
    setPages(numOfPages);
  };
  const handleLang = (numOfLang)=>{
    setLang(numOfLang);
  }
  
  const handleOnChange = (service) => {
    
    if(service.checked) {
      
      if(service.name === 'Web'){
        viewPanel = true
        pricePagesAndLang = 30
        suma += parseInt(service.value) 
        setWeb(true)
      }        
      
      if(service.name === 'Seo'){
        suma += parseInt(service.value);
        setSeo(true)
      }
      if(service.name === 'Ads'){
        suma += parseInt(service.value);
        setAds(true)
      }
    }else{
      if(service.name === 'Web'){
        suma -= parseInt(service.value)
        setPages(1)
        setLang(1)
        setWeb(false)
        viewPanel = false
        pricePagesAndLang = 0
      }else{
        if(service.name === 'Seo'){
          suma -= parseInt(service.value)
          setSeo(false)
        }else{
          suma -= parseInt(service.value)
          setAds(false)
        }        
      }        
    }  
  };

  
  useEffect(() => {
    
    //getData();
    
    sumaweb = (pages * lang * pricePagesAndLang)
    setTotal(suma + sumaweb)
    
  }, [web, seo, ads, pages, lang])
  
  /* const getData = () => {
    setWeb(localStorage.getItem('web'));
    setPages(localStorage.getItem('pages'));
    setLang(localStorage.getItem('lang'));
    setSeo(localStorage.getItem('seo'));
    setAds(localStorage.getItem('ads'));
  }  */
  
  const createNewBugetItem = (web, pages, lang, seo, ads)=>{
    
    
  }
  
  
  const saveData = ()=>{
    //createNewBugetItem(web, pages, lang, seo, ads);
  setListBudgets([...listBudgets, {web, pages, lang, seo, ads}]);
  localStorage.setItem('Presupuesto',JSON.stringify(listBudgets));
  console.log(web, pages, lang, seo, ads)
  
  
  //createNewBugetItem(web, pages, lang, seo, ads);
  
  /* setListBudgets([...listBudgets, {servicio1: web, Paginas: pages, idiomas: lang, servicio2: seo, servicio3: ads}]); */
    /* localStorage.setItem('web', web);
    localStorage.setItem('pages', pages);
    localStorage.setItem('lang', lang);
    localStorage.setItem('seo', seo);
    localStorage.setItem('ads', ads); */
 }
 

  return (
    <div className="App">
      <h3>Que dessitjes que fem?</h3><br/><br/>
         <input
            id='checkyweb'
            className='form-check-input'
            type="checkbox"
            value={500}
            name='Web'
            onChange={ (e) => handleOnChange(e.target)}
            /><h5 style={{ display: "inline" }}> Una pàgina Web (500€)</h5><br/><br/>
            {viewPanel && (<>
            <Panel paginas={handlePages} idiomas={handleLang}/><br/></>)}
          <input
            className='form-check-input'
            type="checkbox"
            value={300}
            name='Seo'
            onChange={ (e) => handleOnChange(e.target)}
          /><h5 style={{ display: "inline" }}> Una consultoria SEO (300€)</h5><br/><br/>
          <input
            className='form-check-input'
            type="checkbox"
            value={200}
            name='Ads'
            onChange={ (e) => handleOnChange(e.target)}
          /><h5 style={{ display: "inline" }}> Una campanya de Google Ads (200€)</h5><br/><br/>
      <div className="total-section">Total: {total}€</div><br/><br/>
      <button
        type="button"
        className="btn btn-primary ms-1 mt-2"
        onClick={saveData}>Desar</button>
    </div>
  );
}

