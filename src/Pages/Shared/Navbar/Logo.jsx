import React from 'react';
// import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className='h-16 w-16'>
      <Link to={'/'}>
      <img src={""} alt="Logo" />
      </Link>
    </div>
  );
}


export default Logo;