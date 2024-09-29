// Header.jsx
import React, { useEffect, useState } from "react";
import { CiGlobe } from "react-icons/ci";
import { VscThreeBars } from "react-icons/vsc";
import { FaAngleDown } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import RestroDropdown from "./RestroDropdown.jsx"
import { scrollActions } from "../Store/scrollSlice.js";
import { toggleActions } from "../Store/toggleSlice.js";
import { IoMdClose } from "react-icons/io";

function Header() {
  const dispatch = useDispatch();
  

  const { showheader } = useSelector((state) => state.scroll);

  const { restrodropdown, sidebar } = useSelector((state) => state.toggle);

  useEffect(() => {
    const handleScroll = () => {
      const headerdropdown = window.innerHeight * 0.1;
      const scrollPosition = window.scrollY;

      if (scrollPosition > headerdropdown) {
          dispatch(scrollActions.showheader()); 
      } else {
        dispatch(scrollActions.hideheader());
      }
     
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  return (
    <>
      {!showheader ? (
        <>
          <div className={`fixed top-0 px-3 py-2 w-[100%] flex items-center justify-between z-20 bg-green-400 text-white `}>
            <div className="left w-[30%] font-bold text-2xl cursor-pointer ">
              Restro
            </div>
            <div className="right w-[70%] flex items-center gap-5 justify-end">
              <div className="flex items-center gap-3">
                <CiGlobe className="text-xl cursor-pointer" />
                <span className="text-lg">EN</span>
              </div>
              <div className="hidden md:block hover:animate-shadow-drop-center  cursor-pointer rounded-full">
                <span className={`bg-black text-white py-1 px-4 rounded-full  ${ !sidebar ? "text-black bg-white":"text-white bg-black"}`}>
                  Sign up
                </span>
              </div>
              {sidebar ? (
                <IoMdClose
                  className="text-3xl cursor-pointer bg-gray-300 p-1 rounded-full"
                  onClick={() => dispatch(toggleActions.closesidebar())}
                />
              ) : (
                <VscThreeBars
                  className="text-2xl cursor-pointer"
                  onClick={() => dispatch(toggleActions.opensidebar())}
                />
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="fixed top-0 z-20 w-[100%]">
            <div className="w-full py-4 px-3 flex gap-7 bg-white">
              <div className="left w-[60%] md:w-[20%] flex items-center justify-between">
                <span className="font-semibold text-xl">Bolt Food</span>
                <FaAngleDown
                  className="cursor-pointer md:hidden"
                  onClick={() => dispatch(toggleActions.openRestrodropdown())}
                />
              </div>

              <div className="right w-[40%] md:w-[80%] text-center  flex justify-center lg:justify-end items-center gap-10">
                <div className="md:flex gap-7 hidden list-none">
                  <li className="cursor-pointer">Overview</li>
                  <li className="cursor-pointer">Become a courier</li>
                  <li className="cursor-pointer">Add a restaurant or store</li>
                </div>
                <div className="w-[100px] bg-green-400 font-bold rounded-full text-white py-2 hover:animate-shadow-drop-center cursor-pointer">
                  Get app
                </div>
              </div>
            </div>

            {restrodropdown && <RestroDropdown />}
          </div>
        </>
      )}
    </>
  );
}

export default Header;
