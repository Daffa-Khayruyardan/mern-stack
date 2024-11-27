import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// import custom hooks
import useAuthContext from '../hooks/useAuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState('');

    const {state,dispatch} = useAuthContext();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:3000/api/v1/login`, { email, password });

            localStorage.setItem('user', JSON.stringify(response.data));

            dispatch({type: 'LOGIN', payload: response.data});

            // navigate('/home');
        }catch(err) {
            if(err.response.data.Error === 'Email is invalid') {
                setError('email invalid');
            }
            if(err.response.data.Error === 'Password is invalid') {
                setError('password invalid');
            }
        }
    };

    let errorMSG;

    if(errorMSG === 'email invalid') {
        errorMSG = <h1>Email is invalid</h1>
    }

    if(errorMSG === 'password invalid') {
        errorMSG = <h1>Password is invalid</h1>
    }

    return (
        <div className='w-1/3 h-1/2 flex flex-col items-center bg-white'>
            {/* headers */}
            <h1 className='text-2xl mt-5 mb-5'>MERN</h1>
            
            {/* error warning */}
            <div className={`${error === '' ? "hidden" : ""}bg-red-600 p-1 pl-3 pr-3 rounded-sm`}>
                {errorMSG}
            </div>

            {/* register form */}
            <form onSubmit={(e) => handleSubmit(e)} className='mb-4'>
                <label>Email :</label><br className='mb-2'/>
                <input onChange={(e) => setEmail(e.target.value)} type="text" className='p-1 pl-4 border border-black' /><br className='mb-4'/>

                <label>Password :</label><br className='mb-2'/>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className='p-1 pl-4 border border-black' /><br className='mb-5'/>

                <button type='submit' className='bg-green-600 p-2 text-white rounded-md'>Login</button>
            </form>

            <p className=''>
                Don't have account? <Link to="/register" className='text-green-600'>signup</Link>
            </p>
        </div>
    );
}

export default Login;
