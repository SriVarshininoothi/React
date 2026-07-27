import React, { useState } from "react";
import { use } from "react";

const ToDoList = () =>{

    const[tasks,setTask] = useState([]);
    const[input,setInput] = useState("");

    const handleAddTask = ()=>{
        
    }


    return(

        <div>

            <h2>ToDo List</h2>

            <div>
                <input 

                type="text" 
                value={input}
                onChange={(e)=> 
                setInput(e.target.value)}
                placeholder="Enter a task.."
                />

                <button onClick={handleAddTask}>Add Task</button>

            </div>

        </div>
    )


}

export default ToDoList;