import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom";
import {useAuth} from "../hook/useAuth";

const Login = ( {signOut} ) => {
    const [registerForm, setRegisterForm] = useState(false);
    const navigate = useNavigate();
    const { login, register, logout, isAuthenticated, loading, error, errorDispatch } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    useEffect( () => {
        if (signOut) {
            logout();
            navigate('/login');
        }
        else if (isAuthenticated) {
            navigate('/');
        }
    },[]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (registerForm) {
            if (password !== repeatPassword) {
                errorDispatch('Passwords do not match');
            }
            else {
                register(username, password)
                    .then(result => {
                        if (result.success === true) {
                            navigate('/');
                        }
                    })   
            }
        } else {
            login(username, password)
                .then(result => {
                    if (result.success === true) {
                        navigate('/');
                    }
                })
        }
    };
    
    return (
        <div className={'w-full flex flex-col items-center mt-10'}>
            <div className={'w-1/4'}>
                <div className={'bg-gray-800 rounded-lg p-10'}>
                    <div className={'text-center text-red-200 font-bold text-4xl p-2 pb-1 rounded-md'}>
                        LS-Group
                    </div>
                    <div className={'text-gray-300 text-center text-lg font-light pb-3'}>Garage inventory and tracking</div>
                    <div
                        className={'w-full gap-4 shadow-lg text-gray-300 text-center font-light border rounded-lg border-gray-600'}>
                        {registerForm ?
                            (
                                <div className={'m-3'}>
                                    <div className={'font-medium text-red-200 text-2xl p-1'}>Register</div>
                                    <form className={'flex flex-col gap-4 justify-center w-full'} onSubmit={handleSubmit}>
                                        <div className={'flex border rounded-md border-gray-600 cursor-pointer'}>
                                            <img src={'/mail.png'} width={20} height={20} className={'m-1'}/>
                                            <input required={true} onChange={(e) => setUsername(e.target.value)}
                                                   type={'text'} placeholder={'Username'}
                                                   className={'border-none bg-transparent p-1 outline-none'}/>
                                        </div>
                                        <div className={'flex border rounded-md border-gray-600 cursor-pointer'}>
                                            <img src={'/lock.png'} width={20} height={20} className={'m-1'}/>
                                            <input required={true} disabled={loading}
                                                   onChange={(e) => setPassword(e.target.value)} type={'password'}
                                                   placeholder={'Password'}
                                                   className={'border-none bg-transparent p-1 outline-none'}/>
                                        </div>
                                        <div className={'flex border rounded-md border-gray-600 cursor-pointer'}>
                                            <img src={'/lock.png'} width={20} height={20} className={'m-1'}/>
                                            <input required={true} disabled={loading}
                                                   onChange={(e) => setRepeatPassword(e.target.value)} type={'password'}
                                                   placeholder={'Repeat Password'}
                                                   className={'border-none bg-transparent p-1 outline-none'}/>
                                        </div>
                                        <button
                                            className={'bg-red-200 rounded-lg py-1 text-xl font-normal text-gray-800 cursor-pointer'}
                                            disabled={loading}>Register
                                        </button>
                                    </form>
                                    <div className={'m-3 cursor-pointer'} onClick={() => setRegisterForm(false)}>Already
                                        have an account?
                                    </div>
                                    {error && <div className={'text-red-200'}>{error}</div>}
                                </div>
                            )
                            :
                            (
                                <div className={'m-3'}>
                                    <div className={'font-medium text-red-200 text-2xl p-1'}>Login</div>
                                    <form className={'flex flex-col gap-4 justify-center w-full'} onSubmit={handleSubmit}>
                                        <div className={'flex border rounded-md border-gray-600 cursor-pointer'}>
                                            <img src={'/mail.png'} width={20} height={20} className={'m-1'}/>
                                            <input required={true} disabled={loading}
                                                   onChange={(e) => setUsername(e.target.value)} type={'text'}
                                                   placeholder={'Username'}
                                                   className={'border-none bg-transparent p-1 outline-none'}/>
                                        </div>
                                        <div className={'flex border rounded-md border-gray-600 cursor-pointer'}>
                                            <img src={'/lock.png'} width={20} height={20} className={'m-1'}/>
                                            <input required={true} disabled={loading}
                                                   onChange={(e) => setPassword(e.target.value)} type={'text'}
                                                   placeholder={'Password...'}
                                                   className={'border-none bg-transparent p-1 outline-none'}/>
                                        </div>
                                        <button
                                            className={'bg-red-200 rounded-lg py-1 text-xl font-normal text-gray-800 cursor-pointer'}
                                            disabled={loading}>Login
                                        </button>
                                    </form>
                                    <div className={'m-3 cursor-pointer'} onClick={() => setRegisterForm(true)}>Dont
                                        have an account?
                                    </div>
                                    {error && <div className={'text-red-200'}>{error}</div>}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;