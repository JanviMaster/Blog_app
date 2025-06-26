import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import Projects from './pages/Projects'
import Header from './components/Header'
import Explore from './pages/Explore'
import Footer from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/sign-in" element={<Signin/>}/>
      <Route path="/register" element={<SignUp/>}/>
      <Route path="/projects" element={<Projects/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
