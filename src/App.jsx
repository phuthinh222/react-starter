import "./components/todo/todo.css"
import TodoData from "./components/todo/TodoData"
import TodoNew from "./components/todo/TodoNew"
import reactLogo from "./assets/react.svg"

const App = () => {

  const name = "Krak";
  const age = 22;
  const data = {
    address: "Huong Tra",
    province: "Hue City"
  }
  // {key: value}

  return (
   <div className="todo-container">
    <div className="todo-title">Todo List</div>
    <TodoNew/>
    <div className="todo-image" style={{marginTop: "20px"}}>
      <img src={reactLogo} alt="" />
    </div>
    <TodoData
      name = {name}
      age = {age}
      data = {data}
     />
   </div>
  )
}

export default App
