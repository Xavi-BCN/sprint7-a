import '../../src/Styles/Control.css'

function Controls({ onChange, value }) {

  function increment() {
    onChange(value + 1)
  }

  function decrement() {
    if (value >= 2) onChange(value - 1)
    else onChange(1);
  }

  function reset() {
    onChange(1);
  }

  return (
    <div className="container-controls">
      <div className="row">
        <div className="col-1">
          <button className="btnplus btn btn-outline-success" onClick={increment} > + </button>
        </div>
        <div className="col-1">
          <input
            className="textin form-control form-control-sm"
            value={value}
            min={1}
            type="number"
            aria-label=".form-control-sm example"
            onChange={(event) => onChange(event.target.value)}
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
