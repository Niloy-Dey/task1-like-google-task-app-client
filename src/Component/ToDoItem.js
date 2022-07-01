import React from 'react';

const ToDoItem = ({text, remove, update}) => {
    return (
        <div className="item flex justify-center items-center ">
        <div className="text-left m-1 p-2  bg-slate-600 text-white  w-96 ">{text}
        <div className="icons text-right">
            <i className="ri-pencil-fill" onClick={update}></i>
            <i className="ri-delete-bin-7-fill" onClick={remove}></i>
        </div>
        </div>
    </div>
    );
};

export default ToDoItem;