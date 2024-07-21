import React, { useEffect, useState } from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
const Backtotop = () => {
    const [top,setTop]=useState(false)

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY>=300){
                setTop(true)
            }else{
                setTop(false)
            }
        }
        window.addEventListener('scroll',handleScroll)
        return ()=>window.removeEventListener('scroll',handleScroll)
    })
 
    const scrollToTop=()=>{
        window.scrollTo({top:0, behavior:'smooth'})
    }

  return (
    <div>
        {
            top && <div className='fixed bottom-5 right-5 text-4xl' onClick={scrollToTop}><FaArrowUpLong  className='bg-orange-500 p-2 font-semibold cursor-pointer text-white   text-4xl rounded-full hover:bg-purple-600' /></div> 
        }

    </div>
    
  )
}

export default Backtotop