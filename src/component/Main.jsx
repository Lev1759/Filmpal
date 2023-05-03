import React, { useState, useEffect } from 'react';
import requests from '../Requests';
import axios from 'axios';

const Main = () => {
  const [ movies, setMovies ] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)]
     

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) =>{
      setMovies(response.data.results)
    })

  }, [])
    console.log(movie)

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice (0, num) + "..."
    } else {
      return str;
    }
  }


  return (

    <div className='w-full h-[550px] text-white'> 
    <div className='w-full h-full'>
      <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
      <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
    </div>
    <div className='absolute item-center justify-start space-y-2 top-[20%] md:top-[30%] px-2 md:px-16'>
        <p className='text-2xl md:text-4xl'>{movie?.title}</p>
        <div className='space-x-4'>
        <button className='border rounded px-5 py-2 text-sm'>Review</button>
        <button className='bg-black text-white rounded px-5 py-2 text-sm'>See Reviews</button> 
        </div>
        <p className='text-sm md:text-md text-gray-400'>Released: {movie?.release_date}</p>
        <p className='text-md md:text-xl'>{truncateString(movie?.overview, 250)}</p>

    </div>
    </div>
   
  )
}

export default Main;
