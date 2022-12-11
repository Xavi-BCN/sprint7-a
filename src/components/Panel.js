//import { useState } from "react";
import { StylPanel } from "../Styles/PanelStyle";
import Controls from "./controls";

function Panel ({ paginas, idiomas , onPageChange, onLangChange }){
  
  return (
    <>
      <StylPanel>
        <p className="text-start ">Núm. pàgines: </p>
        <Controls onChange={onPageChange} value={paginas} />
        <p className="text-start" >Núm. d'idiomes:</p>
        <Controls onChange={onLangChange} value={idiomas} />
      </StylPanel>
    </>
  );
}
export default Panel;
