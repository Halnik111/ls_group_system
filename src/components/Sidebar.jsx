import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

const menuItems = [
    {
        title: "MENU",
        items: [
            {
                icon: "/home.png",
                label: "Domov",
                href: "/",
                visible: ["admin", "user"],
            },
            {
                icon: "/open_orders.png",
                label: "Otvorené Zákazky",
                href: "/carWork",
                visible: ["admin", "user"],
            },
            {
                icon: "/database.png",
                label: "Databáza",
                href: "/database",
                visible: ["admin", "user"],
            }
        ]

    },
    {
        title: "Ostatné",
        items: [
            {
                icon: "/logout.png",
                label: "Odhlásenie",
                href: "/logout",
                visible: ["admin", "user"],
            }
        ]
    }
]

const Sidebar = () => {
    const role = 'admin';
    const navigate = useNavigate();
    const location = useLocation();
    
    
    return (
        <div className={'hidden md:flex gap-4  h-full flex-col p-2'}>
    {menuItems.map(i => (
        <ul className={'gap-1 flex flex-col'} key={i.title}>
            <span className={'text-lg font-bold'}>{i.title}</span>
            {i.items.map(item => {
                if (item.visible.includes(role)) {
                    const isActive = location.pathname === item.href;
                    return (
                        <div className={`pl-3 cursor-pointer hover:font-bold ${isActive ? 'text-red-200 font-bold' : ''}`} key={item.label} onClick={() => {
                            navigate(item.href);
                        }}>{item.label}</div>
                    )
                }
            })}
        </ul>
    ))}
</div>
    );
};

export default Sidebar;