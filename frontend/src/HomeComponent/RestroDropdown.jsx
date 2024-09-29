import React from "react";

function RestroDropdown() {
  return (
    <>
      <div className="flex flex-col w-full fixed z-40  bg-white">
        <div className="flex list-none w-full text-gray-400 flex-col p-7 text-md gap-5">
          <li className="cursor-pointer">Overview</li>
          <li className="cursor-pointer">Become a courier</li>
          <li className="cursor-pointer">Add a restaurant or store</li>
        </div>
        <div className="text-center  flex justify-center my-8">
          <div className="w-[200px] bg-neutral-700 font-bold rounded-full text-white py-2 cursor-pointer">
            Get the Bolt Food app
          </div>
        </div>
      </div>
    </>
  );
}

export default RestroDropdown;
