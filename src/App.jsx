import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Header from './components/Header'
<<<<<<< HEAD:client/src/App.jsx
import Explore from './pages/Explore'
=======
>>>>>>> e6623ba3890a6006570a03494d831171e42e794e:src/App.jsx

export default function App() {
  return (

    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/sign-in" element={<Signin/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
    
  )
}
