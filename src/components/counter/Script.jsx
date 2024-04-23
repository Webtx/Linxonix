import { useState } from 'react';
import './Counter.css'; 


const Counter = ({ prpTitle, prpName }) => {
  const [stCounter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(stCounter + 1);
  };

  const decrementCounter = () => {
    if (stCounter > 0) {
      setCounter(stCounter - 1);
    }
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <>
  <div className="root">
          <h1>React Router Contacts</h1>
          <nav>
            <ul>

              
            <li key="mnu_0">
                <a href ={'/login'}>login</a>
              </li>

              <li key="mnu_1">
                <a href={`/todoList`}>TodoList</a>
              </li>

              <li key="mnu_2">
                <a href={`/calc`}>Calc</a>
              </li>

              <li key="mnu_3">
                <a href={`/card`}>Annie Yang</a>
              </li>

              <li key="mnu_4">
                <a href={`/task`}>Task</a>
              </li>
      
      


            </ul>
          </nav>
        </div>
        <br></br><br></br><br></br>
        
        <div id="detail"></div>
    
    <div className="counter-container">
      
      <h1 class="counterH1">{prpTitle}</h1>

      {prpName && <p id="namelol">{prpName}</p>}
      <div className="counter">
      <p class="counter-preview">{stCounter}</p>
      <div class="buttons" id="allBtns">
        <button class="decrement" id="decrement" onClick={decrementCounter}>Decrement</button>
        <button  class="reset" id="reset" onClick={resetCounter}>Reset</button> 
        <button  class="increment" id="increment" onClick={incrementCounter}>Increment</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Counter;

