import React from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toggleActions } from "../Store/toggleSlice";

function IndiaSidebar() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex justify-between py-4 px-4 items-center mb-10">
        <IoMdClose
          onClick={() => dispatch(toggleActions.hideIndiaSidebar())}
          className="text-3xl"
        />
        <span className="text-4xl font-extrabold">Restro</span>
      </div>
      <div className="flex flex-col gap-10 text-3xl list-none px-14 text-gray-400 ">
        <li className="cursor-pointer">log in</li>
        <li className="cursor-pointer">sign up</li>
      </div>
    </>
  );
}

export default IndiaSidebar;
