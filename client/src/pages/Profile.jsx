import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

// import custom hooks
import useContactContext from '../hooks/useContactContext';
import useAuthContext from '../hooks/useAuthContext';

const AddContact = () => {
    const [email,setEmail] = useState('');

    const {user, dispatch} = useAuthContext();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try{
                const response = await axios.get(`http://localhost:3000/api/v1/profile/${user._id}`);

                setEmail(response.data.email);
            }catch(err) {
                console.log(err);
            }
        };

        fetchProfile();
    }, [dispatch,user]);

    const deleteUser = async (e) => {
        e.preventDefault();

        try {
            const deleteUser = await axios.delete(`http://localhost:3000/api/v1/deleteUser/${user._id}`)

            localStorage.removeItem('user');
            dispatch({type: 'LOGOUT'});
        }catch(err) {
            console.log(err);
        }
    };

    const updateUser = async (e) => {
        e.preventDefault();

        try{
            const updateUser = await axios.patch(`http://localhost:3000/api/v1/updateUser/${user._id}`, {email: email});

            const userData = JSON.parse(localStorage.getItem('user'));

            const updateUserData = {...userData, email: email};

            localStorage.setItem('user', JSON.stringify(updateUserData));

            dispatch({type: 'UPDATE_USER', payload: email});

            navigate('/home');
        }catch(err) {
            console.log(err);
        }
    };

    console.log(user);

    return (
        <div className='flex-1 pr-56 pt-5 flex flex-col pl-56 bg-gray-300'>
            {/* page titles */}
            <h1 className='text-2xl pb-5'>Profile</h1>

            <form>
                {/* email input */}
                <label className='text-xl'>Email :</label><br className='mb-2 mt-2'/>
                <input value={email} type="text" onChange={(e) => setEmail(e.target.value)} className={`w-full p-2 rounded-md`} />

                {/* submit button */}
                <div className='flex justify-between items-center'>
                    <button onClick={(e) => updateUser(e)} type='submit' className='justify-center mt-5 bg-green-600 p-2 text-white rounded-md'>Change</button>
                    <button onClick={(e) => deleteUser(e)} className='p-2 text-white bg-red-600 rounded-md mt-5'>Delete</button>
                </div>
            </form>
        </div>
    );
}

export default AddContact;
