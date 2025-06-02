import React, { useState } from 'react';
import logo from '../assets/AILAB.png';
import LocationIcon from '../assets/icons/location.png';
import PhoneIcon from '../assets/icons/phone.png';
import MailIcon from '../assets/icons/mail.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
  const [isLabsDropdownOpen, setIsLabsDropdownOpen] = useState(false);

  return (
    <header className="text-gray-600 body-font">
      <div className='bg-[#003A70]'>
        <ul className='w-[90%] mx-auto flex flex-col md:flex-row items-center justify-center md:justify-start py-3 gap-[10px]'>
          <li className='flex items-center justify-start text-white gap-4 py-0 md:py-5'>
            <img className="w-[26px] h-[26px]" src={PhoneIcon} alt="" />
            <a href="tel:+9083411912">09083411912</a>
          </li>
          <li className='flex items-center justify-start text-white gap-2 py-0 md:py-5'>
            <img className="w-[26px] h-[26px]" src={MailIcon} alt="" />
            <a href="mailto:asrad454#@gmail.com">asrad454#@gmail.com</a>
          </li>
          <li className='flex items-center justify-start text-white gap-4 py-0 md:py-5'>
            <img className="w-[26px] h-[26px]" src={LocationIcon} alt="" />
            KIU Gilgit Baltistan
          </li>
        </ul>
      </div>

      <div className="w-[90%] mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center justify-between">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className='w-[112px] h-[60px]' src={logo} alt="Logo" />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-600 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:items-center w-full md:w-auto mt-4 md:mt-0 relative`}>
          <Link to="/" className="mr-5 hover:text-gray-900 cursor-pointer">Home</Link>
          <Link to="/about" className="mr-5 hover:text-gray-900 cursor-pointer">About us</Link>
          <Link to="/team" className="mr-5 hover:text-gray-900 cursor-pointer">Team</Link>

          {/* Projects Dropdown */}
          <div
            className="relative mr-5 cursor-pointer"
            onMouseEnter={() => setIsProjectDropdownOpen(true)}
            onMouseLeave={() => setIsProjectDropdownOpen(false)}
          >
            <span className="hover:text-gray-900">Projects</span>
            {isProjectDropdownOpen && (
              <div className="absolute top-full left-0 bg-white border rounded shadow-md z-50 min-w-[160px]">
                <Link to="/ipads" className="block px-4 py-2 hover:bg-gray-100 text-sm">IPADS</Link>
                <Link to="/lms" className="block px-4 py-2 hover:bg-gray-100 text-sm">LMS</Link>
              </div>
            )}
          </div>

          {/* Labs Dropdown */}
          <div
            className="relative mr-5 cursor-pointer"
            onMouseEnter={() => setIsLabsDropdownOpen(true)}
            onMouseLeave={() => setIsLabsDropdownOpen(false)}
          >
            <span className="hover:text-gray-900">Labs</span>
            {isLabsDropdownOpen && (
              <div className="absolute top-full left-0 bg-white border rounded shadow-md z-50 min-w-[160px]">
                <Link to="/lab" className="block px-4 py-2 hover:bg-gray-100 text-sm">AI Lab</Link>
                <Link to="/lab2" className="block px-4 py-2 hover:bg-gray-100 text-sm">Second Lab</Link>
                {/* <Link to="/lab/robotics" className="block px-4 py-2 hover:bg-gray-100 text-sm">Robotics Lab</Link>
                <Link to="/lab/datascience" className="block px-4 py-2 hover:bg-gray-100 text-sm">Data Science Lab</Link> */}
              </div>
            )}
          </div>

          <button className="inline-flex items-center bg-[#003A70] text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Join Labs
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;