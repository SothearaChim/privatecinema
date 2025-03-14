import React from 'react'
import banner from '../../assets/img/banner.png'
const Hero = () => {
  return (
    <div className='max-w-[100%] text-white  mx-auto p-4'> 

   <div className='relative'>

    <div className='absolute w-full h-full bg-black/50 flex flex-col justify-center font-bold uppercase'>
      <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'> <span className='text-black '>Private</span> Cinema</h1>
      <h1  className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>a quite place to  </h1>
      <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'> enjoy <span className='text-yellow-300'>movies </span></h1>
    </div>


    <img src={banner} alt="banner" className=' w-[100%] h-[70vh] object-cover ' />
   </div>
    </div>
  )
}

export default Hero