import React, {createContext, useEffect, useReducer} from 'react';
import apiReq from "../apiReq";

export const AuthContext = createContext();

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    loading: true,
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
            return {
                ...initialState,
              loading: false  
            };
        default:
            return state;
    }
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        console.log('run')
        const user = JSON.parse(localStorage.getItem('user'));
        const token = localStorage.getItem('token');
        try {
            if (token && user) {
                dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
            }
        } catch {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        }
    }, []);

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
            localStorage.setItem('user', JSON.stringify(user));

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

            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user.username));

            dispatch({ type: 'LOGIN_SUCCESS', payload: { user, token } });
            return { success: true, user };
        } catch (err) {
            dispatch({ type: 'LOGIN_FAILURE', payload: err.message });
            return { success: false, error: err.message };
        }
    }

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
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