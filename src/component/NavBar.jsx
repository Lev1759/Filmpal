import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const NavBar = () => {
  const { user, logOut } = UserAuth();
  let navigate = useNavigate();

  const handleLogOut = async() => {
    try {
      await logOut();
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
     <div className='absolute flex items-center justify-between z-[100] w-full px-2 md:px-16 py-10 md:py-16'>
        <Link to='/'><p className='text-3xl md:text-5xl font-bold cursor-pointer text-[blueviolet]'>filmBack</p></Link>
       {user ? (
         <div className='space-x-4 text-white'>
         <Link to='/account'><button className='border rounded px-3 md:px-5 py-[7px] text-sm  font-bold'>Account</button></Link>
        <button onClick={handleLogOut} className='bg-black text-white rounded px-3 md:px-5 py-2 text-sm font-bold'>Log out</button>
     </div>
       ) : (
        <div className='space-x-4 text-white'>
        <Link to='/LogIn'><button className='border rounded px-3 md:px-5 py-[7px] text-sm  font-bold'>Sign In</button></Link>
        <Link to='/SignUp'><button className='bg-black text-white rounded px-3 md:px-5 py-2 text-sm font-bold'>Sign Up</button></Link>
    </div>
       )}

    </div> 
    </>
  )
}

export default NavBar;
