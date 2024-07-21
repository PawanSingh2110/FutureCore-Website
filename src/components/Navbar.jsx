import React, { useState } from "react";
// import Logo from "../assets/logo.svg";
import Future from "../assets/future.png";
import { CiMenuFries } from "react-icons/ci";
import { MdCancel } from "react-icons/md";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div
      className=" fixed w-full top-0    flex  items-center justify-between    bg-orange-400 sm:px-2 xl:px-5 py-1 
    
    "
    >
      <div>
        <img
          src={Future}
          alt="altt"
          className="text-balck cursor-pointer w-40 lg:w-64"
        />
      </div>
      <div className="hidden xl:block">
        <ul className="flex gap-2 text-white  text-xl ">
          <li className=" px-4 py-2 hover:bg-black/30 rounded-3xl text-white cursor-pointer">
            {" "}
            <a href="#Home">Home</a>{" "}
          </li>
          <li className=" px-4 py-2 hover:bg-black/30 rounded-3xl text-white cursor-pointer">
            <a href="#feat">Feature</a>
          </li>
          <li className=" px-4 py-2 hover:bg-black/30 rounded-3xl text-white cursor-pointer">
            {" "}
            <a href="#service">Services</a>{" "}
          </li>
          <li className=" px-4 py-2 hover:bg-black/30 rounded-3xl text-white cursor-pointer">
            {" "}
            <a href="#blog">Blog</a>{" "}
          </li>
          <li className=" px-4 py-2 hover:bg-black/30 rounded-3xl text-white cursor-pointer">
            <a href="#cont">Contact</a>
          </li>
        </ul>
      </div>
      <div className="hidden xl:block">
        <button className="bg-orange-500 rounded-md hover:bg-purple-500 text-white px-4 py-2 text-lg">
          Get Started
        </button>
      </div>
      <div className="xl:hidden">
        {menu === false ? (
          <CiMenuFries
            onClick={() => setMenu(true)}
            className="text-white font-semibold text-4xl cursor-pointer"
          />
        ) : (
          <div className="flex flex-col justify-end">
            <MdCancel
              onClick={() => setMenu(false)}
              className="text-white font-semibold text-4xl cursor-pointer"
            />

            <div className="">
              <div className="">
                <ul className="flex flex-col border-t-[1px]   items-center gap-4 w-[100%]  bg-orange-400 top-[100%] left-[0] z-10 shadow-md rounded-b-xl absolute   ">
                <li className=" flex items-center justify-center px-4 w-full font-medium py-2 hover:bg-orange-200 rounded-full cursor-pointer">
                {" "}
                    <a href="#Home" className="text-white hover:text-gray-900" onClick={()=>setMenu(false)} >Home</a>{" "}
                  </li>
                  
                  <li className=" flex items-center justify-center px-4 w-full font-medium py-2 hover:bg-orange-200  rounded-full cursor-pointer">
                    <a href="#feat" className="text-white hover:text-gray-900" onClick={()=>setMenu(false)}>Feature</a>
                  </li>
                  <li className=" flex items-center justify-center px-4 w-full font-medium py-2 hover:bg-orange-200  rounded-full cursor-pointer">
                    {" "}
                    <a href="#service" className="text-white hover:text-gray-900" onClick={()=>setMenu(false)}>Services</a>{" "}
                  </li>
                  <li className=" flex items-center justify-center px-4 w-full font-medium py-2 hover:bg-orange-200 mb-  rounded-full cursor-pointer">
                    {" "}
                    <a href="#blog" className="text-white hover:text-gray-900" onClick={()=>setMenu(false)}>Blog</a>{" "}
                  </li>
                  <li className=" flex items-center justify-center px-4 w-full font-medium py-2 hover:bg-orange-200 mb-5  rounded-full cursor-pointer">
                    {" "}
                    <a href="#cont" className="text-white hover:text-gray-900" onClick={()=>setMenu(false)}>Contact</a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
