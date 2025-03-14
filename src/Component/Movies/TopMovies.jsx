import React, { useState } from 'react'
import {data} from '../../data/data'

const TopMovies = () => {
   const [movies , setMovies]= useState(data)
   const [visable, setVisable]= useState(5)
   
    const showmore =()=>{
        setVisable((prevcount)=> prevcount + 5 )
    }

  return (
    <div className='text-white h-full mt-15  justify-items-center'>
        <div className=' h-24 '><h1 className='bg-yellow-400 rounded-xl w-50 p-3 text-center font-bold text-black'>Popular Movies</h1></div>
        
    {/* display movies */}    

    <div className=' grid grid-cols-2 md:grid-cols-5 gap-5 '>
        {movies.slice(0,visable).map((item, index)=>(
            <div className=' w-full max-w-[250px] hover:scale-110 duration-300  h-full p-3 rounded  '>
                <img className=' rounded  '  src={item.img} alt={item.name}/>
               <div>
                    <p className='text-ellipsis line-clamp-1 text-lg font-semibold '> {item.name}</p>
                    <p className='text-gray-400'>{item.catagory}</p>
                    <p className='text-gray-400'>{item.time}</p>
                </div>
            </div>
        )
        )}
      
    </div>
        
    { visable < movies.length && (  <div onClick={showmore} className='p-3 font-bold bg-yellow-400 text-center mt-5 rounded-4xl text-black '>Show more</div>   )}
        
        </div>
  )
}

export default TopMovies