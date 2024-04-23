import './Calc.css'
import { useState } from 'react'

export default function Calc(props){
    const [stNum1, setStNum1] = useState(0.00);
    const [stNum2, setStNum2] = useState(0.00);
    const [stNumR, setStNumR] = useState(0.00);

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

    <div class = "myCalcWrapper">
        <h1>Calculator</h1>
        <input type="text" placeholder="Num1" value={stNum1} onChange= {(e) => setStNum1 (e.target.value)}/>
        <input type="text" placeholder="Num2" value={stNum2} onChange= {(e) => setStNum2 (e.target.value)}/>
        <br/>
        <input type="submit" value="add" onClick={() => setStNumR(add(stNum1,stNum2))}/>
        <br/>
        <p>{stNumR}</p>
    </div>
    </>
    );

}
function add(a,b){
    if(isNaN(a) || isNaN(b)) return 0;
    let r = parseFloat(a) + parseFloat(b);
    r = parseFloat(r);

    return r.toFixed(2);
}

        
