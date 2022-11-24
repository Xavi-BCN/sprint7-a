import logo from './logo.svg';
import './App.css';


function App() {
  return (
<div classname="App">
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      defaultValue=""
      id="flexCheckDefault"
    />
    <label className="form-check-label" htmlFor="flexCheckDefault">
      Casilla de verificación por defecto
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      defaultValue=""
      id="flexCheckChecked"
      defaultChecked=""
    />
    <label className="form-check-label" htmlFor="flexCheckChecked">
      Casilla de verificación marcada
    </label>
  </div>
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      defaultValue=""
      id="flexCheckChecked"
      defaultChecked=""
    />
    <label className="form-check-label" htmlFor="flexCheckChecked">
      Casilla de verificación marcada
    </label>
  </div>
</div>
  );
}

export default App;
