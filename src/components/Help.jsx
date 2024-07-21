import React from 'react'
import { MdVideoSettings } from "react-icons/md";
import { FaFreeCodeCamp } from "react-icons/fa";
import { MdOutlineManageAccounts } from "react-icons/md";
import { GoRepoLocked } from "react-icons/go";

const Help = () => {
  return (
    <div className='w-full xl:w-[90%] mx-auto mt-20' id='feat' >
        <div id='feat' >
            <h1 className='text-gray-500 text-center xl:text-lg' >How can Help You</h1>
            <h1 className='text-3xl text-center font-medium mt-3 text-orange-400 lg:text-4xl xl:6xl'>We’re helping teams do <br /> their best work</h1>

        </div>
        <div className='mt-5 grid grid-cols-4 gap-5 sm:grid-cols-1  sm:mt-5 sm:text-center lg:grid-cols-2  xl:grid-cols-4 lg:text-start  xl:ml-10 sm:p-3'>

            <div className='p-10 xl:p-0 sm:border-2 sm:border-orange-500 rounded-xl xl:border-none  '>
                <MdVideoSettings className='text-6xl sm:ml-[100px] md:ml-[120px] lg:ml-0  text-orange-400' />
                <h1 className='text-lg mt-3 text-blue-700 font-medium '>Zero Configuration</h1>
                <p className='text-lg xl:w-[80%]'>Zero Configuration, Maximum Security - Effortless Integration and Protection for Your Digital Solutions.</p>
                <button className='text-red-500 font-medium text-lg'> Learn more > </button>
            </div>
            <div className='p-10 xl:p-0 sm:border-2 sm:border-orange-500 rounded-xl xl:border-none   '>
                <FaFreeCodeCamp className='text-6xl sm:ml-[100px] md:ml-[120px] lg:ml-0  text-orange-400' />
                <h1 className='text-lg mt-3 text-blue-700 font-medium '>Code Security</h1>
                <p className='text-lg xl:w-[80%]'>Robust Code Security - Protecting Your Applications from Vulnerabilities with Expert Precision and Care</p>
                <button className='text-red-500 font-medium text-lg'> Learn more > </button>
            </div>
            <div className='p-10 xl:p-0 sm:border-2 sm:border-orange-500 rounded-xl xl:border-none '>
                <MdOutlineManageAccounts className='text-6xl sm:ml-[100px] md:ml-[120px] lg:ml-0  text-orange-400' />
                <h1 className='text-lg mt-3 text-blue-700 font-medium '>Team Management</h1>
                <p className='text-lg xl:w-[80%]'>Effective Team Management - Streamlining Collaboration and Productivity for Optimal Project Success </p>
                <button className='text-red-500 font-medium text-lg'> Learn more > </button>
            </div>
            <div className='p-10 xl:p-0 sm:border-2 sm:border-orange-500 rounded-xl xl:border-none '>
                <GoRepoLocked className='text-6xl sm:ml-[100px] md:ml-[120px] lg:ml-0  text-orange-400' />
                <h1 className='text-lg mt-3 text-blue-700 font-medium '>Access Controlled</h1>
                <p className='text-lg xl:w-[80%] '>Access Controlled - Ensuring Secure, Authorized Entry to Your Systems with Robust Protection Measures..</p>
                <button className='text-red-500 font-medium text-lg'> Learn more > </button>
            </div>
        </div>
    </div>
  )
}

export default Help