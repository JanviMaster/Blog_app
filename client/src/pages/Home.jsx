import React from 'react'; 
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom'; 
import asset1 from '../assets/asset1.jpg';

export default function Home() {
  return (
    <>
      <div className="p-10 py-24">
        <br></br>
        <div className="flex justify-between ">
          
          <div className="w-1/2 px-4 py-9 max-h-100">
            <h1 className="font-semibold text-6xl">
              Discover Your Next Favorite Blog Adventure 
            </h1>
          </div>

          <div className="w-1/2 text-left px-4"><br/>
            <p className="mb-4 mt-8">
              Join our vibrant community of storytellers and readers.
              Dive into a world of creativity, inspiration, and connection.
            </p>

            <div className="flex justify-start space-x-4">
              <Link to="/explore">
              <Button 
              className="px-2  bg-gradient-to-r from-purple-400 to-pink-500 text-white">
               Explore
              </Button>
              </Link>
              <Link to="/sign-in">
              <Button 
              className=" px-2  text-sm font-medium text-white border-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-purple-500 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:via-indigo-500 hover:via-purple-500 hover:to-purple-500 transition">
                Sign In
              </Button>
              </Link>
            </div>
          </div>
        </div>
        <br></br><br></br>
        <div className="mt-10 flex justify-center items-center">
          <img
            src={asset1}
            className="max-h-[100vh] w-auto object-contain rounded-xl shadow-lg"
            alt="Banner"
          />
        </div>
        <br/><br/><br/>
        <div className='flex flex justify-center items-center items-center'>
          <p>Explore now </p>
        </div>
        <div className='flex flex justify-center items-center items-center'>
          <h1 className="font-semibold text-6xl">Discover your passion</h1>
        </div><br/>
        <div className='flex flex justify-center items-center items-center'>
          <p>Dive into a world of creativity and inspiration</p>
        </div >
  <div className="grid md:grid-cols-3 gap-6 px-4 p-20">
    
    <div className="flex flex-col md:flex-row items-center border p-3 rounded-xl shadow hover:shadow-lg transition">
      <div className="md:w-1/2 text-left">
        <p className="text-sm text-gray-500 mb-2">Art</p>
        <h4 className="text-xl font-semibold mb-2">Unleash Your Inner Artist</h4>
        <p className="text-sm text-gray-600 mb-4">Explore artistic expression and creative techniques.</p>
        <a href="/explore" className="text-purple-600 font-medium hover:underline">Learn →</a>
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0 md:ml-4">
        <div className="w-full h-36 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Image</span>
        </div>
      </div>
    </div>

    <div className="flex flex-col md:flex-row items-center border p-3 rounded-xl shadow hover:shadow-lg transition">
      <div className="md:w-1/2 text-left">
        <p className="text-sm text-gray-500 mb-2">Travel</p>
        <h4 className="text-xl font-semibold mb-2">Wander the World</h4>
        <p className="text-sm text-gray-600 mb-4">Join us on adventures that inspire and excite.</p>
        <a href="/explore" className="text-purple-600 font-medium hover:underline">Explore →</a>
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0 md:ml-4">
        <div className="w-full h-36 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Image</span>
        </div>
      </div>
    </div>

    <div className="flex flex-col md:flex-row items-center border p-3 rounded-xl shadow hover:shadow-lg transition">
      <div className="md:w-1/2 text-left">
        <p className="text-sm text-gray-500 mb-2">Food</p>
        <h4 className="text-xl font-semibold mb-2">Savor Every Bite</h4>
        <p className="text-sm text-gray-600 mb-4">Discover recipes that delight your taste buds.</p>
        <a href="/explore" className="text-purple-600 font-medium hover:underline">Cook →</a>
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0 md:ml-4">
        <div className="w-full h-36 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Image</span>
        </div>
      </div>
    </div>
  </div>
  <br/>
  <div className='p-4'>
  <h1 className="font-semibold text-7xl ">
      Start your free 
  </h1>
  <h1 className="font-semibold text-7xl ">
      trial today!
  </h1>
  </div>
    
  <div className="px-8 py-4">
      <div className="flex items-center gap-4">
              <Link to="/sign-in">
        <Button
        className="px-5 py-1 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 text-white rounded-lg shadow-md transition-all duration-200 hover:from-pink-600 hover:to-indigo-600"
        >
          Get started
        </Button>
        </Link>
        <p className="text-sm text-gray-600">No credit card required. Cancel anytime.</p>
      </div>
      <br/>
    </div>

  {/* className="px-2 py-1 bg-gradient-to-r from-purple-400 to-pink-500 text-white"> */}
  {/* bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-lg shadow-md transition-all duration-200 hover:from-purple-600 hover:to-blue-600 */}
  {/* bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-lg shadow-md transition-all duration-200 hover:from-pink-600 hover:to-indigo-600 */}

</div>
    </>
  );
}
