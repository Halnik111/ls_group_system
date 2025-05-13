import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useAuth} from "../hook/useAuth";

const Unauthorized = () => {
    const navigate = useNavigate();
    const { user, isAuthenticated, token } = useAuth();

    useEffect(() => {
        console.log(isAuthenticated)
    }, []);
    
    return (
        <div className={'text-red-200 w-full flex justify-center items-center h-screen flex-col gap-6'}>
            <div className={'font-bold text-4xl'}>Unauthorized</div>
            <div className={'cursor-pointer font-semibold text-2xl bg-gray-800 rounded px-10 py-2'} onClick={() => navigate('/login')}>Login</div>
            <div className={'text-red-200'}>asd{user}</div>
        </div>
    );
};

export default Unauthorized;