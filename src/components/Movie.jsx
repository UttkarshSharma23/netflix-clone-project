import React from 'react'
import {FaHeart,FaRegHeart} from 'react-icons/fa';
import { useState } from 'react';
import {UserAuth} from '../context/AuthContext'
import {db} from '../firebase'
import {arrayUnion , doc , updateDoc} from 'firebase/firestore'
// eslint-disable-next-line no-unused-vars
import { async } from '@firebase/util';

const Movie = ({item}) => {
     // used to add the like button
     const [like,setLike] = useState(false)

// Function froo saving the data saved by the user
// eslint-disable-next-line no-unused-vars
const [saved , setsaved] = useState(false)     

const {user} = UserAuth()


// Creating a MovieId function
// refrencing to the user and than grabbing and storing it inside the backticks
const movieID = doc(db ,'users', `${user?.email}`)

// save show function
// only running this function if the user have logged in else we r not running this function 
const saveShow = async () => {
    if(user?.email){
        setLike(!like)
        setsaved(true)
        // This is how we store in firebase
        await updateDoc(movieID, {
            savedShows:arrayUnion({
                id: item.id,
                title: item.title,
                img: item.backdrop_path
            })
        })
    }
    else{
        alert('Please Login to save the movie.')
    }
}

  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
    <img className='w-full h-auto block' 
    src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />

{/* Movie images setting up  */}
    <div 
    className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>

{/* content of the movie */}
        <p className='white-space-normal text-xs md:text-sm font-bold justify-center items-center h-full text-center'>{item?.title}
        </p>

{/* like button  */}
        <p onClick={saveShow}>
            {like ? <FaHeart className='absolute top-4 text-gray-300'/> : <FaRegHeart className='absolute top-4 text-gray-300'/>}

        </p>
    </div>

</div>
  )
}

export default Movie