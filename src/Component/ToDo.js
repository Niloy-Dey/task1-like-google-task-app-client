import React, { useEffect } from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import ToDoItem from './ToDoItem';
const ToDo = () => {

    const [todo, setTodo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTodo(data))
    }, [])


    const deleteTodo = (_id) => {
        
    }


    const updateTodo = (_id, text) => {
        
    }
    return (
        <div className='bg-blue-100'>
            <h1 className='py-2 font-bold text-center text-2xl '>All Tasks</h1>
             {todo.map(item => <ToDoItem key={item._id} text={item.text}
             remove={() => deleteTodo(item._id)}
             update={() => updateTodo(item._id, item.text)} />)}
        </div>
    );
};

export default ToDo;