import { Link } from 'react-router-dom';
import { Button, Navbar, TextInput } from 'flowbite-react';
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon } from 'react-icons/fa';

export default function Header() {
  return (
  <Navbar className='border-b-2'>
    <Link to="/"className='self-center whitespace-nowrap  text-sm sm:text-xl font-semibold ark:text-white'>
    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
    via-purple-500 to-pink-500 rounded-lg text-white'>Lifestyle</span> blog
    </Link>
    <form>
      <TextInput
      type='text' 
      placeholder='Search...'
      rightIcon={AiOutlineSearch}
      className='hidden lg:inline'
      />
    </form>
    <Button className='w-12 h-10 lg:hidden' color='grey' pill>
    <AiOutlineSearch/>
    </Button>
    <div>
      <Button className='w-12 h-10 lg:hidden sm:inlline '>
        <FaMoon />
      </Button>
    </div>
  </Navbar>
  )
}
