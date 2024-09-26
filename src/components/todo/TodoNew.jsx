const TodoNew = (props) => {
    console.log(props);

    const {addNewTodo} = props;

    // addNewTodo('karik');

    const handleClick = (name) => {
        alert(`Click me ${name}`);
    }
    const handleOnChange = (event) => {
        console.log('handle on change', event.target.value)
    }
    return (
        <div className="todo-create">
            <input type="text" placeholder="Enter task" onChange={handleOnChange}/>
            <button
                style={ {cursor: 'pointer'} }
                onClick={() => handleClick('Karik')}
            >
                Add
                </button>
        </div>
    )
}

export default TodoNew