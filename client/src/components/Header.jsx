import { Link, useLocation } from 'react-router-dom'; 
import { Button, Navbar, TextInput , Dropdown} from 'flowbite-react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';
// import { current } from '@reduxjs/toolkit';
import { Avatar } from 'flowbite-react';
// import { updateCurrentUser } from 'firebase/auth';

export default function Header() {
  const path = useLocation().pathname;

  return (
    <Navbar className=" border-b bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md px-4 py-5 w-full">
      <div className="max-h-50vh container mx-auto flex items-center justify-between">
        
        <div className="flex flex-1 -ml-6">
          <Link
            to="/"
            className="whitespace-nowrap text-xl font-bold text-gray-800 dark:text-white"
          >
            <span className="px-3 py-1 bg-gradient-to-r from-blue-400 via-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Lifestyle
            </span>
            {' '}
            Blog
          </Link>
        </div>
        <div className="hidden lg:flex flex-grow justify-center gap-6">
          <Link
            to="/"
            className={`text-sm font-medium ${
              path === '/' ? 'text-indigo-500 dark:text-indigo-400 font-semibold' : 'text-gray-700 dark:text-gray-300'
            } hover:text-indigo-500 dark:hover:text-indigo-400`}
          >
            Home
          </Link>
          <Link
            to="/explore"
            className={`text-sm font-medium ${
              path === '/explore' ? 'text-indigo-500 dark:text-indigo-400 font-semibold' : 'text-gray-700 dark:text-gray-300'
            } hover:text-indigo-500 dark:hover:text-indigo-400`}
          >
            Explore
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium ${
              path === '/about' ? 'text-indigo-500 dark:text-indigo-400 font-semibold' : 'text-gray-700 dark:text-gray-300'
            } hover:text-indigo-500 dark:hover:text-indigo-400`}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`text-sm font-medium ${
              path === '/projects' ? 'text-indigo-500 dark:text-indigo-400 font-semibold' : 'text-gray-700 dark:text-gray-300'
            } hover:text-indigo-500 dark:hover:text-indigo-400`}
          >
            Projects
          </Link>
        </div>

        <div className="flex items-center justify-end gap-6">
          <FaMoon className="text-gray-600 dark:text-gray-300 cursor-pointer hover:text-indigo-500" size={25} />

          <Link to="/sign-in">
            <Button className="px-1 h-10  text-sm font-medium text-white bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-lg shadow-md transition-all duration-200 hover:from-purple-600 hover:to-blue-600">
              Join us
            </Button>
          </Link>
          {/* <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar>
              alt='user'
              img={}
              rounded
            </Avatar>
          }/> */}
            {/* </Dropdown> */}
          {/* <Link to="/register">
            <Button className="px-1 py-1 text-sm font-medium text-white bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-lg shadow-md transition-all duration-200 hover:from-purple-600 hover:to-blue-600">
            Register
            </Button>
          </Link> */}
        </div>
      </div>
    </Navbar>
  );
}
