import { useState } from "react";

const TodoNew = (props) => {
    // useState hook
    const [valueInput, setValueInput] = useState("");

    const {addNewTodo} = props;
    // addNewTodo('karik');

    const handleClick = () => {
        addNewTodo(valueInput);
        setValueInput("")
    }
    const handleOnChange = (event) => {
        setValueInput(event.target.value)
    }
    return (
        <div className="todo-create">
            <input type="text" placeholder="Enter task" onChange={handleOnChange} value={valueInput}/>
            <button
                style={ {cursor: 'pointer'} }
                onClick={() => handleClick()}
            >
                Add
            </button>
            <div>My text input is = {valueInput}</div>
        </div>
    )
}

export default TodoNew