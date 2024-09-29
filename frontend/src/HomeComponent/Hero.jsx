import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {toggleActions} from "../Store/toggleSlice"

function Hero() {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const {city}=useSelector((state)=>state.toggle)
  const addressref = useRef();
  const handlenavigation = () => {
    if (addressref.current.value == "") {
      navigate("/india");
      addressref.current.value = "";
    } else {
      const city=addressref.current.value;
      const fetching=async()=>{

      }
    }
  };

  return (
    <>
      <div className="w-[100%]">
        <img
          src="/hero (1).webp"
          alt="hero"
          className="w-full bg-cover brightness-50 lg:hidden hover:animate-kenburns-top"
        />
        <img
          src="/hero.webp"
          alt="hero"
          className=" bg-cover brightness-50 hidden lg:block hover:animate-kenburns-top"
        />
      </div>

      <div className="absolute px-5 bottom-16 lg:bottom-56 flex flex-col gap-7 lg:gap-10">
        <h1 className="text-3xl lg:text-5xl font-bold text-white">
          The Foor you love, Deliever fast
        </h1>
        <div className="w-[70%] flex flex-col lg:flex-row gap-7 items-center">
          <input
            ref={addressref}
            type="text"
            placeholder="Enter your address"
            className="w-full p-2 rounded text-slate-500 focus:outline-none hover:animate-shadow-drop-center "
          />
          <div onClick={handlenavigation} className="text-center flex">
            <div className="w-[200px] bg-green-700 font-bold rounded-full text-white py-2 cursor-pointer hover:animate-shadow-drop-center">
              Search Restaurant
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
