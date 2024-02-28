import axios from 'axios';
import React, { useEffect } from 'react';
import Movie from './Movie';
import { useState } from 'react';
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'


// fetching the data to call movie list from requests.js folder.
const Row = ({ title, fetchURL,rowID }) => {
    const [movies, setMovies] = useState([])

   

    // fetching the data from the api and calling it
    useEffect(() => {
        // calling the axios api inside a function seperately
        const fetchData =  () => {
            axios.get(fetchURL).then((response) => {
                setMovies(response.data.results)
            })
        }
        fetchData()
       
    }, [fetchURL])


// Creating the sldidng fucntion for the slider to work.
// For Left side
    const slideLeft = () =>{
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;   
};

// For right side
const slideRight = () =>{
    var slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;   
};

    return (
        <>
            <h2 
            className='text-white font-bold md:text-xl p-4'>
                {title}</h2>
            <div 
            className='relative flex items-center group'>
                <MdChevronLeft 
                onClick={slideLeft}
                // Styling
                className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>

                <div id={'slider'+ rowID } 
                // Styling
                className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>

                    {movies?.map((item, id) => (
                        <Movie key={id} item={item}/>
                       
                    ))}

                </div>
                <MdChevronRight 
                onClick={slideRight}
                // Styling
                className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
            </div>
            
        </>
    )
}

export default Row