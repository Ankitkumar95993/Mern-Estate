import React from 'react'
import {Link} from 'react-router-dom'

export default function SignUp() {
  return (
   <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl text-center font-semibold py-7'>Sign Up</h1>
    <form className='flex flex-col gap-4'>
      <input className='border p-3 rounded-lg' id='username' type="text" placeholder='Username'/>
      <input className='border p-3 rounded-lg' id='email' type="text" placeholder='Email'/>
      <input className='border p-3 rounded-lg' id='password' type="password" placeholder='Password'/>
      <button className='border p-3 bg-slate-600 text-white rounded-lg uppercase hover:'>Sign Up</button>
    </form>
    <div className='flex gap-3 pt-3'>Have an account?
      <Link to="/sign-in">
        <span className='text-blue-700 cursor-pointer'>sign in</span>
      </Link></div>
    </div>
  )
}


