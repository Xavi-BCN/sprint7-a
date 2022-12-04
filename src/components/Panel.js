//import { useState } from "react";
import { StylPanel } from "./PanelStyle";
import Controls from "./controls";

function Panel ({paginas, idiomas}){
  
    
  return (
    <>
      <StylPanel>
      <p className="text-start ">Núm. pàgines: </p>
      <Controls control={paginas} whatInput={'inputpag'}/>
      <p className="text-start" >Núm. d'idiomes:</p>
      <Controls control={idiomas} whatInput={'inputlang'}/>
      </StylPanel>
    </>
  );
}
export default Panel;

//style={{display: 'inline'}}