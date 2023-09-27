import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { HiMenu, HiX } from 'react-icons/hi';
import { useState } from "react";


const Navbar = () => {


  const[open, setOpen] = useState(false);

  return (
    <div className="container mx-auto">
       
       

       
      <nav className="md:flex justify-between py-4 md:py-12 ">
        

        <div className="flex justify-between items-center ">
        <Logo></Logo>
        
        <div className="md:hidden pr-3" onClick={() => setOpen(!open)}>
        {
          open === true ?
           <HiX className="text-3xl "></HiX> : 
           <HiMenu className="text-3xl "></HiMenu>
        }
       
       </div>
        </div>


        <ul className={`md:flex md:gap-8 lg:gap-12 absolute md:static duration-1000 z-10 right-2 top-16 p-3 bg-cyan-200 rounded-md md:bg-transparent text-end 
        ${
          open ? '' : 'hidden'
        }`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "text-[#0B0B0B] text-lg font-normal" : isActive ? "text-[#FF444A] underline font-bold text-lg" : ""
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
              isPending ? "text-[#0B0B0B] text-lg font-normal" : isActive ? "text-[#FF444A] underline font-bold text-lg" : ""
            }
            >
              Donation
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
              isPending ? "text-[#0B0B0B] text-lg font-normal" : isActive ? "text-[#FF444A] underline font-bold text-lg" : ""
            }
            >
              Statistics
            </NavLink>
          </li>

        </ul>

      </nav>
    </div>
  );
};

export default Navbar;
