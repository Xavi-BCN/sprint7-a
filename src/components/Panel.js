//import { useState } from "react";
import { StylPanel } from "./PanelStyle";
import Controls from "./controls";

function Panel ({paginas, idiomas}){
  
    
  return (
    <>
      <StylPanel>
      <p style={{display: 'inline'}}>Número de pàgines:</p>
      <Controls control={paginas} whatInput={'inputpag'}/>
      <p>Número d'idiomes:</p>
      <Controls control={idiomas} whatInput={'inputlang'}/>
      </StylPanel>
    </>
  );
}
export default Panel;
