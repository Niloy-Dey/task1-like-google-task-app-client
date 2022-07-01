import React, { useEffect, useState } from 'react';
// import Item from './Item';
import { FaRegTrashAlt, FaPencilAlt, FaCheck } from 'react-icons/fa';
// const axios = require('axios').default;
const Home = () => {

    const [text, setText] = useState("");
    const [todo, setTodo] = useState([]);
    const [isUpdating, setUpdating] = useState("");
    const [complete , setComplete] = useState(false);



    // use effect for showing added tasks
    useEffect(() => {
        fetch('http://localhost:5000/tasks')
            .then(res => res.json())
            .then(data => setTodo(data))
    }, [])



    const handleSubmit = event => {
        event.preventDefault();
        console.log('form submitted');
        console.log(text);
        const task = { text };

        const url = 'http://localhost:5000/tasks';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
            })
        setText('')
    };



    const updateTodo = (id, text) => {
        setUpdating(id);
        setText(text);
    }


    const addUpdateTodo = (id, text) => {
        if (isUpdating === "") {
            fetch(`http://localhost:5000/tasks/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => console.log(data))
            // setText('');
            // setUpdating('');

        }

        else {
            fetch(`http://localhost:5000/tasks/${id}, text}`)
                .then(res => {
                    console.log(res.data);
                    setText('');
                })
        }
    }




    const deleteTodo = (id) => {
        const proceed = window.confirm('Are you sure  delete this task');
        if (proceed) {
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

    const completed = (id, text) => {
        const complete = window.confirm('are you sure completed the task ')
        const CompletedTask = { text };
        if (complete) {
            fetch(`http://localhost:5000/completedTask/${id}`, {
                method: 'POST',
                headers: {
                    'Content-type': "application/json"
                },
                body: JSON.stringify(CompletedTask)
            })
                .then(res => res.json())
                .then(data => {
                console.log(data)
                setComplete(data)
                console.log(complete);

                })
            

            fetch( `http://localhost:5000/tasks/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    const remainingTask = todo.filter(task => task._id !== id)
                    setTodo(remainingTask);
                })
        }
    }



    return (
        <div className='bg-blue-100 py-20 '>
            <h1 className='text-center text-2xl font-bold '>Add To Task</h1>
            <div className='h-full'>
                <form onSubmit={handleSubmit}>
                    <input
                        className='border-4 border-dashed border-green-700 bg-green-100 outline-none p-3 my-4 text-black '
                        placeholder='Enter your Task'
                        type="text"
                        id="text"
                        name="text"
                        value={text}
                        onChange={event => setText(event.target.value)}
                        autoComplete="off"
                    />
                    <input
                        onClick={addUpdateTodo}
                        type="submit"
                        className="m-2 bg-slate-600 text-white btn "
                        value={isUpdating ? "Update" : "Add"}
                    />
                </form>
            </div>
            <div className="list">
                {
                    todo.map(item =>
                        <div className="item flex justify-center items-center ">
                            <div className="text-left m-1 p-2  bg-slate-600 text-white  w-96 flex justify-between items-center">
                                <div className='flex  '>
                                    <i className="ri-pencil-fill mr-3 cursor-pointer" onClick={() => completed(item._id, item.text)}><FaCheck /> </i>
                                    <p>{item.text}</p> 
                                </div>
                                <div className="icons flex ">
                                    <i className="ri-pencil-fill mr-3 cursor-pointer" onClick={() => updateTodo(item._id, item.text)}><FaPencilAlt /> </i>
                                    <i className="ri-delete-bin-7-fill cursor-pointer" onClick={() => deleteTodo(item._id)}><FaRegTrashAlt /> </i>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};
export default Home;