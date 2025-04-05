import React from 'react';
import '../css/SideBar.css';

function SideBar({ onStyleChange }) {
    return (
        <div className='sidebarStyles'>
            <span className='closeButtonStyles'>close</span>
            <ul>
                <li onClick={() => onStyleChange('style1')}><a href="#">Style 1</a></li>
                <li onClick={() => onStyleChange('style2')}><a href="#">Style 2</a></li>
                <li onClick={() => onStyleChange('style3')}><a href="#">Style 3</a></li>
            </ul>
        </div>
    );
}

export default SideBar;