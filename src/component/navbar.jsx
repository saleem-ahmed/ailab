import { useState } from 'react';
import logo from '../assets/AILAB.png';
import LocationIcon from '../assets/icons/location.png';
import PhoneIcon from '../assets/icons/phone.png';
import MailIcon from '../assets/icons/mail.png';
import { Link, Links } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className="text-gray-600 body-font">
      <div className='bg-[#003A70] flex'>
        <ul className='w-[90%] mx-auto flex flex-col md:flex-row items-center justify-center md:justify-start py-3  gap-[10px]' >
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
            KIU  Gilgit Baltistan
          </li>
        </ul>
        <Link to="/login">
        admin login
        </Link>
      </div>
      <div className="w-[90%] mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img className='w-[112px] h-[60px]' src={logo} alt="" />
        </Link>

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
          <Link to="/" className="mr-5 hover:text-gray-900 cursor-pointer">Home</Link>
          <Link to="/about" className="mr-5 hover:text-gray-900 cursor-pointer">About us</Link>
          <Link to="team" className="mr-5 hover:text-gray-900 cursor-pointer">Team</Link>
          <Link to="project" className="mr-5 hover:text-gray-900 cursor-pointer">Projects</Link>
          <Link to="lab" className="mr-5 hover:text-gray-900 cursor-pointer">Labs</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
