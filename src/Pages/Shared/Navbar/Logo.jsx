import React from 'react';
// import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className='h-20 w-20 flex justify-center items-center text-center'>
      <Link to={'/'}>
      <img src={"/creativity.png"} alt="Logo" className='h-10 w-10 md:h-20 md:w-20'/>
      </Link>
    </div>
  );
}


export default Logo;