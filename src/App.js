
import React, { useState } from 'react'
import { services } from './assets/services';

//const getFormattedPrice = price => `$${price.toFixed(2)}`;
const getFormattedPrice = price => `$${price}`;

function App() {


  // Creo tantas variables como servicios tengo en el array y sus estados a false
  const [checkedState, setCheckedState] = useState(
    new Array(services.length).fill(false)
);
  const { total, setTotal} = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + services[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };



  return (
    <div className="App">
       <h3>Que dessitjes que fem?</h3>
      <ul className="list-group mx-4">
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
                  <label htmlFor={`custom-checkbox-${index}`}>{task}</label>
                
                <div className="right-section">{getFormattedPrice(price)}</div>
              </div>
            </li>
          );
        })}
        <li>
          <div className="toppings-list-item">
            <div className="left-section">Total:</div>
            <div className="right-section">{getFormattedPrice(total)}</div>
          </div>
        </li>
      </ul>
   




  </div>
);
}
export default App;
