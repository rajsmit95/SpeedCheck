import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assests/our-logo.png';

function Navbar() {
  const location = useLocation();

  // Function to determine if the current path is "/"
  const isHome = location.pathname === '/';

  return (
    <nav className={`flex flex-row justify-between items-center px-4 md:px-16 py-2 bg-[#090a3a] ${isHome ? 'static shadow-none' : 'sticky top-0 shadow-md'}`}>
      <Link to="/">
        <div className='w-[60px] md:w-[80px] h-[60px] md:h-[80px]'>
          <img src={Logo} alt="our_logo_here" className='w-full h-full object-fill'/>
        </div>
      </Link>
      <Link to="/blog">
        <div>
          <p className='text-slate-100 text-xl'>Blog</p>
        </div>
      </Link>     
    </nav>
  );
}

export default Navbar;
