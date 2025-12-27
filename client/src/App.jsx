import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Explore from './pages/Explore';
import Footer from './components/Footer';
import CreateBlog from './components/CreateBlog';
import Projects from "./pages/Projects";
import { BlogProvider } from "./contexts/BlogContext";

export default function App() {
  return (
    <BlogProvider>
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/sign-in" element={<Signin/>}/>
      <Route path="/register" element={<SignUp/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/create-blog" element={<CreateBlog/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </BlogProvider>
  )
}
