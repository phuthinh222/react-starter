const TodoData = (props) => {
    //props is object
    const {todos} = props;
    console.log(todos);

    return (
        <div className="todo-data">
            {todos.map( (item, index) => {
                return (<>
                    <div style={{display: 'flex', justifyContent:'space-between'}}>
                        {item.name}
                    <button>Delete</button>
                    </div>
                </>)
            })}
            <div>
                {JSON.stringify(props.todos)}
            </div>
        </div>
    )
}

export default TodoData