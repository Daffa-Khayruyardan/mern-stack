import React from 'react';
import axios from 'axios';

// import custom hooks
import useContactContext from '../hooks/useContactContext';
import { useNavigate } from 'react-router-dom';

const Card = ({contact}) => {
    const {dispatch} = useContactContext(); 

    const navigate = useNavigate();

    const deleteContact = async () => {
        const response = await axios.delete(`http://localhost:3000/api/v1/contact/${contact._id}`);

        dispatch({type: 'DELETE_CONTACT', payload: response.data})
    };

    return (
        <div className='bg-white space-y-2 flex flex-row justify-between mb-5 h-auto pt-2 pb-2 rounded-md pl-10 pr-10 w-full'>
            <div className='flex flex-col justify-center'>
                {/* first name */}
                <h1>first_name: 
                    <span className='text-green-600 font-semibold'> {contact.first_name}</span>
                </h1>

                {/* last name */}
                <h1>last_name: 
                    <span className='text-green-600 font-semibold'> {contact.last_name}</span>
                </h1>

                {/* email */}
                <h1>email: 
                    <span className='text-green-600 font-semibold'> {contact.email}</span>
                </h1>

                {/* phone */}
                <h1>phone: 
                    <span className='text-green-600 font-semibold'> {contact.phone}</span>
                </h1>
            </div>

            {/* left container */}
            <div className='flex flex-col justify-center space-y-5'>
                <button onClick={() => navigate(`/edit/${contact._id}`)} className='border-2 border-blue-600 hover:bg-blue-600 hover:text-white duration-200 rounded-md p-2 cursor-pointer'>Edit</button>
                <button onClick={() => deleteContact()} className='border-2 border-red-600 hover:bg-red-600 hover:text-white duration-200 rounded-md p-2 cursor-pointer'>Delete</button>
            </div>
        </div>
    );
}

export default Card;
