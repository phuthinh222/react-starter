import "./components/todo/todo.css"
import TodoData from "./components/todo/TodoData"
import TodoNew from "./components/todo/TodoNew"
import reactLogo from "./assets/react.svg"

const App = () => {

  const name = "Krak";
  const age = 22;
  const data = {
    address: "Hue",
    province: "Hue City"
  }
  // {key: value}

  const addNewTodo = (name) => {
    alert(`Call me ${name}`);
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
      name = {name}
      age = {age}
      data = {data}
     />
   </div>
  )
}

export default App
