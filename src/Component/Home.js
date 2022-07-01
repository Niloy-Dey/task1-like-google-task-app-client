import React, { useEffect, useState } from 'react';
// import Item from './Item';
import { FaRegTrashAlt, FaPencilAlt } from 'react-icons/fa';
// const axios = require('axios').default;
const Home = () => {

    const [text, setText] = useState("");
    const [todo, setTodo] = useState([]);
    const [isUpdating, setUpdating] = useState("");



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
                console.log(data)
            })
        setText('')
    };




    const addUpdateTodo = () => {
        // if (isUpdating === "") {

        // }else{
        //     axios.post("http://localhost:5000/update-todo", { _id: isUpdating, text })
        //       .then((res) => {
        //         console.log(res.data);
        //         setText("");
        //         setUpdating("");
        //       })
        //       .catch((err) => console.log(err));
        //   }
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



    const updateTodo = (_id, text) => {

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
        </div>
    );
};
export default Home;