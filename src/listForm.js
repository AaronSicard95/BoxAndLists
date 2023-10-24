import {v4 as uuid} from 'uuid';
import { useRef, useState } from 'react';
import TodoList from './todoList';

function ListForm(){
    const [todos, setTodos] = useState([]);
    const [formData, setFormData] = useState({todo: ""});
    const stateRef = useRef();


    stateRef.current = todos;

    const removeTodo=  id=>{
        let newTodos = stateRef.current.filter(t => t.id!==id);
        setTodos(newTodos);
    }

    const addTodo = (todo) =>{
        let newTodos = [...todos, {
        todo: todo.todo,
        id: uuid(),
        remfunc: removeTodo
    }]
        setTodos(newTodos);
        setFormData({todo: ""});
    }

    const handleChange = (evt) =>{
        evt.preventDefault();
        const {id, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [id]: value
        }));
    }
    
    const handleSubmit = (evt) =>{
        evt.preventDefault();
        addTodo(formData);
    }
    
    return <div>
        <form onSubmit={evt=>(handleSubmit(evt))} onChange={evt=>(handleChange(evt))}>
        <label htmlFor="todo">ToDo: </label>
        <input id="todo" type="text" value={formData.todo}/>
        <button>Add ToDo!</button>
    </form>
    <TodoList todos={todos}></TodoList>
    </div>
}

export default ListForm;