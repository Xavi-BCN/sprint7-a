import { useState } from "react";
import styled from "styled-components";
import { services } from "../assets/services";


export default function Panel() {
  const PanelStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-item: center;
    border: 2px solid black;
    border-radius: 10px;
    padding: 30px 5px;
    width: 450px;
  `;

  const [pages, setPages] = useState(1);
  const [lang, setLang] = useState(1);

  const handlepages = function(numOfPages){
    services[0].pages = numOfPages.target.value
    setPages(numOfPages.target.value)
    
  };

  const handlelang = function(numOfLang){
    services[0].lang = numOfLang.target.value
    setLang(numOfLang.target.value)
    
  }

    
  return (
    <>
      <PanelStyle>
      <p style={{display: 'inline'}}>Número de pàgines:</p>
      <input
        style={{width: '40%', margin: '10px'}}
        className="form-control form-control-sm"
        value={pages}
        type="number"
        aria-label=".form-control-sm example"
        onChange={handlepages}
      />
      <p>Número d'idiomes:</p>
      <input
        style={{width: '40%', margin: '10px'}}
        className="form-control form-control-sm"
        value={lang}
        type="number"
        aria-label=".form-control-sm example"
        onChange={handlelang}
      />
      </PanelStyle>
    </>
  );
}
