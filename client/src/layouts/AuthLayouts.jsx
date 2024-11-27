import React from "react"; 
import { Outlet, Navigate } from "react-router-dom";

// import custom hooks
import useAuthContext from '../hooks/useAuthContext';

const AuthLayouts = () => {
    const {user} = useAuthContext();

    return (!user ?
        <div className="flex justify-center items-center h-[100vh] bg-gray-300">
            <Outlet />
        </div> : <Navigate to="/home" />
    );
}

export default AuthLayouts;
