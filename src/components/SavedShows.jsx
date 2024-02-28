/* eslint-disable no-undef */
import React from 'react'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import Movie from "../components/Movie"

const SavedShows = () => {
    return (
        <>
            <h2
                className='text-white font-bold md:text-xl p-4'>
                My Shows</h2>
            <div
                className='relative flex items-center group'>
                <MdChevronLeft
                    // eslint-disable-next-line no-undef
                    onClick={slideLeft}
                    // Styling
                    className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />

                <div id={'slider'}
                    // Styling
                    className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>

                    {movies?.map((item, id) => (
                        <Movie key={id} item={item} />

                    ))}

                </div>
                <MdChevronRight
                    onClick={slideRight}
                    // Styling
                    className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
            </div>
        </>
    )
}

export default SavedShows