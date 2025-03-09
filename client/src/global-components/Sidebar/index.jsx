import React from 'react'
import { useNavigate, useLocation } from "react-router"
import "./index.css"



const Sidebar = ({ routes }) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    return (
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
                <div className="profile"></div>
                <div className="actions"></div>
            </div>
        </aside>
    )
}

export default Sidebar