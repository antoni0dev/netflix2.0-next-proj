/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { UserAuth } from '@/context/AuthContext'
import { useRouter }  from 'next/router';


const Signup = () => {
  const [email, setEmail] = useState({})
  const [password, setPassword] = useState({})
  const { user, signUp } = UserAuth() 
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signUp(email, password)
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Navbar />
       <div className='w-full h-full'>
         <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/25d5757f-3598-4eb3-b1a4-0739288f63b8/PL-en-20230116-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
         <div className='absolute bg-black/60 left-0 top-0 w-full h-screen'></div>
         <div className="fixed w-full px-4 py-24 z-50">
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
              <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-bold'>Sign Up</h1>
                <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                  <input onChange={e => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email' />
                  <input onChange={e => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='password' />
                  <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                  <div className='flex items-center justify-between text-md text-gray-500'>
                    <p><input className='mr-2' type="checkbox" />Remember me</p>
                    <p>Need help?</p>
                  </div>
                  <p className='py-8'><span className='text-gray-500'>Already subscribed to Netflix?</span>
                    <Link className='ml-2' href='/login'>Sign In</Link>
                  </p>
                </form>
              </div>
            </div>
         </div>
      </div>
    </>
  )
}

export default Signup