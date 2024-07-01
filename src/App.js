import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import About from './Pages/About';
import Home from './Pages/Home';
import Models from './Pages/Models';
import TestimonialsPage from './Pages/TestimonialsPage';
import Contact from './Pages/Contact';
import Register from './Pages/Register';
import Login from './Pages/Login'; // Corrected import statement
import '../src/dist/styles.css';
import LearnMore from './Pages/LearnMore';
import Profile from './Pages/Profile';
import AddCar from './Pages/AddCar'
import Cardata from './Pages/Cardata';
import History from './Pages/History';
function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/models" element={<Models />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/LearnMore" element={<LearnMore />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/AddCar" element={<AddCar />} />
        <Route path="/Cardata" element={<Cardata />} />
        <Route path="/History" element={<History />} />
        </Routes>
    </>
  );
}

export default App;
