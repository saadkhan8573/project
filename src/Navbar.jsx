import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

  const [show, setShow] = useState(false);
  return (
    <>
      <div className="px-3 md:px-16 flex justify-between items-center w-full h-24 bg-gray-200">
        <div>
          <p>Saad</p>
        </div>

        <div className="hidden md:block">
          <ul className="flex justify-between items-center gap-x-8 ">
            <li className="bg-gray-400 rounded text-white px-4 py-2 cursor-pointer">About</li>
            <li className="bg-gray-400 rounded text-white px-4 py-2 cursor-pointer">Home</li>
            <li className="bg-gray-400 rounded text-white px-4 py-2 cursor-pointer">Services</li>
            <li className="bg-gray-400 rounded text-white px-4 py-2 cursor-pointer">Portfolio</li>
            <li className="bg-gray-400 rounded text-white px-4 py-2 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        <div className="hidden md:block">
          <button className="bg-blue-400 text-white border-2 border-blue-400 px-4 py-2 hover:bg-transparent hover:text-black rounded">Sign in</button>
        </div>

        {/* mobile  */}
        <div className="md:hidden relative top-0 left-0 ">
          <div onClick={() => setShow(!show)}>
            <GiHamburgerMenu />
          </div>
        </div>
        {
          show ?
              <div className=" md:hidden absolute top-24 w-11/12 mx-auto bg-black p-3">
                <ul className="flex  items-center flex-col gap-y-1  w-full">
                  <li className="hover:bg-blue-500 rounded text-white px-4 w-full  py-2 cursor-pointer">About</li>
                  <li className="hover:bg-blue-500 rounded text-white px-4 py-2 w-full cursor-pointer">Home</li>
                  <li className="hover:bg-blue-500 rounded text-white px-4 py-2 w-full cursor-pointer">Services</li>
                  <li className="hover:bg-blue-500 rounded text-white px-4 py-2 w-full cursor-pointer">Portfolio</li>
                  <li className="hover:bg-blue-500 rounded text-white px-4 py-2 w-full cursor-pointer">Contact Us</li>
                </ul>
              </div>
            :
            null
        }
      </div>
      {/* Mobile */}



      sdjkbvkjsd
    </>
  )
}

export default Navbar
