import React from 'react';

const Navbar = () => {
    return (
        <div className={"flex w-full  text-lg p-2 md:p-4 items-center justify-start bg-gray-800"}>
            <div className={'block md:hidden'}>
                LS-G
            </div>
            <div className={'ml-6 mr-auto flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-white px-2'}>
                <img src={'/search.png'} alt={''} width={14} height={14} className={'w-4 h-4'}/>
                <input type={'text'} placeholder={'Hladať...'} className={'border-none bg-transparent w-[200px] p-2 outline-none'}/>
            </div>
            <div className={''}>
                Admin
            </div>
        </div>
    );
};

export default Navbar;