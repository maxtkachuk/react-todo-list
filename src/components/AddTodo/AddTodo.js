import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoList from "../TodoList/TodoList";

function AddTodo({todo, setTodo}) {
    
    const[value, setValue] = useState('')

    function saveTodo(){
        setTodo(
            [...todo, {
                id: uuidv4(),
                title: value,
                status: true
            }]
        )
        setValue('')
    }

    console.log(todo)

    return (
        <div>
            <input placeholder = "ENTER THE NOTE:" value={value} onChange={ (e)=>setValue(e.target.value) }/>
            <button onClick={saveTodo}>SAVE</button>
        </div>
    )
}

export default AddTodo