import React, { useEffect } from 'react';
import axios from 'axios';
import useContactContext from './useContactContext';

const UseFetch = (url) => {
    const {contacts,dispatch} = useContactContext();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(url);

            dispatch({type: 'SET_CONTACT', payload: response.data});
        }

        fetchData();
    }, [])

    return [contacts];
}

export default UseFetch;
