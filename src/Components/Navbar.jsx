import React from 'react'
import Logo from '../assests/our-logo.png'

function Navbar() {
  return (
    <nav className='flex flex-row justify-between items-center px-4 md:px-16 py-5'>
         <div className='w-[90px] h-[90px]'>
            <img src={Logo} alt="our_logo_here"  className='w-full h-full object-fill'/>
         </div>
         <div>
            <p className='text-slate-100 text-xl'>Blog</p>
         </div>     
    </nav>
  )
}

export default Navbar
