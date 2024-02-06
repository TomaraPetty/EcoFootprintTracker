import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <h3 className='my-2'>
        Add information about your habits to build out your profile.
      </h3>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary'></i> Edit Profile
      </Link>
      <Link to='/add-experience' className='btn btn-light'>
        <i className='fas fa-car text-primary'></i> Commuting
      </Link>
      <Link to='/add-education' className='btn btn-light'>
        <i className='fas fa-cart-shopping text-primary'></i> Shopping
      </Link>
      <button className='btn btn-light'>
        <i className='fas fa-burger text-primary'></i> Consumption
      </button>
    </div>
  );
};

export default DashboardActions;
