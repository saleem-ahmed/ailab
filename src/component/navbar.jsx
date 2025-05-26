import React, { useState } from 'react';
import logo from '../assets/AILAB.png';
import LocationIcon from '../assets/icons/location.png';
import PhoneIcon from '../assets/icons/phone.png';
import MailIcon from '../assets/icons/mail.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-gray-600 body-font">
      <div className='bg-[#003A70]'>
        <ul className='w-[90%] mx-auto flex gap-[10px]' >
          <li className='flex items-center justify-start text-white gap-4 py-5'>
            <img className="w-[26px] h-[26px]" src={PhoneIcon} alt="" />
            <a href="tel:+9083411912">09083411912</a>
          </li>
          <li className='flex items-center justify-start text-white gap-2 py-2'>
            <img className="w-[26px] h-[26px]" src={MailIcon} alt="" />
            <a href="mailto:asrad454#@gmail.com">asrad454#@gmail.com</a>
          </li>
          <li className='flex items-center justify-start text-white gap-4 py-2'>
            <img className="w-[26px] h-[26px]" src={LocationIcon} alt="" />
            KIU  Gilgit Baltistan
          </li>
        </ul>
      </div>
      <div className="w-[90%] mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className='w-[112px] h-[60px]' src={logo} alt="" />
        </a>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${isOpen ? 'flex' : 'hidden'
            } md:flex flex-col md:flex-row md:items-center w-full md:w-auto mt-4 md:mt-0`}
        >
          <a className="mr-5 hover:text-gray-900 cursor-pointer">Home</a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer">About us</a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer">Team</a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer">Projects</a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer">Labs</a>
          <button className="inline-flex items-center bg-[#003A70] text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Join Labs
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
