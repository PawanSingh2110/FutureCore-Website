import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6'

const Copyright = () => {
  return (
    <div className='h-20 bg-orange-500 py-3'>
      <div className=' flex sm:justify-center sm:flex-col items-center lg:w-[80%] lg:mx-auto lg:flex-row lg:justify-between lg:p-5 '>
      <h1 className='text-white font-medium  '>
      © 2023 futurecoreinnovations. All Rights Reserved
      </h1>
      <div className='flex gap-2 sm:justify-center sm:mt-3 lg:mt-0 '>
        <FaInstagram className='text-xl text-white'/>
        <FaFacebook className='text-xl text-white'/>
        <FaTwitter className='text-xl text-white'/>
        <FaLinkedin className='text-xl text-white'/>
      </div>

    </div>
    </div>
  )
}

export default Copyright