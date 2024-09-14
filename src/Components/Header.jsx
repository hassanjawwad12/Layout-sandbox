import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenuFalse = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full flex justify-between items-center px-4 absolute bg-black  top-0">
      <div className="flex items-center justify-center gap-1">
      <img src='/dot.png' alt='logo' className='w-full h-1/2 ' />
        
      <Link to="/">
        <p className="ml-2 text-xl text-white font-bold whitespace-nowrap cursor-pointer font-montserrat">
          CodUAM
        </p>
        </Link>
      </div>
      <div className=" hidden md:flex justify-between space-x-6 lg:text-lg text-md font-bold px-2 py-10 text-white font-montserrat">
        <Link to="/details"><p className="px-4 py-1 cursor-pointer  hover:font-bold">Acerca de</p></Link>
        <Link to="/chatting"> <p className="px-4 py-1 cursor-pointer  hover:font-bold">DemoHTML</p></Link>

      </div>
      <button
        type="button"
        className="inline-flex mt-2 items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        onClick={toggleMenu}
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      {isMenuOpen && (
        <div className="mt-7 z-30 w-auto flex flex-col absolute right-4 top-4  border-gradient-to-r from-[#000000] via-[#504F4F] to-[#000000] ">
          <ul className="font-medium flex flex-col font-montserrat p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-black">
            <li>
            <Link to="/details">
              <p className="px-4 py-2 cursor-pointer text-white  hover:font-bold">
                Acerca de
              </p>
              </Link>
            </li>
            <li>
            <Link to="/chatting">
              <p className="px-4 py-2 cursor-pointer text-white  hover:font-bold">
                DemoHTML
              </p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;

