import React, { Fragment, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-forms/CreateProfile';
import AddExperience from './components/profile-forms/AddExperience';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
// Styles
import './App.css';
import EditProfile from './components/profile-forms/EditProfile';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            <Route path='/' element={<Landing />} />
          </Routes>
          <section className='container'>
            <Alert />
            <Routes>
              <Route path='register' element={<Register />} />
              <Route path='login' element={<Login />} />
              <Route path='profiles' element={<Profiles />} />
              <Route path='profile/:id' element={<Profile />} />
              <Route
                path='dashboard'
                element={<PrivateRoute component={Dashboard} />}
              />
              <Route
                path='create-profile'
                element={<PrivateRoute component={CreateProfile} />}
              />
              <Route
                path='edit-profile'
                element={<PrivateRoute component={EditProfile} />}
              />
              <Route
                path='add-experience'
                element={<PrivateRoute component={AddExperience} />}
              />
              <Route
                path='add-education'
                element={<PrivateRoute component={AddEducation} />}
              />
            </Routes>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
