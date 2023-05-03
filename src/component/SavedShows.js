import React, { useState, useEffect} from 'react'
import { UserAuth } from '../context/AuthContext';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import {AiOutlineClose} from 'react-icons/ai';
import { db } from '../firebaseConfig';
import {updateDoc, doc, onSnapshot, } from 'firebase/firestore';

const SavedShows = () => {
    const [movies, setMovies ] = useState([]);
    const {user}= UserAuth();

    const slideLeft = () => {
        var slider = document.getElementById ('slider' );
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById ('slider' );
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (passedID) => {
        try {
            const result = movies.filter((item) => item.id !==passedID)
            await updateDoc(movieRef, {
                savedShows: result,
            });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        onSnapshot (doc(db, 'users', `${user?.email}`), (doc) =>{
             setMovies(doc.data()?.savedShows)
        })
       
    }, [user?.email]);

  return (

    <>
       
       <div className='relative flex items-center group'>
        <MdChevronLeft onClick={slideLeft} size={40} className='absolute z-[10] left-0 bg-white rounded-full opacity-50 hover:opacity-100 hidden group-hover:block' />
        <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
        {movies?.map((item, id) => (
            <div key={id}
            className='text-white w-[160px] sm:w-[200] md:w-[240px] relative inline-block p-2'>
            <img className="w-full h-auto block" src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 flex items-center justify-center whitespace-normal'>
                <p className='text-center indent-4 cursor-pointer'>{item?.title}</p>
                <AiOutlineClose onClick={() =>deleteShow(item.id)} className='absolute top-4 right-4 text-gray-300' />
            </div>
        </div>
        ))}
        </div>
        <MdChevronRight onClick={slideRight} size={40} className='absolute z-[10] right-0 bg-white rounded-full opacity-50 hover:opacity-100 hidden group-hover:block' />
       </div>
    </>
  )
}

export default SavedShows;