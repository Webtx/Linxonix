import react, {useState} from 'react'

function toDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

    }

    function moveTaskUp(index){

    }

    function moveTaskDown(index){

    }
    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input
                    type ="text" 
                    placeholder='Enter a task...'
                    value={newTask}
                    onChange={handleInputChange}/>
                <button className = "add-button"
                        onClick={addTask}
                        Add></button>
            </div>

            <ol>
                {tasks.map(element, index)}
            </ol>

        </div>
    )
}

export default toDoList;