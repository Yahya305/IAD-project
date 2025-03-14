import React, { useState } from 'react'
import { useNavigate, useLocation } from "react-router"
import { CiSettings } from "react-icons/ci";
import { SlLogout } from "react-icons/sl";
import { motion } from "framer-motion"

import "./index.css"
import { useIsMobile } from '../../utils/useIsMobile';
import useGlobalVarsStore from '../../store/globalVarsStore';



const Sidebar = ({ routes }) => {
    const { isSidebarOpen: isOpen, setSidebarOpen: setIsOpen } = useGlobalVarsStore()
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const isMobile = useIsMobile(1200)
    return (
        <motion.aside
            animate={{
                width: isOpen ? (isMobile ? "100vw" : "300px") : "0px",
                padding: isOpen ? "0 20px" : "0"
            }}
            className={`dashboard-sidebar ${isMobile ? "mobile" : ""}`}>
            <motion.button
                animate={{
                    right: isOpen ? (isMobile ? "10px" : "-15px") : "-50px",
                }}
                className="opener" onClick={() => setIsOpen(!isOpen)}>
                X
            </motion.button>
            {isOpen &&
                <>
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
                </>}
        </motion.aside>
    )
}

export default Sidebar