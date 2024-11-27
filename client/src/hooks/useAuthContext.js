import React, {useContext} from 'react';
import {authContext} from '../context/authContextProvider';

const useAuthContext = () => {
    const context = useContext(authContext);

    return context;
}

export default useAuthContext;