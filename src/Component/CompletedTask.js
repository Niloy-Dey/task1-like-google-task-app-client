import React, { useEffect, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
const CompletedTask = () => {
    const [ completedTask,  setCompletedTask] = useState([]);
    // const [todo, setTodo] = useState([]);

    useEffect(() => {
        fetch('https://kinder-backbacon-55938.herokuapp.com/completedTask')
            .then(res => res.json())
            .then(data => setCompletedTask(data))
    }, [])



    const deleteData = (id) => {
        const proceed = window.confirm('Are you sure  delete this task');
        if (proceed) {
            const url = `https://kinder-backbacon-55938.herokuapp.com/completedTask/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    const remainingTask = completedTask.filter(task => task._id !== id)
                    // console.log(remainingTask);
                    setCompletedTask(remainingTask);
                })
        }
    }


    
    return (
        <div className='bg-blue-100 py-10 '>
            <h1 className='text-2xl font-bold py-4'>All Completed Task </h1>
            {
                completedTask.map(singleTask => 
               
                <div className=' bg-slate-600 py-2 text-white m-2 w-96 mx-auto flex  justify-between px-5'>
                    <h1>{singleTask.text}</h1>
                    <i className="ri-delete-bin-7-fill cursor-pointer" onClick={() => deleteData(singleTask._id)}><FaRegTrashAlt /> </i>
                    
                </div>
            )
            }
        </div>
    );
};

export default CompletedTask;