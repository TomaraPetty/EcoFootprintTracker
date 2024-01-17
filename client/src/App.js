import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Landing from './layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
      <Route path='/' element={<Landing />} />
    </Routes>
  </Router>
);

export default App;
