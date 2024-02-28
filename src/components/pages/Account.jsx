import React from 'react'

const Account = () => {
  return (
    <>
    <div className='w-full text-white'>
      <img className=' w-full h-[400px] object-cover' 
        src='https://assets.nflxext.com/ffe/siteui/vlv3/ac9aedf1-a687-4c5d-965c-2fc3eac84aea/ed2f162a-b9ef-43fd-8042-84978039a3ba/IN-en-20221206-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='/'>
        </img>
        
        {/* my Shows element */}
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>
          <div className='absolute top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Account