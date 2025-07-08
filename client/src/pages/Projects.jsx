import React from 'react';
import { FaFolderOpen } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom'; 


export default function Project() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      <FaFolderOpen className="text-6xl text-indigo-400 mb-4" />
      <h2 className="text-2xl font-semibold mb-2">No Projects Yet</h2>
      <p className="text-gray-600 mb-6">Start by creating your first project!</p>

      <Link to="/create-blog">
      <button className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-700 transition flex items-center gap-2">
        <FiPlus className="text-lg" />
        Create New Project
      </button>
      </Link>
    </div>
  );
}
