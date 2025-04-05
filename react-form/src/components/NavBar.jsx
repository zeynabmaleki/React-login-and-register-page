import React, { useState } from 'react';
import SideBar from './SideBar.jsx';
import '../css/NavBar.css';

function NavBar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <span 
                        className="sidebar-btn" 
                        onClick={toggleSidebar} 
                        style={{ cursor: 'pointer' }}
                    >
                        ☰
                    </span>
                </div>
            </nav>
            {isSidebarOpen && <SideBar onClose={toggleSidebar} />}
        </>
    );
}

export default NavBar;