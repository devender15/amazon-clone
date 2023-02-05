import React from 'react';

import Error from "../assets/error.png";

const LoginError = ({ message }) => {
  return (
    <div className='mb-4 rounded-md px-10 py-4 w-[23%] mx-auto border border-red-600 flex space-x-4 items-center justify-center'>
      <div>
        <img src={Error} alt="error" className='object-cover'/>
      </div>

      <div className='flex flex-col space-y-1 text-[17px]'>
          <p className='text-red-800 font-normal'>There was a problem</p>
          <p className='text-[#111] text-[13px]'>{message}</p>
      </div>

    </div>
  )
}

export default LoginError;
