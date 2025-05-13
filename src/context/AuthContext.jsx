import React, { createContext, useReducer, useEffect } from 'react';
import apiReq from "../apiReq";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext();

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    loading: false,
    error: null,
};

function authReducer(state, action) {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return { ...state, loading: true, error: null };
        case 'LOGIN_SUCCESS':
            return {
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
                loading: false,
                error: null,
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    // useEffect(() => {
    //     const token = localStorage.getItem('authToken');
    //     const user = JSON.parse(localStorage.getItem('authUser'));
    //     if (token && user) {
    //         dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
    //     }
    // }, []);

    const login = async (username, password) => {
        dispatch({ type: 'LOGIN_REQUEST' });
        try {
            const res = await apiReq('/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.message || 'Login failed');
            }

            const data = await res.json();
            const { user, token } = data;

            localStorage.setItem('token', token);

            dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
            return { success: true, user };
        } catch (err) {
            dispatch({ type: 'LOGIN_FAILURE', payload: err.message });
            return { success: false, error: err.message };
        }
    };
    
    const register = async (username, password) => {
        dispatch({ type: 'LOGIN_REQUEST' });
        try {
            const res = await apiReq('/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (!res.ok) {
                const error = await res.json();
                throw new Error(error.message || 'Registration failed');
            }

            const data = await res.json();
            const { user, token } = data;

            if (!data.user || !data.token) {
                throw new Error('Invalid response from server');
            }

            localStorage.setItem('authToken', token);

            dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
            return { success: true, user };
        } catch (err) {
            dispatch({ type: 'LOGIN_FAILURE', payload: err.message });
            return { success: false, error: err.message };
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        dispatch({ type: 'LOGOUT' });
    };
    
    const errorDispatch = (message) => {
        dispatch({ type: 'LOGIN_FAILURE', payload: message });
    }

    return (
        <AuthContext.Provider value={{ ...state, login, logout, register, errorDispatch }}>
            {children}
        </AuthContext.Provider>
    );
};