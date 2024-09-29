import React from "react";
import { useSelector } from "react-redux";

function Gettheapp() {

  return (
    <>
      <div className={`flex justify-around items-center bg-green-500 py-4 fixed bottom-0 w-[100%]`}>
        <div className="text-2xl font-extrabold text-white">Order now</div>
        <div className="text-center ">
          <div className="w-fit bg-gray-300 font-bold rounded-full hover:animate-shadow-drop-center  py-2 px-3 cursor-pointer">
            Order food online
          </div>
        </div>
      </div>
    </>
  );
}

export default Gettheapp;
