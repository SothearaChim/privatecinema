import React, {useState} from 'react'

import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
const Navbar = () => {

    const [nav , setNav] = useState(true)
    const handleNav = () =>{
      setNav(!nav)
    }

  return (
    <nav className='flex justify-center h-24 mx-auto items-center max-w-[100%] px-12 text-white pt-5   '>

       <h1 className=' font-bold '>Private <span className='font-bold bg-yellow-300 text-black p-1 rounded-md cursor-pointer'>Cinema</span></h1> 

        <div>
            <ul className='hidden md:flex gap-3 uppercase  ml-3'>
                <li className='p-4 cursor-pointer'>Home</li>
                <li className='p-4 cursor-pointer'>About us</li>
                <li className='p-4 cursor-pointer'>Contacts</li>
                <li className='p-4 cursor-pointer'>booking</li>
            </ul>
        </div>
    {/* overlay */}
    {!nav ? <div className='bg-black/80 fixed w-full h-screen z-5 top-0 left-0 ease-in duration-100 md:hidden '></div> : ''}

        <div onClick={handleNav} className='block md:hidden z-10 top-12 right-12 absolute'>
          {!nav ?  <IoClose size={20} className='text-white  '/> : <RxHamburgerMenu size={20} className='text-white'/ >}
        </div>
    
        <div className={!nav ? 'z-10 fixed md:hidden top-0 left-0 gap-3.5 w-[60%] h-full border-r-gray-600 border-r bg-[#000300] text-white  ease-in-out duration-400  ': 'z-8 fixed top-0  gap-3.5 w-[60%] h-full border-r-gray-600 border-r bg-[#000300] text-white  left-[-100%] ease-in duration-400'}>
        <h1 className=' font-bold mt-12 ml-4 '>Private <span className='font-bold bg-yellow-300 text-black p-1 rounded-md'>Cinema</span></h1> 
        <ul className=' mt-12 uppercase'>
                <li className='p-4 border-b border-b-gray-500 hover:bg-gray-600'>Home</li>
                <li className='p-4 border-b border-b-gray-500 hover:bg-gray-600'>About us</li>
                <li className='p-4 border-b border-b-gray-500 hover:bg-gray-600'>Contacts</li>
                <li className='p-4 border-b border-b-gray-500 hover:bg-gray-600'>booking</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar