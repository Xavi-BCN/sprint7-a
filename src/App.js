
import { useState } from 'react'
import { services } from './assets/services';
import Panel from './components/Panel';
import './App.css'

const getFormattedPrice = (price) => `${price.toFixed(2)}€`;

export default function App() {
  
  const [web, setWeb] = useState(false);
  const [seo, setSeo] = useState(false);
  const [ads, setAds] = useState(false);
  const [pages, setPages] = useState(1);
  const [lang, setLang] = useState(1);
  const [ total, setTotal ] = useState(0);

  
  const handlePages = (numOfPages) =>{
    setPages(numOfPages);
  };
  const handleLang = (numOfLang)=>{
    setLang(numOfLang);
  }
  

  // Cuando cambie un checkbox actualizo su valor al contario del que tenia en un nuevo array
   const handleOnChange = (service) => {

    let suma, priceWeb, priceSeo , priceAds;

      if(service.checked && service.name === 'Web'){
        setWeb(true);
        priceWeb = Number(service.value)
        console.log(service.name + " " + priceWeb)
      }

      if(service.checked && service.name === 'Seo'){
        setSeo(true);
        priceSeo = Number(service.value)
        console.log(service.name + " " + priceSeo)
      }

      if(service.checked && service.name === 'Ads'){
        setAds(true);
        priceAds = service.value;
        console.log(service.name + " " + priceAds)
      }

      suma = Number(parseInt(priceWeb + priceSeo + priceAds))
      console.log(suma)
    
    const totalPrice = () => {    
      
      return suma;
    }     
      
    
    //Paso el precio total calculado a la funcion setTotal para que repinte y muestre el total actualizado en pantalla.
    setTotal(totalPrice);  
  };

  return (
    <div className="App">
      <h3>Que dessitjes que fem?</h3><br/><br/>
         <input
            className='form-check-input'
            type="checkbox"
            value={500}
            name='Web'
            onChange={ (e) => handleOnChange(e.target)}
            /><h5 style={{ display: "inline" }}> Una pàgina Web (500€)</h5><br/><br/>
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
      
      <div className="total-section">Total: {total}</div>
    </div>
  );
}

