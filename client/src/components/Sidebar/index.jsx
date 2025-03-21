import React from 'react'
import { useNavigate, useLocation } from "react-router"
import { SlLogout } from "react-icons/sl";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { motion } from "framer-motion"
import "./index.css"
import useUserStore from '../../store/userStore';
import Logo from '../../pages/LandingPage/_lib/Header/Logo';
import useGlobalVarsStore from '../../store/globalVarsStore';
import { useIsMobile } from '../../utils/useIsMobile';

const Sidebar = ({ routes }) => {
    // console.log("routes",routes)
    const { isSidebarOpen: isOpen, setSidebarOpen: setIsOpen } = useGlobalVarsStore()
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { user } = useUserStore();
    const isMobile = useIsMobile(1200)

    const closedBtnStyle = {
        right: isOpen ? (isMobile ? "18px" : "-33px") : "-67px",
        backgroundColor: isOpen ? "#ffffff" : "#ffffff52",
        border: "1px solid #00365c",
    };

    const { clearUser } = useUserStore();
    const handleLogout = () => {
        clearUser()
        navigate("/student/login")
    }

    return (
        <motion.aside
            animate={{
                width: isOpen ? (isMobile ? "100vw" : "300px") : "0px",
                // border: isOpen ? "" : "1px solid #00365c",
                padding: isOpen ? "0 10px" : "0",
                transition: {
                    type: "tween"
                }
            }}
            className={`dashboard-sidebar ${isMobile ? "mobile" : ""} ${!isOpen ? "closed" : ""}`}>
            <motion.button
                animate={closedBtnStyle}
                className="opener" onClick={() => setIsOpen(!isOpen)}  >
                {!isOpen ? <FaChevronRight /> : <FaChevronLeft />}
            </motion.button>
            <div className="dashboard-sidebar-wrapper">
                <div className="logo-section">
                    <Logo />
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
                    <div className="profile">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg" alt="" />
                        <div className="name">{user.name}</div>
                    </div>
                    <div className="actions">
                        <button onClick={handleLogout}>
                            <SlLogout fontSize={20} />
                            <span>Log out</span>
                        </button>
                    </div>
                </div>
            </div>
        </motion.aside>
    )
}

export default Sidebar