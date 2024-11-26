import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const Navbar = () => {
    const {pathname} = useLocation();

    

    return (
        <div className='h-12 mt-1 mb-1 justify-between ml-12 mr-12 flex items-center bg-white'>
            {/* app brand */}
            <h1 className='text-2xl font-semibold'>MERN</h1>

            {/* page links */}
            <div className='flex items-center space-x-7'>
                <Link to="/home" className={`${pathname === '/home' ? 'bg-green-600 p-2 rounded-full text-white' : ''}`}>Homepage</Link>
                <Link to="/add" className={`${pathname === '/add' ? 'bg-green-600 p-2 rounded-full text-white' : ''}`}>Add</Link>
            </div>

            {/* user info */}
            <div className='flex items-center space-x-7'>
                <h1>daffakhayru@gmail.com</h1>
                <button className='border-2 border-green-600 p-2 rounded-md'>Logout</button>
            </div>
        </div>
    );
}

export default Navbar;
