
import { useState,useEffect } from 'react'
import Panel from './components/Panel';
import './Styles/App.css'

let suma = 0;
let sumaweb = 0;
let pricePagesAndLang = 0
let viewPanel = false;
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
    existBudget = JSON.parse(localStorage.getItem('Presupuesto'));
    if (existBudget) {
      console.log('Paso Effect sin control de variabe: Si hay datos')
      //setListBudgets(existBudget);
      loadData(existBudget);
    }else{
      console.log('Paso Effect sin control de variabe: No hay datos')
      
    }
  }, [])
  
  useEffect(() => {
    sumaweb = (pages * lang * pricePagesAndLang)
    setTotal(suma + sumaweb)
    console.log('Paso Effect que controla todas las variables', suma)  
  }, [web, seo, ads, pages, lang])

  useEffect(() => {
    if (listBudgets.length != 0){
      localStorage.setItem('Presupuesto',JSON.stringify(listBudgets)) 
      console.log('Paso Effect que controla listbudgets guardado en Storage', JSON.stringify(listBudgets))  
    } else{
      console.log('Paso Effect que controla listbudgets no guado nada',JSON.stringify(listBudgets))

    }
  },[listBudgets])
  
   const loadData = (existBudget) => {
    
    setWeb(existBudget[0].web)
    setPages(existBudget[0].pages);
    setLang(existBudget[0].lang);
    setSeo(existBudget[0].seo);
    setAds(existBudget[0].ads);
    console.log(web,seo, ads, pages, lang)
    
    }
  
  const saveData = ()=>{

    setListBudgets([...listBudgets, {web, pages, lang, seo, ads}]);  
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

