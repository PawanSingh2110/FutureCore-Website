import React from 'react'
import Banner from '../assets/banner1.png'

const Hero = () => {
  return (
   <div className='ml-5 lg:ml-0' >
     <div className=' hero  w-[90%] mx-auto sm:h-[600px] md:h-[750px] lg:h-[950px] xl:h-[450px] 2xl:h-[550px] mt-5  rounded-2xl  ' id='Home' >
      <div className='grid xl:grid-cols-2 sm:grid-cols-1 '>
        <div className='flex flex-col lg:p-10 xl:order-first sm:order-last xl:mt-16 2xl:mt-24 '>
          <h1 className='text-white sm:text-4xl sm:text-center md:text-4xl  2xl:text-7xl  xl:text-start'>
          Innovating Tommorow,Today
          </h1>
          <p className='text-white xl:text-[15px] 2xl:text-xl mt-5 sm:text-sm sm:px-5 sm:text-center md:text-[15px] md:px-0 xl:text-start md:w-[70%] mx-auto lg:w-full  '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nunc eu consectetur ultricies, purus urna sodales eros, ac maximus sapien velit eu nunc. Sed non est vel massa molestie ultricies.
          </p>

          <button className='bg-red-500 text-white sm:px-3  lg:px-0  py-2 rounded-lg 2xl:w-[30%]  sm:mt-5 xl:mt-5 lg:mt-4  xl:w-[40%] lg:w-[30%] sm:mx-auto xl:mx-0 hover:bg-purple-500 '>Get Started Now</button>

        </div>
        {/* imggggggg */}
        <div className='xl:order-last sm:order-first flex justify-center items-center'>
          <img src={Banner} alt="" width={600} className='  ' />

        </div>
        

        

      </div>
    </div>
   </div>
  )
}

export default Hero