
import { useState,useEffect } from 'react'
import Panel from './components/Panel';
//import { services } from './assets/services';
import './App.css'


let suma = 0;
let sumaweb = 0;
let viewPanel = false;
//const getFormattedPrice = (price) => `${price.toFixed(2)}€`;

export default function App() {
  
  const [web, setWeb] = useState(0);
  const [seo, setSeo] = useState(0);
  const [ads, setAds] = useState(0);
  const [pages, setPages] = useState(1);
  const [lang, setLang] = useState(1);
  const [total, setTotal ] = useState(0);


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
        suma += parseInt(service.value) + (pages * lang * 30)
        setWeb(parseInt(service.value) + (pages * lang * 30))
        console.log(pages, lang, suma)
      }        
      
      if(service.name === 'Seo'){
        suma += parseInt(service.value);
        setSeo(parseInt(service.value))
        
      }
      if(service.name === 'Ads'){
        suma += parseInt(service.value);
        setAds(parseInt(service.value))
      }
    }else{
      if(service.name === 'Web'){
        suma -= web
        setPages(1)
        setLang(1)
        setWeb(0)
        viewPanel = false
      }else{
        if(service.name === 'Seo'){
          suma -= seo
          setSeo(0)
        }else{
          suma -= ads
          setAds(0)
        }        
      }        
    }  
  };
  
  console.log(pages)
  console.log(lang)
  
  useEffect(() => {
    setTotal(suma)

  }, [web, seo, ads, pages, lang])
  
  
  
  
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
      
      <div className="total-section">Total: {total}€</div>
    </div>
  );
}

