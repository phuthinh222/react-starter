const TodoNew = (props) => {
    console.log(props);

    const {addNewTodo} = props;

    addNewTodo('karik');
    return (
        <div className="todo-create">
            <input type="text" placeholder="Enter task"/>
            <button>Add</button>
        </div>
    )
}

export default TodoNew