
function Controls ({control, whatInput}){

  let target = document.getElementById(`${whatInput}`)
  
  function increment(){
      target.value ++;
      control(target.value)
  }
  function decrement(){
    if(target.value >= 2){
      target.value --;
      control(target.value)
    }
  }

  function reset(){
    target.value = 1;
    control(target.value);
  }
    
  return (
    <>
      <button className="btn btn-outline-success" onClick={increment} > + </button>
      <input
        id= {`${whatInput}`}
        style={{width: '30%', margin: '10px'}}
        className="form-control form-control-sm"
        defaultValue={1}
        min={1}
        type="number"
        aria-label=".form-control-sm example"
        onChange={ (event) => control(event.target.value)}
      />
      <button className="btn btn-outline-danger" onClick={decrement}> - </button>
      <button className="btn btn-outline-warning" onClick={reset}> Reset</button>  
    </>
  );
}
export default Controls;

// onBlur={control(document.getElementById(`${whatInput}`).value)}