import React from 'react';
import {useNavigate} from "react-router-dom";

const Unauthorized = () => {
    const navigate = useNavigate();
    
    return (
        <div className={'text-red-200 w-full flex justify-center items-center h-screen flex-col gap-6'}>
            <div className={'font-bold text-4xl'}>Unauthorized</div>
            <div className={'cursor-pointer font-semibold text-2xl bg-gray-800 rounded px-10 py-2'} onClick={() => navigate('/login')}>Login</div>
        </div>
    );
};

export default Unauthorized;