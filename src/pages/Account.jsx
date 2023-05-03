import React, {useState, useEffect } from 'react'
import requests from '../Requests';
import axios from 'axios';
import SavedShows from '../component/SavedShows';


const Account = () => {
const [ movies, setMovies ] = useState([]);

const movie = movies[Math.floor(Math.random() * movies.length)]
   

useEffect(() => {
  axios.get(requests.requestPopular).then((response) =>{
    setMovies(response.data.results)
  })

}, [])


  return (
    <div>
      <div className='w-full h-[390px] text-white'> 
      <div className='w-full h-full'>
      <div className='absolute w-full h-[390px] bg-gradient-to-r from-black'></div>
      <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
    </div>
    <div className='absolute flex flex-col item-center justify-center space-y-2 top-[40%] md:top-[40%] px-2 md:px-16'>
        <p className='text-2xl md:text-4xl'>My Shows</p>
        <span className='w-20 h-[3px] bg-white'></span>
    </div>
    </div>
    <div>
      <SavedShows />
    </div>
    
    </div>
  )
}

export default Account;