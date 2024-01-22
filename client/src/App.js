import React, { Fragment } from 'react';
import Navbar from './layout/Navbar';
import Landing from './layout/Landing';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='/' element={<Landing />} />
        </Routes>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
