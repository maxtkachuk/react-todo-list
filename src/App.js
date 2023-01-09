import React, {useState} from 'react'
import './App.css';
import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';


function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "first todo",
      status: true
    },
    {
      id: 2,
      title: "second todo",
      status: true
    },
    {
      id: 3,
      title: "third todo",
      status: false
    }
  ])

  return (
    <div className="App">
      <Header/>
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
