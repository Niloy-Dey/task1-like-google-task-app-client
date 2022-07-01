import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

const Calender = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className='bg-blue-100 py-20 h-[100vh]'>
            <h1 className='text-center text-black text-3xl font-bold '>Calender</h1>
            <div>
                <Calendar className="bg-slate-600 text-white m-5 leading-8  py-20" onChange={setDate} value={date} />
            </div>
            <p className='text-center font-bold'>
                <span className='bold'>Selected Date:</span>{' '}
                {date.toDateString()}
            </p>
        </div>
    );
};

export default Calender;