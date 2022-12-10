
import { useState,useEffect } from 'react'
import Panel from './components/Panel';
import './Styles/App.css'

let suma = 0;
let sumaweb = 0;
let pricePagesAndLang = 0
let existBudget;


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
    existBudget = JSON.parse(localStorage.getItem('Presupuesto'));
    if (existBudget) {
      loadData(existBudget);
    }
  }, [])
  
  useEffect(() => {
    sumaweb = (pages * lang * pricePagesAndLang)
    setTotal(suma + sumaweb)
      
  }, [web, seo, ads, pages, lang])

  useEffect(() => {
    if (listBudgets.length !== 0){
      localStorage.setItem('Presupuesto',JSON.stringify(listBudgets))  
    } 
  },[listBudgets])
  
   const loadData = (existBudget) => {
    
    setWeb(existBudget[0].web)
    setPages(existBudget[0].pages);
    setLang(existBudget[0].lang);
    setSeo(existBudget[0].seo);
    setAds(existBudget[0].ads);
    setTotal(existBudget[0].total);
    }
  
  const saveData = ()=>{

    setListBudgets([...listBudgets, {web, pages, lang, seo, ads, total}]);  
 }
 
  return (
    <div className="App">
      <h3>Què desitges que fem?</h3><br/><br/>
         <input
            id='checkyweb'
            className='form-check-input'
            type="checkbox"
            value={500}
            name='Web'
            checked={web}
            onChange={ (e) => handleOnChange(e.target)}
            /><h5 style={{ display: "inline" }}> Una pàgina Web (500€)</h5><br/><br/>
            {web && (<>
            <Panel paginas={handlePages} idiomas={handleLang}/><br/></>)}
          <input
            className='form-check-input'
            type="checkbox"
            value={300}
            name='Seo'
            checked={seo}
            onChange={ (e) => handleOnChange(e.target)}
          /><h5 style={{ display: "inline" }}> Una consultora SEO (300€)</h5><br/><br/>
          <input
            className='form-check-input'
            type="checkbox"
            value={200}
            name='Ads'
            checked={ads}
            onChange={ (e) => handleOnChange(e.target)}
          /><h5 style={{ display: "inline" }}> Una campanya de Google Ads (200€)</h5><br/><br/>
      <div className="total-section" defaultValue={total}>Total:{total}€</div><br/><br/>
      <button
        type="button"
        className="btn btn-primary ms-1 mt-2"
        onClick={saveData}>Desar</button>
    </div>
  );
}

//
