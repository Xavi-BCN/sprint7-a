
function Controls ({control, whatInput}){

  function increment()   {
    document.getElementById(`${whatInput}`).value++;
  }
  function decrement()   {
    document.getElementById(`${whatInput}`).value--;
  }
    
  return (
    <>
      <button onClick={increment}> + </button>
      <input
        id= {`${whatInput}`}
        style={{width: '30%', margin: '10px'}}
        className="form-control form-control-sm"
        defaultValue={1}
        min={1}
        type="number"
        aria-label=".form-control-sm example"
        onChange={ (event) => control(event.target.value)}
        on
      />
      <button onClick={decrement}> - </button>  
    </>
  );
}
export default Controls;
