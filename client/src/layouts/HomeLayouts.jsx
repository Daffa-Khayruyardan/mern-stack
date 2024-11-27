import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

// import components
import Navbar from '../components/Navbar';

// import custom hooks
import useAuthContext from '../hooks/useAuthContext';

const HomeLayouts = () => {
    const {user} = useAuthContext();

    return (user ?
        <div className='flex flex-col h-[100vh]'>
            <Navbar />
            <Outlet />
        </div> : <Navigate to="/login" />
    );
}

export default HomeLayouts;
