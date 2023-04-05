import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import "./App.css";
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import { Route, Routes } from 'react-router-dom';
import Errorpage from './components/Errorpage';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </>
  )
}

export default App