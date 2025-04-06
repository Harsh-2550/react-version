




const Todolist = ({ todo , removetodo , completed , edited }) => {





    return (
        <div className="todo-card">

            <p 
            className={`${todo.completed ? "complete" : "" }`}
            onClick={() => completed(todo.id)}>
                {todo.task}
            </p>

            <div className="todo-icons">
                <button onClick={() => edited(todo.id)}>Edit</button>
                <button onClick={() => removetodo(todo.id)}>Remove</button>
            </div>

        </div>
    )
}
export default Todolist