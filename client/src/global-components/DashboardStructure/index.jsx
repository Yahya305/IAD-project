import React from 'react'
import "./index.css"
import { useIsMobile } from '../../utils/useIsMobile'
import useGlobalVarsStore from '../../store/globalVarsStore'

const DashboardStructure = ({ children }) => {

    return (
        <div className='dashboard-structure'>{children}</div>
    )
}

export const useDashboardStatus = () => {
    const { isSidebarOpen } = useGlobalVarsStore()
    const isMobile = useIsMobile(1200)
    return isMobile ? (isSidebarOpen ? false : true) : true
}

export default DashboardStructure