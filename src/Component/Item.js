import React from 'react';
import {FaRegTrashAlt, FaPencilAlt } from 'react-icons/fa';

const Item = ({text, remove, update}) => {
    return (
        <div className="item flex justify-center items-center ">
        <div className="text-left m-1 p-2  bg-slate-600 text-white  w-96  flex justify-between">{text}
        <div className="icons flex j">
            <i className="ri-pencil-fill mr-3 cursor-pointer" onClick={update}><FaPencilAlt/> </i>
            <i className="ri-delete-bin-7-fill cursor-pointer" onClick={remove}><FaRegTrashAlt/> </i>
        </div>
        </div>
    </div>
    );
};

export default Item;