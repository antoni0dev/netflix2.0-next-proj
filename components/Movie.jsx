/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { UserAuth } from '@/context/AuthContext'
import { db } from '@/firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

const Movie = ({ key, movie }) => {
    const [like, setLike] = useState(false)
    const [saved, setSaved] =  useState()
    const { user } = UserAuth()

    const movieID = doc(db, 'users', `${user?.email}`)  
    
    const saveShow = async () => {
        if (user?.email) {
            setLike(!like)
            setSaved(true)
            await updateDoc(movieID, {
                savedShows: arrayUnion({
                    id: movie.id,
                    title: movie.title,
                    img: movie.backdrop_path  
                })
            })
        } else {
            alert('Please log in to save a movie!')
        }
    }

  return (
    <div key={key} className='w-[160px] sm:w-[200px] lg-w-[280px] inline-block cursor-pointer relative p-2'>
        <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie?.title}/>
        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 text-white'>
            <p className='white-space-normal text-xs font-bold flex justify-center items-center h-full text-center'>{movie?.title}</p>
            <p onClick={saveShow}>
                {
                    like ? <FaHeart className='absolute top-4 left-4 text-gray-300'/> : <FaRegHeart className='absolute top-4 left-4' />
                }
            </p>
        </div>
    </div>
  )
}

export default Movie