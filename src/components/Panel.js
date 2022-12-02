//import { useState } from "react";
import { StylPanel } from "./PanelStyle";
import { services } from "../assets/services";



function Panel ({paginas, idiomas, view}){
  /*  const PanelStyle = styled.div`
   
  `;  */
    
  return (
    <>
      <StylPanel>
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
      </StylPanel>
    </>
  );
}
export default Panel;
