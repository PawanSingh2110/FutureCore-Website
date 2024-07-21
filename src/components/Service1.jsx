import React from 'react'
import service from "../assets/service1.png"
import { FaHeart } from "react-icons/fa6";

const Service1 = () => {
  return (
    <div className='w-full bg-slate-200 mt-20 grid   xl:grid-cols-2 ' id='service'>
      <div className='flex justify-center items-center'>
        <img src={service} alt="" className='w-[700px] ml-9' />

      </div>
      <div className='2xl:mt-20 mb-16 xl:mb-0 lg:ml-5 p-3  '>
        <h1 className=' text-sm md:text-lg font-medium text-orange-500 mt-3'>Services We Offer</h1>
        <h1 className=' text-3xl  md:text-4xl font-medium text-orange-500'>We are here, to help your  <br /> startup business</h1>
        <div className='mt-8 lg:ml-10'>
            <div className=' service flex items-center gap-2 border-2 border-orange-500 px-4 py-2 bg-white rounded-xl lg:w-[60%] xl:w-[85%] 2xl:w-[60%] lg:ml-7  '>
                <FaHeart className=' heart text-xl text-orange-500 hover:text-red-400'/>
                <p className='text-xl font-medium text-gray-600 hover:text-orange-400'>Cloud & Development</p>

            </div>
            <div className=' service flex items-center gap-2 border-2 border-orange-500 px-4 py-2 bg-white rounded-xl lg:w-[60%] mt-5 lg:ml-20 '>
                <FaHeart className=' heart text-xl text-orange-500 hover:text-red-400'/>
                <p className='text-xl font-medium text-gray-600 hover:text-orange-400 '>Website Hosting</p>

            </div>
            <div className=' service flex items-center gap-2 border-2 border-orange-500 px-4 py-2 bg-white rounded-xl lg:w-[60%] xl:w-[85%] 2xl:w-[60%] mt-5 lg:ml-7  '>
                <FaHeart className=' heart text-xl text-orange-500 hover:text-red-400'/>
                <p className='text-xl font-medium text-gray-600 hover:text-orange-400'>Network Setup & Management</p>

            </div>
            <div className=' service flex items-center gap-2 border-2 border-orange-500 px-4 py-2 bg-white rounded-xl lg:w-[60%] mt-5 lg:ml-20'>
                <FaHeart className=' heart text-xl text-orange-500 hover:text-red-400'/>
                <p className='text-xl font-medium text-gray-600 hover:text-orange-400'>IT Consulting</p>

            </div>
            <div className=' service flex items-center gap-2 border-2 border-orange-500 px-4 py-2 bg-white rounded-xl lg:w-[60%] xl:w-[85%] 2xl:w-[60%] mt-5 lg:ml-7  '>
                <FaHeart className=' heart text-xl text-orange-500 hover:text-red-400'/>
                <p className='text-xl font-medium text-gray-600 hover:text-orange-400'>Data Management and Analytics</p>

            </div>
        </div>

      </div>
    </div>
  )
}

export default Service1
