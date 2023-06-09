import React, { useState, useEffect} from 'react'
import axios from 'axios';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


const Row = ({title, fetchURL, rowID}) => {
    const [ movies, setMovies] = useState([])


    useEffect(() => {
        axios.get(fetchURL).then((response) =>{
            setMovies(response.data.results);
        });
    }, [fetchURL]);
    // console.log(movies);

    const slideLeft = () => {
        var slider = document.getElementById ('slider' + rowID );
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById ('slider' + rowID );
        slider.scrollLeft = slider.scrollLeft + 500;
    };

  return (

    <>
       <h2 className='p-4 text-md md:text-xl font-bold mt-2'>{title}</h2>
       <div className='relative flex items-center group'>
        <MdChevronLeft onClick={slideLeft} size={40} className='absolute z-[10] left-0 bg-white rounded-full opacity-50 hover:opacity-100 hidden group-hover:block' />
        <div id={'slider' + rowID } className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
        {movies?.map((item, id) => (
            <Movie key={id} item={item}/>
        ))}
        </div>
        <MdChevronRight onClick={slideRight} size={40} className='absolute z-[10] right-0 bg-white rounded-full opacity-50 hover:opacity-100 hidden group-hover:block' />
       </div>
    </>
  )
}

export default Row;