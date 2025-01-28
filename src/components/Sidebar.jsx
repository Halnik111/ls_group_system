import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

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
                href: "/carOrder",
                visible: ["admin", "user"],
            },
            {
                icon: "/car_database.png",
                label: "Vozidlá",
                href: "/car_database",
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
    const [activePage, setActivePage] = useState('home');
    
    
    return (
        <div className={'hidden md:flex gap-4  h-full flex-col p-2'}>
            {menuItems.map(i => (
                <ul className={'gap-1 flex flex-col'} key={i.title}>
                    <span className={'text-lg font-bold'}>{i.title}</span>
                    {i.items.map(item => {
                        if (item.visible.includes(role)) {
                            return (
                                <div className={`pl-3 hover:font-bold ${activePage === item.href ? 'text-red-200 font-bold' : ''}`} key={item.label} onClick={() => {
                                    navigate(item.href);
                                    setActivePage(item.href);
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