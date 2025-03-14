import React, { useState } from 'react'
import {data} from '../../data/data'

const TopMovies = () => {
   const [movies , setMovies]= useState(data)
   
  return (
    <div className='text-white h-full mt-15  justify-items-center'>
        <div className=' h-24 '><h1 className='bg-yellow-400 rounded-xl w-50 p-3 text-center font-bold text-black'>Popular Movies</h1></div>
        
    {/* display movies */}    

    <div className=' grid grid-cols-2 md:grid-cols-4 gap-6  '>
        {movies.map((item, index)=>(
            <div className=' w-full max-w-[250px]  h-full p-4'>
                <img className=' rounded '  src={item.img} alt={item.name}/>
               <div>
                    <p className=''> {item.name}</p>
                    <p className=''>{item.catagory}</p>
                    <p className=''>{item.time}</p>
                </div>
            </div>
        )
        )}
    </div>
        
        
        
        </div>
  )
}

export default TopMovies