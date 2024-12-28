import { Label, TextInput, Button } from 'flowbite-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signin() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-blue-400 via-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Lifestyle
            </span>{' '}
            Blog
          </Link>
          <p className="text-b my-4">Publish your passions your way</p>
        </div>

        {/* Right */}
        <div className="flex-1 flex-col gap-4 max-w-md mx-auto bg-white shadow-lg p-6 rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label value="Your Username" />
              <TextInput
                name="username"
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <Label value="Your Email" />
              <TextInput
                name="email"
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <Label value="Your Password" />
              <TextInput
                name="password"
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4 text-center">
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-purple-400 to-pink-500  text-white"
              >
                Sign In
              </Button>
              <Button 
              type="button" 
              className="w-full mt-4 bg border-2 border-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-purple-500 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:via-indigo-500 hover:via-purple-500 hover:to-purple-500 transition"
              >
              Sign in with Google
              </Button>

              <div className="flex gap-2 text-sm mt-5">
                <span>Don't have an account?</span>
                <Link to="/register" className="text-blue-500">
                  Sign Up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
