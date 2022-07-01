import React, { useEffect, useState } from 'react';
import Item from './Item';
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
    },[])


    
    const handleSubmit = event => {
        event.preventDefault();
        console.log('form submitted');
        console.log(text);
        const task = {text};
        const url= 'http://localhost:5000/tasks';
        fetch(url, {
            method:'POST',
            headers:{
                'Content-type': "application/json"
            },
            body:JSON.stringify(task)
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


    const deleteTodo = (_id) => {
        
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
                    {/* <button className="m-2 bg-slate-600 text-white btn " onClick={addUpdateTodo}>{isUpdating ? "Update" : "Add"}</button> */}
                    <input 
                    type="submit" 
                    className="m-2 bg-slate-600 text-white btn "
                    value={isUpdating ? "Update" : "Add"}
                    />
                    
                </form>
            </div>
            <div className="list   ">
          {todo.map(item => <Item key={item._id} text={item.text}
            remove={() => deleteTodo(item._id)}
            update={() => updateTodo(item._id, item.text)} />)}
        </div>
        </div>
    );
};

export default Home;