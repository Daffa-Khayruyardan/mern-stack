import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

// import custom hooks
import useContactContext from '../hooks/useContactContext';

const AddContact = () => {
    const {dispatch} = useContactContext();

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [emptyInput,setEmptyInput] = useState([]);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3000/api/v1/contact", {
                first_name: firstName,
                last_name: lastName,
                email,
                phone,
            })      
    
            dispatch({type: 'ADD_CONTACT', payload: response.data});
            navigate('/home');
        }catch (err) {
            setEmptyInput(err.response.data.Error);
        }
    };

    console.log(emptyInput);

    return (
        <div className='flex-1 pr-56 pt-5 flex flex-col pl-56 bg-gray-300'>
            {/* page titles */}
            <h1 className='text-2xl pb-5'>Add Contact</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
                {/* first name input */}
                <label className='text-xl'>First Name :</label><br className='mb-2'/>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} className={`${emptyInput.includes('first_name') ? "border border-red-600" : ""} w-full p-2 rounded-md`} />

                {/* last name input */}
                <label className='text-xl'>Last Name :</label><br className='mb-2 mt-2'/>
                <input type="text" onChange={(e) => setLastName(e.target.value)} className={`${emptyInput.includes('last_name') ? "border border-red-600" : ""} w-full p-2 rounded-md`} />

                {/* email input */}
                <label className='text-xl'>Email :</label><br className='mb-2 mt-2'/>
                <input type="text" onChange={(e) => setEmail(e.target.value)} className={`${emptyInput.includes('email') ? "border border-red-600" : ""} w-full p-2 rounded-md`} />

                
                <label className='text-xl'>Phone :</label><br className='mb-2 mt-2'/>
                <input type="text" onChange={(e) => setPhone(e.target.value)} className={`${emptyInput.includes('phone') ? "border border-red-600" : ""} w-full p-2 rounded-md`} />

                {/* submit button */}
                <button type='submit' className='justify-center mt-5 bg-green-600 p-2 text-white rounded-md'>Submit</button>
            </form>
        </div>
    );
}

export default AddContact;
