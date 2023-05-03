import React from 'react'
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter} from 'react-icons/ti'


const Footer = () => {
    const {user}=UserAuth();
    const today = new Date();
  return (
    <div className='bottom-0 z-[100] bg-black p-16'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='flex flex-col items-center my-6'>
            <Link to='/'><p className='text-3xl md:text-3xl font-bold cursor-pointer text-[blueviolet]'>filmBack</p></Link>
            <div className='flex item-center gap-3 text-white text-2xl cursor-pointer'>
                <TiSocialFacebook />
                <TiSocialTwitter />
                <TiSocialLinkedin />
                <TiSocialInstagram />
                
            </div>
            </div>
            <div>
            <Link to='/'><p className='text-gray-300 text-md md:text-xl font-bold cursor-pointer'>Filmback &copy; {today.getFullYear()}</p></Link>
            </div>
        </div>
    </div>
  )
}

export default Footer;

