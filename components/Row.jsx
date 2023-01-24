/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Row = ({ rowID, title, fetchURL }) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
      axios.get(fetchURL).then(res => {
      setMovies(res.data.results)
    })
    }, [fetchURL])

    const slideLeft = () => {
      const slider = document.querySelector(`#slider${rowID}`)
      slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
      const slider = document.querySelector(`#slider${rowID}`)
      slider.scrollLeft = slider.scrollLeft + 500
    }

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={slideLeft} size={40} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0'/>
        <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth group-hover:block right-0'>
          {
            movies
              .filter(movie => {
                if (!movie?.backdrop_path) {
                  return false
                }
                return true;
              })
              .map((movie, index) => <Movie key={index} rowID={index} movie={movie}/>)
          }
        </div>
        <MdChevronRight onClick={slideRight} size={40} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0'/>
      </div>
    </>
  )
}

export default Row