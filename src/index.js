import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
        <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400&family=Playwrite+HU:wght@100..400&family=Roboto:ital,wght@0,100..900;1,100..900&family=Updock&display=swap');
        </style>
    </React.StrictMode>
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals