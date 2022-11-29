
import { useState } from 'react'
import { services } from './assets/services';
import Panel from './components/Panel';
import './App.css'

const getFormattedPrice = (price) => `${price.toFixed(2)}€`;

export default function App() {

  
  // Creo tantas variables como servicios tengo en el array y sus estados a false
  const [checkedState, setCheckedState] = useState(
    new Array(services.length).fill(false)
  );
  //Estado deonde se guarda el total
  const [ total, setTotal ] = useState(0);

  // Cuando cambie un checkbox actualizo su valor al contario del que tenia en un nuevo array
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    //paso el nuevo array como actualizacion de la variable y esto obliga a repintar pantalla 
    setCheckedState(updatedCheckedState);

    //Calculo el total cogiendo el index de aquellos valores que sean true, y con ese index voy al array de servicios y cojo su precio.
    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + services[index].price;
        }
        return sum;
      },
      0
    );
    
    //Paso el precio total calculado a la funcion setTotal para que repinte y muestre el total actualizado en pantalla.
    setTotal(totalPrice);
    
  };

  return (
    <div className="App">
      <h3>Que dessitjes que fem?</h3>
      <ul className="list-group mx-4">
        {/* Cargamos los servicios con su control Checkbox  */}
        {services.map(({ task, price }, index) => {
          return (
            <li key={index}>
              <div className="task-list-item">
                <input
                  className='form-check-input'
                  type="checkbox"
                  id={`custom-checkbox-${index}`}
                  name={task}
                  value={task}
                  checked={checkedState[index]}
                  onChange={() => handleOnChange(index)}
                  />
                <label htmlFor={`custom-checkbox-${index}`}>{task}  {price}€</label>
              </div>
            </li>
          );
        })}
        {checkedState[0] ? <Panel /> : null }
      </ul>
      <div className="total-section">Total: {getFormattedPrice(total)}</div>
    </div>
  );
}

