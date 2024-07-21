import React from 'react'
import mail from '../assets/mail.png'

const Mail = () => {
  return (
    <div className='bg-slate-200 grid grid-cols-1 xl:grid-cols-2 sm:p-4 xl:p-0  ' id='cont'>
        <div className=' lg:ml-10  xl:ml-20 xl:mt-40 sm:mb-16 xl:mb-0'>
            <h1 className='text-gray-500 text-lg font-medium'>Subscribe Our Newsletter</h1>
            <h1 className='text-4xl lg:5xl font-medium text-orange-500 xl:w-[80%]'>The latest resources, sent to your inbox weekly</h1>
            <div className='w-full flex sm:flex-col xl:flex-row gap-4 mt-5'>
            <input type="text" placeholder='Enter Your Email ID' className='lg:w-[60%] border-2 border-orange-500 outline-none text-lg px-4 py-2 caret-orange-500 '  />
            <button className="bg-orange-500 rounded-md hover:bg-purple-500 text-white px-1 lg:px-4 sm:w-[50%] lg:w-[40%] sm:py-2 lg:py-2 text-lg">SuBcribe Now</button>

            </div>

        </div>
        <div className='sm:order-first xl:order-last' >
            <img src={mail} alt="" width={600} className= 'ml-10' />
        </div>
    </div>
  )
}

export default Mail