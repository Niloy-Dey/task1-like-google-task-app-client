import React from 'react';
import { FaRegTrashAlt, FaPencilAlt } from 'react-icons/fa';
const ToDoItem = ({ text, remove, update }) => {
    return (
        <div className="item flex justify-center items-center ">
            {/* <div className="text-left m-1 p-2  bg-slate-600 text-white  w-96 flex justify-between items-center">
                <div className='flex  '>
                    <input className='mr-2' type="checkbox" id="html" name="fav_language" value="HTML"></input>
                    <p>{text}</p>
                </div>
                <div className="icons flex j">
                    <i className="ri-pencil-fill mr-3 cursor-pointer" onClick={update}><FaPencilAlt /> </i>
                    <i className="ri-delete-bin-7-fill cursor-pointer" onClick={remove}><FaRegTrashAlt /> </i>
                </div>
            </div> */}
        </div>
    );
};

export default ToDoItem;