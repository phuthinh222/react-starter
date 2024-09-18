import "./components/todo/todo.css"
import TodoData from "./components/todo/TodoData"
import TodoNew from "./components/todo/TodoNew"
import reactLogo from "./assets/react.svg"

const App = () => {
  return (
   <div className="todo-container">
    <div className="todo-title">Todo List</div>
    <TodoNew/>
    <div className="todo-image">
      <img src={reactLogo} alt="" />
    </div>
    <TodoData/>
   </div>
  )
}

export default App
