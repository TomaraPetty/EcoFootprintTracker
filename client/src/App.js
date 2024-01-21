import React, { Fragment } from 'react';
import Navbar from './layout/Navbar';
import Landing from './layout/Landing';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const App = () => (
  <Fragment>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </Router>
  </Fragment>
);

export default App;
