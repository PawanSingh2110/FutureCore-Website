import React from "react";
import service1 from "../assets/service.png";
import { FaHeart } from "react-icons/fa6";

const Service2 = () => {
  return (
    <div className="grid grid-cols-1  xl:grid-cols-2 bg-slate-200">
        <div className='2xl:mt-20 mb-16 xl:mb-0 lg:ml-5 p-3  sm:order-last xl:order-first '>
        <h1 className=' text-sm md:text-lg font-medium text-orange-500 mt-3'>Services We Offer</h1>
        <h1 className=' text-3xl  md:text-4xl font-medium text-orange-500'>Best IT & technology <br /> service in your area</h1>
        <div className='mt-8 lg:ml-10'>
            <div className=' service flex items-center gap-2 border-2 border-orange-500 px-4 py-2 bg-white rounded-xl lg:w-[60%] xl:w-[85%] 2xl:w-[60%] lg:ml-7  '>
                <FaHeart className=' heart text-xl text-orange-500 hover:text-red-400'/>
                <p className='text-xl font-medium text-gray-600 hover:text-orange-400'>Design & Developmentt</p>
 
            </div>
            <div className=' service flex items-center gap-2 border-2 border-orange-500 px-4 py-2 bg-white rounded-xl lg:w-[60%] mt-5 lg:ml-20 '>
                <FaHeart className=' heart text-xl text-orange-500 hover:text-red-400'/>
                <p className='text-xl font-medium text-gray-600 hover:text-orange-400'>Website Hosting</p>

            </div>
            <div className=' service flex items-center gap-2 border-2 border-orange-500 px-4 py-2 bg-white rounded-xl lg:w-[60%] xl:w-[85%] 2xl:w-[60%] mt-5 lg:ml-7  '>
                <FaHeart className=' heart text-xl text-orange-500 hover:text-red-400'/>
                <p className='text-xl font-medium text-gray-600 hover:text-orange-400'>Android Apps Development</p>

            </div>
            <div className=' service flex items-center gap-2 border-2 border-orange-500 px-4 py-2 bg-white rounded-xl lg:w-[60%] mt-5 lg:ml-20'>
                <FaHeart className=' heart text-xl text-orange-500 hover:text-red-400'/>
                <p className='text-xl font-medium text-gray-600 hover:text-orange-400'>Cyber Security Services</p>

            </div>
            <div className=' service flex items-center gap-2 border-2 border-orange-500 px-4 py-2 bg-white rounded-xl lg:w-[60%] xl:w-[85%] 2xl:w-[60%] mt-5 lg:ml-7  '>
                <FaHeart className=' heart text-xl text-orange-500 hover:text-red-400'/>
                <p className='text-xl font-medium text-gray-600 hover:text-orange-400'>Android Apps Development</p>

            </div>
        </div>

      </div>




      <div className="flex justify-center items-center">
        <img src={service1} alt="" className="w-[700px] " />
      </div>
    </div>
  );
};

export default Service2;
