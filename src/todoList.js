function TodoList(props){
    let todos = props.todos;
    return <div style={{display: "inline"}}>
        {todos.map(t =>(<div key={t.id}><p style={{display: "inline-block"}}>{t.todo}</p><button style={{display: "inline-block"}} onClick={evt=>t.remfunc(t.id)}>X</button></div>))}
    </div>
    
}

export default TodoList;