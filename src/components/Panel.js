import styled from "styled-components";

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
    
  return (
    <>
      <PanelStyle>
      <p style={{display: 'inline'}}>Número de pàgines:</p>
      <input
        style={{width: '40%', margin: '10px'}}
        className="form-control form-control-sm"
        placeholder="1"
        type="number"
        aria-label=".form-control-sm example"
      />
      <p>Número d'idiomes:</p>
      <input
        style={{width: '40%', margin: '10px'}}
        className="form-control form-control-sm"
        placeholder="1"
        type="number"
        aria-label=".form-control-sm example"
      />
      </PanelStyle>
    </>
  );
}
