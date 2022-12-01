//import { useState } from "react";
//import styled from "styled-components";
import { services } from "../assets/services";



function Panel ({paginas, idiomas, view}){
  /* const PanelStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-item: center;
    border: 2px solid black;
    border-radius: 10px;
    padding: 30px 5px;
    width: 450px;
  `; */
    
  return (
    <>
      {/* <PanelStyle> */}
      <p style={{display: 'inline'}}>Número de pàgines:</p>
      <input
        style={{width: '40%', margin: '10px'}}
        className="form-control form-control-sm"
        defaultValue={1}
        min={1}
        type="number"
        aria-label=".form-control-sm example"
        onChange={ (event) => paginas(event.target.value)}
      />
      <p>Número d'idiomes:</p>
      <input
        style={{width: '40%', margin: '10px'}}
        className="form-control form-control-sm"
        defaultValue={1}
        min={1}
        type="number"
        aria-label=".form-control-sm example"
        onChange={ (event) => idiomas(event.target.value)}
      />
      {/* </PanelStyle> */}
    </>
  );
}
export default Panel;
