import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {UserAuth} from '../../context/AuthContext'
const Login = () => {

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('') 
    const {user, logIn} = UserAuth()
    // When the user have suceffuly signed in the account
    const navigate = useNavigate()

    // if the user enters some wrong info
    const [error , setError] = useState('')


    const handleSubmit =async (e) =>{
        e.preventDefault()
        try{
            await logIn(email,password)
            navigate('/')
        }
        catch(error)
        {
            console.log(error)
        }
    }
    



  return (
    <div className='w-full h-screen'>
        {/* Netflix bg image */}
        <img className='hidden sm:block absolute w-full h-full object-cover' 
        src='https://assets.nflxext.com/ffe/siteui/vlv3/ac9aedf1-a687-4c5d-965c-2fc3eac84aea/ed2f162a-b9ef-43fd-8042-84978039a3ba/IN-en-20221206-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='/'></img>
        {/* for creating an overlay over the image */}
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            {/* Signup Form */}

            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                {/* Inner box */}
                <div className='max-w-[320px] mx-auto py-16'>
                    {/* Heding of the form */}
                    <h1 className='text-3xl font-bold'>Sign In</h1>
                    {error ? <p className='p-3 bg-red-400 my-2'>{error}</p>: null}
                    <form
                    onSubmit={handleSubmit}
                    className='w-full flex flex-col py-4'>
                        <input 
                        onChange={(e) => setEmail(e.target.value)}
                        className='p-3 my-2 bg-gray-700 rounded'
                        type="email"  
                        placeholder='Email' 
                        />
                        <input 
                        onChange={(e) => setPassword(e.target.value)}
                        className='p-3 my-2 bg-gray-700 rounded'
                        type="password" 
                        placeholder='Password' 
                        />
                        <button className='py-3 my-7  bg-red-600 rounded font-bold'>Sign In</button>

                        {/* Other Detials box */}
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                            <p>
                              <input 
                              className='mr-2'
                              type="checkbox" />Remeber me  
                            </p>
                            <p>Need Help?</p>
                        </div>
                        <div>
                            <p 
                            className='py-8'>
                                <span className='text-gray-600'>
                                    New to Netflix?</span>{' '}
                                    <Link to='/signup'>Sign Up</Link>
                                    </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login