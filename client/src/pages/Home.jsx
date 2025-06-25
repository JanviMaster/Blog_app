import React from 'react'; 
import { Button } from 'flowbite-react';

export default function Home() {
  return (
    <>
      <div className="p-10">
        <div className="flex justify-between">
          <div className="w-1/2 px-4 py-5">
            <h1 className="font-semibold text-6xl">
              Discover Your Next Favorite Blog Adventure
            </h1>
          </div>

          <div className="w-1/2 text-left px-4">
            <p className="mb-4 mt-8">
              Join our vibrant community of storytellers and readers.
              Dive into a world of creativity, inspiration, and connection.
            </p>

            <div className="flex justify-start space-x-4">
              <Button 
              className=" px-2   text-sm font-medium text-white border-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-purple-500 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:via-indigo-500 hover:via-purple-500 hover:to-purple-500 transition">
                Explore
              </Button>
              <Button 
              className="px-2  bg-gradient-to-r from-purple-400 to-pink-500 text-white">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
