import Link from 'next/link'
import React from 'react'
import { UserAuth } from '@/context/AuthContext'
import { useRouter }  from 'next/router'

const Navbar = () => {
  const { user, logOut } = UserAuth()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await logOut()
      router.push('/')
    } catch (error) {
      alert(error)
    }
  }


  return (
    <div className='flex gap-4 items-center justify-between p-4 z-[100] w-full absolute'>
      <Link href='/'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link> 
      {user?.email 
        ?  <div>  
            <Link href='/account'>
              <button className='text-[#f1f1f1] pr-4'>Account</button>
            </Link>
            <button onClick={handleLogout} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-[#f1f1f1]'>Log Out</button>
          </div>
        :  <div>
            <Link href='/login'>
              <button className='text-[#f1f1f1] pr-4'>Sing in</button>
            </Link>
            <Link href='/signup'><button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-[#f1f1f1]'>Sign up</button></Link>
          </div>
      }
    </div>
  )
}

export default Navbar