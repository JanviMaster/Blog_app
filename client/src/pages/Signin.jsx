import { Label, TextInput, Button, Alert, Spinner } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';
// import { signInSuccess,signInFailure,signInStart } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';

export default function Signin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const dispatch= useDispatch();
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage("Please fill out all fields.");
    }
    try {
      setLoading(true);
      setErrorMessage(null);

      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        setLoading(false);
        return setErrorMessage(data.message || "Sign-in failed.");
      }

      setLoading(false);
      navigate('/home');
    } catch (error) {
      setErrorMessage(error.message || "An unexpected error occurred.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-pink-500 rounded-lg text-white">
              Lifestyle
            </span>{' '}
            Blog
          </Link>
          <p className="text-base my-4">Publish your passions your way.</p>
        </div>

         <div className="flex-1 flex-col gap-4 max-w-md mx-auto bg-white shadow-lg p-6 rounded-lg">
          <form onSubmit={handleSubmit}>
            {errorMessage && (
              <Alert color="failure" aria-live="polite">
                {typeof errorMessage === "string"
                  ? `Sorry, ${errorMessage} !!`
                  : "Please fill the details correctly. An unexpected error occurred."}
              </Alert>
            )}
            <div className="mb-4">
              <Label htmlFor="email" value="Your Email" />
              <TextInput
                name="email"
                type="email"
                placeholder="name@company.com"
                id="email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="password" value="Your Password" />
              <TextInput
                name="password"
                type="password"
                placeholder="**********"
                id="password"
                required
                onChange={handleChange}
              />
            </div>
            <div className="mt-4 text-center">

              <Button
                type="submit"
                className="px-1 h-10 w-full bg-gradient-to-r from-purple-400 to-pink-500 text-white"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner size="sm" aria-label="Loading..." />
                    <span className="pl-3">Loading...</span>
                  </>
                ) : (
                  'Sign In'
                )}
              </Button>
              <OAuth/>
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
