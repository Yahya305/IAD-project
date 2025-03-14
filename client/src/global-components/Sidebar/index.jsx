import React from 'react'
import { useNavigate, useLocation } from "react-router"
import { CiSettings } from "react-icons/ci";
import { SlLogout } from "react-icons/sl";

import "./index.css"



const Sidebar = ({ routes }) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    return (
        // style={{display: 'none'}}
        <aside className='dashboard-sidebar'>
            <div className="logo-section">
                <div className="logo">Logo</div>
                <hr />
            </div>
            <div className="all-routes">
                <div className="routes">
                    {routes.map(route => (
                        <div onClick={() => navigate(route.path)} className={`route ${route.path === pathname ? "active" : ""}`} key={route.path}>
                            <div className="icon">{route.icon}</div>
                            <div className="name">{route.name}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="user">
                <hr />
                <div className="role">Admin</div>
                <div className="profile">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="" />
                    <div className="name">Yahya Hamza</div>
                </div>
                <div className="actions">
                    <button>
                        <CiSettings fontSize={30} />
                        <span>Settings</span>
                    </button>
                    <button>
                        <SlLogout fontSize={20} />
                        <span>Log out</span>
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar