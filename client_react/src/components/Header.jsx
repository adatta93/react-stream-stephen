import React from 'react';
import { Link } from 'react-router-dom';
import GoogleOAuth from './GoogleOAuth';

const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
      <Link to='/' className='item'>StreamY</Link>
      <div className='right menu'>
        <Link to='/streams/list' className='item'>All Streams</Link>
        <Link to='/streams/new' className='item'>Create Streams</Link>
        <Link to='/streams/edit' className='item'>Edit Streams</Link>
        <Link to='/streams/delete' className='item'>Delete Streams</Link>
        <GoogleOAuth />
      </div>
    </div>
  )
}

export default Header;