import React from 'react'
import Logo from '../assests/our-logo.png'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='flex flex-row justify-between items-center px-4 md:px-16 py-5'>
         <Link to="/">
         <div className='w-[60px] md:w-[90px] h-[60px] md:h-[90px]'>
            <img src={Logo} alt="our_logo_here"  className='w-full h-full object-fill'/>
         </div>
         </Link>
        <Link to="/blog">
         <div>
            <p className='text-slate-100 text-xl'>Blog</p>
         </div>
        </Link>     
    </nav>
  )
}

export default Navbar
