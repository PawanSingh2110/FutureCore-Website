import React from 'react'
import { IoCalendarNumberOutline } from "react-icons/io5";
import { TiPen } from "react-icons/ti";

const Latest = () => {
  return (
    <div className='mt-10' id='blog'>
        <h1 className='text-2xl text-gray-400 text-center font-medium' >Latest News</h1>
        <h1 className='text-center text-3xl lg:text-5xl font-medium text-orange-400 mt-4'>Our latest articles & resources</h1>

        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 xl:w-[80%] mx-auto mt-10 sm:p-3 lg:p-5 xl:p-0 mb-10 sm:ml-3 xl:ml-32'>
            <div className=' p-3 bg-slate-50 rounded-2xl shadow-2xl'>
                <div className='min-h-40 w-full overflow-hidden '>
                    <img src="https://images.unsplash.com/photo-1619852182277-79aa23f82c8e?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={350} alt="" className=' rounded-t-xl '  />
                </div>
                <div className='flex justify-between'  >
                    <h1 className='flex gap-2 items-center hover:text-red-500 text-lg text-gray-500 cursor-pointer' > <TiPen/> Technoloy</h1>
                    <h1 className='flex gap-2 items-center text-gray-500 text-lg hover:text-red-500 cursor-pointer '> <IoCalendarNumberOutline/>21/10/2025</h1>
                </div>
                <h1 className='text-lg font-medium hover:text-red-500 px-3 cursor-pointer'>How is technology working with new things?</h1>
            </div>
            <div className=' p-3 bg-slate-50 rounded-2xl shadow-2xl'>
                <div className='min-h-40 w-full overflow-hidden '>
                    <img src="https://images.unsplash.com/photo-1591088520983-5afbf1efdde2?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={350} alt="" className='w-full rounded-t-xl'  />
                </div>
                <div className='flex justify-between'  >
                    <h1 className='flex gap-2 items-center hover:text-red-500 text-lg text-gray-500 cursor-pointer' > <TiPen/> Technoloy</h1>
                    <h1 className='flex gap-2 items-center text-gray-500 text-lg hover:text-red-500 cursor-pointer '> <IoCalendarNumberOutline/>13/1/2022</h1>
                </div>
                <h1 className='text-lg font-medium hover:text-red-500 px-3 cursor-pointer'>Top 10 important tips on IT services & design</h1>
            </div>
            <div className=' p-3 bg-slate-50 rounded-2xl shadow-2xl'>
                <div className='min-h-40 w-full overflow-hidden '>
                    <img src="https://images.unsplash.com/photo-1610484826917-0f101a7bf7f4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={350} alt="" className='w-full rounded-t-xl'  />
                </div>
                <div className='flex justify-between'  >
                    <h1 className='flex gap-2 items-center hover:text-red-500 text-lg text-gray-500 cursor-pointer' > <TiPen/> Technoloy</h1>
                    <h1 className='flex gap-2 items-center text-gray-500 text-lg hover:text-red-500 cursor-pointer '> <IoCalendarNumberOutline/>24/04/2025</h1>
                </div>
                <h1 className='text-lg font-medium hover:text-red-500 px-3 cursor-pointer'>How our company works in different ways</h1>
            </div>
            
            
        </div>
      
    </div>
  )
}

export default Latest
