import React from 'react'
import banner from '../../assets/img/banner.png'
const Hero = () => {
  return (
    <div className='max-w-[100%] text-white  mx-auto p-4'> 

   <div className='relative'>

    <div className='absolute w-full h-full bg-black/50 flex flex-col justify-center font-bold uppercase'>
      <h1 className='px-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl'> <span className='text-black '>Private</span> Cinema</h1>
      <h1  className='px-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>a quite place to  </h1>
      <h1 className=' px-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl'> enjoy <span className='text-yellow-300 '>movies </span></h1>
     <div className='p-5'> <button className='bg-yellow-400 p-2.5 rounded-md text-black bottom-30 left-8 hover:scale-110 duration-300 animate-bounce hover:animate-none'>BOOK NOW!!!</button></div>
    
    </div>
    

    <img src={banner} alt="banner" className='  w-[100%] sm:h-[70vh] h-[50vh] object-cover ' />
   </div>
    </div>
  )
}

export default Hero 