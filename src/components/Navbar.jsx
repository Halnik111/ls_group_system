import React from 'react';
import {useNavigate} from "react-router-dom";
import {useAuth} from "../hook/useAuth";

const Navbar = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    
    return (
        <div className={"flex w-full  text-lg p-2 md:p-4 items-center justify-start bg-gray-800"}>
            <div className={'block md:hidden cursor-pointer'}>
                LS-G
            </div>
            <div className={'ml-6 mr-auto flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-white px-2'}>
                <img src={'/search.png'} alt={''} width={14} height={14} className={'w-4 h-4'}/>
                <input type={'text'} placeholder={'Hladať...'} className={'border-none bg-transparent w-[200px] p-2 outline-none'}/>
            </div>
            <div className={'flex gap-4'}>
                {user?.username ? (<div className={''}>admin</div>) 
                    : 
                    (
                    <div className={'cursor-pointer border-b px-1 text-red-200 font-bold'}
                         onClick={() => navigate('/login')}> Login </div>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;