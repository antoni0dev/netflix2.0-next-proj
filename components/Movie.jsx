/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const Movie = ({ key, movie }) => {
    const [like, setLike] = useState(false)

  return (
    <div key={key} className='w-[160px] sm:w-[200px] lg-w-[280px] inline-block cursor-pointer relative p-2'>
        <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie?.title}/>
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 text-white'>
            <p className='white-space-normal text-xs font-bold flex justify-center items-center h-full text-center'>{movie?.title}</p>
            <p>
                {
                    like ? <FaHeart className='absolute top-4 left-4 text-gray-300'/> : <FaRegHeart className='absolute top-4 left-4' />
                }
            </p>
        </div>
    </div>
  )
}

export default Movie