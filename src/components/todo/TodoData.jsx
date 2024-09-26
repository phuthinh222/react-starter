const TodoData = (props) => {

    //props is object
    console.log(props);
    const {name, age, data} = props;

    return (
        <div className="todo-data">
            <div>Learning React</div>
            <div>Learning MySQL</div>
            <div>My name is {name}</div>
        </div>
    )
}

export default TodoData