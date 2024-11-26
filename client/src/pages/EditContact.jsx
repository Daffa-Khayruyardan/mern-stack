import React, { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

// import custom hooks

const AddContact = () => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        const fetchContact = async () => {
            const response = await axios.get(`http://localhost:3000/api/v1/contact/${id}`);

            setFirstName(response.data.first_name);
            setLastName(response.data.last_name);
            setEmail(response.data.email);
            setPhone(response.data.phone);
        };

        fetchContact();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.put(`http://localhost:3000/api/v1/contact/${id}`, {
            first_name: firstName,
            last_name: lastName,
            email,
            phone,
        })

        navigate('/home');
    };

    return (
        <div className='flex-1 pr-56 pt-5 flex flex-col pl-56 bg-gray-300'>
            {/* page titles */}
            <h1 className='text-2xl pb-5'>Edit Contact</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
                {/* first name input */}
                <label className='text-xl'>First Name :</label><br className='mb-2'/>
                <input value={firstName} type="text" onChange={(e) => setFirstName(e.target.value)} className='w-full p-2 rounded-md' />

                {/* last name input */}
                <label className='text-xl'>Last Name :</label><br className='mb-2 mt-2'/>
                <input value={lastName} type="text" onChange={(e) => setLastName(e.target.value)} className='w-full p-2 rounded-md' />

                {/* email input */}
                <label className='text-xl'>Email :</label><br className='mb-2 mt-2'/>
                <input value={email} type="text" onChange={(e) => setEmail(e.target.value)} className='w-full p-2 rounded-md' />

                
                <label className='text-xl'>Phone :</label><br className='mb-2 mt-2'/>
                <input value={phone} type="text" onChange={(e) => setPhone(e.target.value)} className='w-full p-2 rounded-md' />

                {/* submit button */}
                <button type='submit' className='justify-center mt-5 bg-green-600 p-2 text-white rounded-md'>Submit</button>
            </form>
        </div>
    );
}

export default AddContact;
