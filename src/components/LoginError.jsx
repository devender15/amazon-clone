import React from 'react';

const LoginError = () => {
  return (
    <div className='mb-4 rounded-md px-10 py-4 w-fit mx-auto border border-red-600 flex items-center justify-center'>
      <div>
        logo
      </div>

      <div className='flex flex-col space-y-1 text-[17px]'>
          <p className='text-red-700 font-normal'>There was a problem</p>
          <p className='text-[#111] text-[13px]'>Invalid email address or password.</p>
      </div>

    </div>
  )
}

export default LoginError;
