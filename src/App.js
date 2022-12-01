
import { useState } from 'react'
import Panel from './components/Panel';
//import { services } from './assets/services';
import './App.css'


let suma = 0;
let viewPanel = false;
const getFormattedPrice = (price) => `${price.toFixed(2)}€`;

export default function App() {
  
  const [web, setWeb] = useState(false);
  //const [seo, setSeo] = useState(0);
  //const [ads, setAds] = useState(0);
  const [pages, setPages] = useState(1);
  const [lang, setLang] = useState(1);
  const [ total, setTotal ] = useState(0);

  
  
  const handlePages = (numOfPages) =>{
    setPages(numOfPages);
  };
  const handleLang = (numOfLang)=>{
    setLang(numOfLang);
  }
  
  const handleOnChange = (service) => {
    if(service.checked) {
      suma += parseInt(service.value)
      setTotal(suma);
    }else{
      suma -= parseInt(service.value)
      setTotal(suma)
    } 
  };

  
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
            <Panel paginas={handlePages} idiomas={handleLang}/><br/>
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

