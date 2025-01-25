import { Label, TextInput, Button, Alert, Spinner } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../OAuth';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields.");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate('/register');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-pink-500 rounded-lg text-white">
              Lifestyle
            </span>{' '}
            Blog
          </Link>
          <p className="text-b my-4">Publish your passions your way</p>
        </div>

        {/* Right */}
        <div className="flex-1 flex-col gap-4 max-w-md mx-auto bg-white shadow-lg p-6 rounded-lg">
          <form onSubmit={handleSubmit}>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-4">
              <Label htmlFor="username" value="Your Username" />
              <TextInput
                name="username"
                type="text"
                placeholder="Username"
                id="username"
                onChange={handleChange}
                
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="email" value="Your Email" />
              <TextInput
                name="email"
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
                
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="password" value="Your Password" />
              <TextInput
                name="password"
                type="password"
                placeholder="Password"
                id="password"
                onChange={handleChange}
                
              />
            </div>
            <div className="mt-4 text-center">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-400 to-pink-500 text-white"
                disabled={loading}
              >
                {loading ? ( 
                  <><Spinner className='sm'/>
                  <span className='pl-3'>loading...</span></>) 
                  : 'Sign In'}
              </Button>
              <Button
                type="button"
              className="w-full mt-4 bg border-2 border-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-purple-500 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:via-indigo-500 hover:via-purple-500 hover:to-purple-500 transition"
              >
                Sign in with Google
              </Button>

              <div className="flex gap-2 text-sm mt-5">
                <span>Have an account?</span>
                <Link to="/sign-in" className="text-blue-500">
                  Sign In
                </Link>
              </div>
              <br></br>
              {errorMessage && 
              <Alert className="ml-3 " color="failure">
               {typeof errorMessage === "string"
                ? `Sorry, ${errorMessage} !!`
                : "Please fill the details correctly. An unexpected error occurred. "}
              </Alert>
              }
            </div>
            <OAuth/>
          </form>
        </div>
      </div>
    </div>
  );
}
