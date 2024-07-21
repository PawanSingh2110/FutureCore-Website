import React from 'react'
import Future from '../assets/future.png'
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className=' sm:mt-16 xl:mt-28 xl:w-[90%]  xl:mx-auto grid gap-5 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 sm:mb-10 xl:mb-32 md:p-5 2xl:p-0   '>
        <div className='text-start'>
          <img src={Future} alt="" className='cursor-pointer' />
          <h1 className='text-lg font-medium text-gray-500 px-3 ml-3'>Innovating Today for Better Tommorow</h1>
          <h1 className='flex items-center gap-2 font-medium mt-3 m-3'> <FaLocationDot size={34} className='text-red-500 bg-slate-200 p-2 rounded-full' /> New Delhi, India</h1>

        </div>
        <div className='p-5'>
          <h1 className='text-2xl  font-semibold'>Quick links</h1>
          <div className='flex gap-10 text-lg text-gray-500 mt-3 font-medium'>
            <ul>
              <li className='hover:text-orange-500 cursor-pointer'>IT StartUp</li>
              <li className='hover:text-orange-500 cursor-pointer'>Software</li>
              <li className='hover:text-orange-500 cursor-pointer'>Business</li>
              <li className='hover:text-orange-500 cursor-pointer'>App</li>
              <li className='hover:text-orange-500 cursor-pointer'>Insurance</li>
            </ul>
            <ul>
              <li className='hover:text-orange-500 cursor-pointer'>Property</li>
              <li className='hover:text-orange-500 cursor-pointer'>Big Data</li>
              <li className='hover:text-orange-500 cursor-pointer'>Distance Learning</li>
              <li className='hover:text-orange-500 cursor-pointer'>ChatBot</li>
              <li className='hover:text-orange-500 cursor-pointer'>Medical</li>
            </ul>
          </div>

        </div>
        <div className='p-3 '>
          <h1 className='text-2xl font-semibold'>Contact with us</h1>
        <div className='flex gap-4 justify-center items-center bg-slate-200 h-20  w-96 mt-5 rounded-xl  text-lg'>
          <IoIosMail size={35}className='text-red-500 bg-white p-1 rounded-full hover:text-white hover:bg-orange-500 cursor-pointer'/>

          <h1 className='text-gray-500 font-medium text-lg underline hover:text-orange-500 cursor-pointer sm:mr-5' > help@futurecoreinnovations.tech</h1>
          
          
            
        </div>
        
        </div>
    </div>
  )
}

export default Footer