import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// import custom hooks
import useAuthContext from '../hooks/useAuthContext';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{ 
            const response = await axios.post(`http://localhost:3000/api/v1/register`, {email,password});
            
        }catch(err) {
            if(err.response.data.Error === 'User already exist') {
                setError('user already exist');
            }
        }
    };

    let errorMSG;

    if(error == 'user already exist') {
        errorMSG = <h1>User already exist</h1>
    }

    return (
        <div className='w-1/3 h-[55%] flex flex-col items-center bg-white'>
            {/* headers */}
            <h1 className='text-2xl mt-5 mb-3'>MERN</h1>
            
            {/* error warning */}
            <div className={`${error === '' ? "hidden" : ""}bg-red-600 p-1 pl-3 pr-3 rounded-sm`}>
                {errorMSG}
            </div>

            {/* register form */}
            <form onSubmit={(e) => handleSubmit(e)} className='mb-4'>
                <label>Email :</label><br className='mb-2'/>
                <input type="text" onChange={(e) => setEmail(e.target.value)} className='p-1 pl-4 border border-black' /><br className='mb-4'/>

                <label>Password :</label><br className='mb-2'/>
                <input type="password" onChange={(e) => setPassword(e.target.value)} className='p-1 pl-4 border border-black' /><br className='mb-5'/>

                <button type='submit' className='bg-green-600 p-2 text-white rounded-md'>Register</button>
            </form>

            <p className=''>
                Already have account? <Link to="/login" className='text-green-600'>Login</Link>
            </p>
        </div>
    );
}

export default Register;
