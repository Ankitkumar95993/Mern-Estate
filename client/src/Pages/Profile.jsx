import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {

  const {currentUser} = useSelector((state)=>state.user);
  return (
    <div className='max-w-lg mx-auto' >
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>

      <img src={currentUser.avatar} alt='profile' 
      className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'/>

      <input  type="text" placeholder='username' id='username' className='border p-3 rounded-lg'/>
      <input  type="text" placeholder='email' id='email' className='border p-3 rounded-lg'/>
      <input  type="password" placeholder='password' id='password' className='border p-3 rounded-lg'/>
     <button className='rounded-lg text-white bg-slate-700 p-3 uppercase
     hover:opacity-95 disabled:opacity-80'>update</button>
      </form>
      <div className='flex justify-between mt-5 text-red-700 font-semibold '>
        <span className='cursor-pointer'>Delete Account</span>
        <span className='cursor-pointer'>Sign Out</span>
      </div>
    
    </div>
  

  )
}
