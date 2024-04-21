import React from 'react'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter,FaGithub } from "react-icons/fa";


function Footer() {
  return (
    <div>
    {/* Let's make footer section */}
    {/* Let's Design  the footer */}
    <footer className='py-5 px-10 bg-black text-[#fff] flex flex-col md:flex-row justify-between items-center'>
        <div>
            <p className='text-xl font-[500]'>Copyright@<span className='text-yellow-600 text-[18px]'>SpeedChecker.com</span></p>
        </div>
        <div className='pt-5 md:pt-0'>
            <ul className='flex flex-row justify-between items-center w-[220px]'>
                <a href="?facebook.com" target='_blank'>
                    <li className='text-xl font-[500] text-slate-50 hover:text-yellow-600 duration-150'><FaFacebookSquare /></li>
                </a>
                <a href="?instagram.com" target='_blank'>
                    <li className='text-xl font-[500] text-slate-50 hover:text-yellow-600 duration-150'><FaInstagram /></li>
                </a>
                <a href="?Github.com" target='_blank'>
                    <li className='text-xl font-[500] text-slate-50 hover:text-yellow-600 duration-150'><FaGithub /></li>
                </a>
                <a href="?LinkedIn.com" target='_blank'>
                    <li className='text-xl font-[500] text-slate-50 hover:text-yellow-600 duration-150'><FaLinkedin /></li>
                </a>
                <a href="?twiter.com" target='_blank'>
                    <li className='text-xl font-[500] text-slate-50 hover:text-yellow-600 duration-150'><FaTwitter /></li>
                </a>
            </ul>
        </div>
    </footer>
    {/* Now our's footer section is complete, Thank you for watching */}
    
      
    </div>
  )
}

export default Footer
