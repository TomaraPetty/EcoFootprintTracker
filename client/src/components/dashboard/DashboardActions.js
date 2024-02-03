import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary'></i> Edit Profile
      </Link>
      <Link to='/add-experience' className='btn btn-light'>
        <i className='fas fa-tree text-primary'></i> Add Behavior
      </Link>
      <Link to='/add-education' className='btn btn-light'>
        <i className='fas fa-cart-shopping text-primary'></i> Add Shopping
      </Link>
      <button className='btn btn-light'>
        <i className='fas fa-burger text-primary'></i> Add Food Consumption
      </button>
    </div>
  );
};

export default DashboardActions;
