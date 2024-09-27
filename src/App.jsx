import "./components/todo/todo.css"
import TodoData from "./components/todo/TodoData"
import TodoNew from "./components/todo/TodoNew"
import reactLogo from "./assets/react.svg"
import { useState } from "react"

const App = () => {

  // {key: value}
  // const name = "Krak";
  // const age = 22;
  // const data = {
  //   address: "Hue",
  //   province: "Hue City"
  // }
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: 'Learning Javascript'
    },
    {
      id: 2,
      name: 'Watching Youtube'
    }
  ]);

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1,1000),
      name: name
    }
    setTodos([...todos, newTodo])
  }

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
   <div className="todo-container">
    <div className="todo-title">Todo List</div>
    <TodoNew
      addNewTodo = {addNewTodo}
    />
    <div className="todo-image" style={{marginTop: "20px"}}>
      <img src={reactLogo} alt="" />
    </div>
    <TodoData
      // name = {name}
      // age = {age}
      // data = {data}
      todos = {todos}
     />
   </div>
  )
}

export default App
