import React from 'react'

const Navbar = () => {
  return (
    <div className='flex gap-4 items-center justify-between p-4 z-[100] w-full absolute'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1> 
        <div>
            <button className='text-[#f1f1f1] pr-4'>Sing in</button>
            <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-[#f1f1f1]'>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar