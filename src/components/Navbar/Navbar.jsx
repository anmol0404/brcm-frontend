import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./LinkBRCM";
import { FiMenu, FiX } from "react-icons/fi";
import CollegeInfo from "./CollegeInfo";
import Logo from "./Logo";
import myImage from "../../assets/brcm_logo_big.png";
import { CiLogin } from "react-icons/ci";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const [open, setOpen] = useState(false);
  return (
    <nav className=" shadow-lg block overflow-hidden">
      <div className="flex justify-between items-center text-center bg-white p-1  font-medium rounded-lg shadow-lg">
        <div className="z-50 p-5 md:w-auto flex justify-between items-start ">
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <FiX size={24} color="black" />
            ) : (
              <FiMenu size={24} color="black" />
            )}
          </div>
        </div>
        <Logo
          src={myImage}
          alt="logo"
          width={60}
          height={60}
          className="w-32 md:w-35 lg:w-40 pb-1 md:pb-0 lg:pb-10 object-contain"
        />
        <CollegeInfo />
        <Logo
          src={myImage}
          alt="logo"
          width={60}
          height={60}
          className="w-32 md:w-35 lg:w-40 pb-1 md:pb-0 lg:pb-10 object-contain"
        />

        {!isLoggedIn ? (
          <div className="hidden lg:flex items-center transition-width ease-in-out ">
            <button className="border border-grey-500 hover:bg-violet-500 hover:text-white font-bold py-1 px-2 rounded align-middle">
              Login
            </button>
          </div>
        ) : (
          <Logo />
        )}
      </div>
      <div className="flex items-center font-medium justify-around ">
        <ul className="md:flex hidden uppercase items-center gap-4 font-[Poppins]">
          <li>
            <Link to="/avc" className="py-2 px-2 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:block hidden">button</div>
        {/* Mobile nav */}
        <ul
          className={` bg-white
        md:hidden  fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">button</div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
