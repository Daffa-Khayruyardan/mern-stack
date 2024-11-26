import React, {useContext} from 'react';
import {contactContext} from '../context/contactContextProvider';

const useContactContext = () => {
    const useContactContext = useContext(contactContext);

    if(!useContactContext) {
        throw new Error("There is no context on contacts");
    }

    return useContactContext;
}

export default useContactContext;
