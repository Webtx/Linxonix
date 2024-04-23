import { useState } from 'react';
import './LstTasks.module.css';


export default function LstTasks(props) {
    const [stArryTasks, setStArryTasks] = useState([
        
    ]);

    const [stNewTask, setStNewTask] = useState("");

    function handlerAddTask() {
        const newId = stArryTasks.length + 1;
        let objNewTask = { id: newId, text: stNewTask, completed: false }
        setStArryTasks([...stArryTasks, objNewTask]);

        setStNewTask('');

    }

    function handlerDeleteTask(e, t) {
        const updatedArryTasks = stArryTasks.filter(objTask => objTask.text != t);
        setStArryTasks(updatedArryTasks);
    }

    function handleCheckboxChange(id) {
        const updatedTasks = stArryTasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setStArryTasks(updatedTasks);
    }


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
    <ul>
        <input type="text" placeholder="Title" value={stNewTask} onChange={e => setStNewTask(e.target.value)} />
        
        <input type="button" value="add" onClick={(e) => handlerAddTask(e)} />
        <br />

        {stArryTasks.map((tskObj, i) =>
            <li key={`tt_${i}`}> <input type = "checkbox"checked={tskObj.completed} onChange={() => handleCheckboxChange(tskObj.id)} />
                <span style={tskObj.completed ? { textDecoration: 'line-through' } : null}>
                    {tskObj.text}
                </span>
                <input type="button" value="delete" onClick={(e) => handlerDeleteTask(e, tskObj.text)} />
            </li>)}
    </ul></>);
}


