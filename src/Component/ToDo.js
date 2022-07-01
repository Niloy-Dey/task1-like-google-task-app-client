import React, { useEffect } from 'react';
import { useState } from 'react';
import { FaRegTrashAlt, FaPencilAlt } from 'react-icons/fa';
// import Calendar from 'react-calendar';
// import ToDoItem from './ToDoItem';
const ToDo = () => {

    const [todo, setTodo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTodo(data))
    }, [])


    const deleteTodo = (id) => {
        const proceed = window.confirm('Are you sure  delete this task');
        if(proceed){
            const url = `http://localhost:5000/tasks/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remainingTask = todo.filter(task => task._id !== id)
                setTodo(remainingTask);
            })
        }
    }


    const updateTodo = (_id, text) => {

    }
    return (
        <div className='bg-blue-100'>
            <h1 className='py-2 font-bold text-center text-2xl '>All Tasks</h1>
            {
            todo.map(item => 
                <div className="item flex justify-center items-center ">
                    <div className="text-left m-1 p-2  bg-slate-600 text-white  w-96 flex justify-between items-center">
                        <div className='flex  '>
                            <input className='mr-2' type="checkbox" id="html" name="fav_language" value={item.text}></input>
                            <p>{item.text}</p>
                        </div>
                        <div className="icons flex j">
                            <i className="ri-pencil-fill mr-3 cursor-pointer" onClick={() => updateTodo(item._id)}><FaPencilAlt /> </i>
                            <i className="ri-delete-bin-7-fill cursor-pointer" onClick={() => deleteTodo(item._id)}><FaRegTrashAlt /> </i>
                        </div>
                    </div>
                </div>
         )}
        </div>
    );
};

export default ToDo;