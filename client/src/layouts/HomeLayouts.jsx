import React from 'react';
import { Outlet } from 'react-router-dom';

// import components
import Navbar from '../components/Navbar';

const HomeLayouts = () => {
    return (
        <div className='flex flex-col h-[100vh]'>
            <Navbar />
            <Outlet />
        </div>
    );
}

export default HomeLayouts;
