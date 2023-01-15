import React from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Link, animateScroll as scroll} from 'react-scroll'

const Navbar = () => {
   const[nav,setNav]= useState(false);

   const handleClick = () =>{
    return (
      setNav(!nav)
    )
   }
    const handleoff = () => setNav(!nav);


  return (
    <div className="navbar w-screen h-[80px] z-10 bg-zinc-400 fixed drop-shadow-4xl">
      <div className=" px-3 flex justify-between items-center w-full h-full ">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl mr-3 sm:text-4xl">Brand</h1>
          <ul className=" hidden md:flex mx-3">
          <li className="cursor-pointer"><Link  to="home" smooth={true} offset={-100} duration={500} >Home</Link></li>
          <li className="cursor-pointer"><Link  to="about" smooth={true} offset={-200} duration={500} >About</Link></li>
          <li className="cursor-pointer"><Link  to="support" smooth={true} offset={-50} duration={500} >Support</Link></li>
          <li className="cursor-pointer"><Link  to="platform" smooth={true} offset={-50} duration={500} >Platform</Link></li>
          <li className="cursor-pointer"><Link  to="pricing" smooth={true} offset={-50} duration={500} >Price</Link></li>
            
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="button mx-2 border rounded-md px-3 py-1">
            Sign In
          </button>
          <button className="button mx-2 border rounded-md px-3 py-1">
            Sign Up
          </button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav? <MenuIcon className="w-5" />: <XIcon className="w-5"/>}
        </div>
      </div>
      <ul  className= {nav?"bg-zinc-300 w-full px-3 py-3": "hidden"}>
      <li className="border-b-2 border-zinc-400 w-full"><Link onClick={handleoff}  to="home" smooth={true} offset={-100} duration={500} >Home</Link></li>
      <li className="border-b-2 border-zinc-400 w-full"><Link onClick={handleoff}  to="about" smooth={true} offset={-100} duration={500} >About</Link></li>
      <li className="border-b-2 border-zinc-400 w-full"><Link onClick={handleoff}  to="support" smooth={true} offset={-50} duration={500} >Support</Link></li>
      <li className="border-b-2 border-zinc-400 w-full"><Link onClick={handleoff}  to="platform" smooth={true} offset={-50} duration={500} >Platform</Link></li>
      <li className="border-b-2 border-zinc-400 w-full"><Link onClick={handleoff}  to="pricing" smooth={true} offset={-50} duration={500} >Price</Link></li>
        <div className="flex flex-col">
          <button className="border rounded-md py-1">Sign In</button>
          <button className="border rounded-md py-1">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};
export default Navbar;
