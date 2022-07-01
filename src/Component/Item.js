import React from 'react';
import { FaRegTrashAlt, FaPencilAlt } from 'react-icons/fa';

const Item = ({ text, remove, update }) => {
    return (
        <div className="item flex justify-center items-center ">
            <div className="text-left m-1 p-2  bg-slate-600 text-white  w-96  flex justify-between">
                <div className='flex'>
                    <input className='mr-2' type="checkbox" id="html" name="fav_language" value={text} />
                    <p>{text}</p>
                </div>
                <div className="icons flex j">
                    <button className=" mr-3 cursor-pointer" onClick={update}><FaPencilAlt /> </button>
                    <button className=" cursor-pointer" onClick={remove}><FaRegTrashAlt /> </button>
                </div>
            </div>
        </div>
    );
};

export default Item;