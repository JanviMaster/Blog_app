import React, { useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";
import { FaFolderOpen } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Project() {
  const { blogs } = useContext(BlogContext);

  return (
    <div className="px-6 py-10">
      {blogs.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[80vh] text-center">
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
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white p-5 rounded shadow-md">
              {blog.image && (
                <img
                  src={blog.image}
                  alt="Blog"
                  className="w-full h-40 object-cover rounded mb-4"
                />
              )}
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{blog.category}</p>
              <p className="text-gray-700">{blog.content.slice(0, 100)}...</p>
              
            </div>
            
          ))}
          
        </div>
        
      )}
    </div>
  );
}
