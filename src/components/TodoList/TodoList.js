import React, {useState} from "react"

function TodoList ({ todo, setTodo }) {

    const [edit, setEdit] = useState(null)

    function deleteTodo(id){
        let newTodo = [...todo].filter(item => item.id!=id)
        setTodo(newTodo)
    }

    function editTodo(id){
        setEdit(id)
    }

    function statusTodo(id){
        let newTodo = [...todo].filter(item => {
            if(item.id == id){
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    return(
        <div>
            {
                todo.map(item =>(
                    <div key={item.id}>
                        {
                            edit == item.id ?
                            <div>
                                <input/>
                                <button>SAVE</button>
                            </div>
                            :
                            <div>{item.title}</div>
                        }
                        <button onClick={ ()=>deleteTodo(item.id) }>DELETE</button>
                        <button onClick={ ()=>editTodo(item.id) }>EDIT</button>
                        <button onClick={ ()=>statusTodo(item.id) }>CLOSE / OPEN</button>
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList