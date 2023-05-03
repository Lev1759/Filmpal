import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const LogIn = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    let navigate = useNavigate();

    const { user, logIn} = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await logIn(email, password);
            navigate('/')
        } catch (error) {
           console.log(error) 
           setError(error.message);
        }
    }


  return (
    <div className='w-full h-screen'>
        <img className='w-full h-full absolute object-cover' src='/images.jpg' alt='' />
        <div className='fixed w-full h-screen bg-black/60 top-0 left-0'></div>
        <div className='fixed w-full px-4 py-28 z-50'>
            <div className='max-w-[450px] h-[500px] bg-black/75 mx-auto text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign In</h1>
                    {error? (<div className='p-3 bg-red-300 mt-2'>Wrong email or password</div>) : (<div>{null}</div>)}
                    <form onSubmit={handleSubmit} className='flex flex-col w-full py-4'>
                        <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-500 rouneded' type='email' placeholder='email' autoComplete='email'/>
                        <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-500 rouneded' type='password' placeholder='password' autoComplete='current-passord'/>
                        <button className='bg-red-600 my-3 p-3 rounded'>
                            Sign In
                        </button>
                        <div className='flex items-center justify-between'>
                            <p className='text-gray-400 text-sm'>
                                <input className='mr-2 ' type='checkbox'/>
                                Remember me
                            </p>
                            <p className='text-gray-400 text-sm'>Need help?</p>
                        </div>
                        <p className='my-3'><span className='text-sm my-3 text-gray-400'>New to FilmPal? </span> 
                        <Link to='/SignUp'>Sign Up</Link>
                        </p>
                    </form>
                </div>

            </div>

        </div>
    </div>
  )
}

export default LogIn;