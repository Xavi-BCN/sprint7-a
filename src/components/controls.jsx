import '../../src/Styles/Control.css'

function Controls({ control, whatInput }) {
  
  //const regularExpression = {isANum: /^\d{1,3}$/}
    
  
  let target = document.getElementById(`${whatInput}`)
  
  function increment() {
    target.value++;
    control(target.value)
  }

  function decrement() {
    if (target.value >= 2) {
      target.value--;
      control(target.value)
    }
  }

  function reset() {
    target.value = 1;
    control(target.value);
  }

  return (
    <div className="container-controls">
      <div className="row">
        <div className="col-1">
          <button className="btnplus btn btn-outline-success" onClick={increment} > + </button>
        </div>
        <div className="col-1">
          <input
              id={`${whatInput}`}
              className="textin form-control form-control-sm"
              //{id === 'inputpag' ? defaultValue={pages} : defaultValue={lang}} 
              defaultValue={1}
              min={1}
              type="number"
              aria-label=".form-control-sm example"
              onChange={(event) => control(event.target.value)}
            />
        </div>
        <div className="col-1">
          <button className="btnminus btn btn-outline-danger" onClick={decrement}> - </button>
        </div>
        <div className="col-1">
          <button className="btnreset btn btn-outline-warning" onClick={reset}> Reset</button>
        </div>
      </div>
    </div>    
  );
}
export default Controls;
