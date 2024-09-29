import React from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "../Store/toggleSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const { restro, partner, company } = useSelector((state) => state.toggle);
  return (
    <>
      <div className="animate-swing-in-top-fwd">
        <div className="flex gap-5 list-none flex-col z-20 mt-10 p-5">
          <div
            className={`flex flex-col gap-3 ${
              restro && "border rounded-xl pb-3"
            }`}
          >
            <div
              onClick={() => dispatch(toggleActions.toggleRestro())}
              className="flex flex-col gap-3 font-bold hover:animate-shadow-drop-center hover:rounded-xl "
            >
              <div className="rounded-xl py-2 px-4 cursor-pointer">
                <div className="flex items-center justify-between">
                  <p className="w-[75%]">Restro</p>

                  {!restro ? (
                    <MdOutlineKeyboardArrowDown className="text-2xl" />
                  ) : (
                    <MdOutlineKeyboardArrowUp className="text-2xl" />
                  )}
                </div>
              </div>
            </div>

            {restro && (
              <div className="px-4 flex flex-col gap-6 animate-swing-in-top-fwd">
                <li className="cursor-pointer">Rides</li>
                <li className="cursor-pointer">Food delivery</li>
                <li className="cursor-pointer">Groceryt delivery</li>
                <li className="cursor-pointer">Scooters</li>
                <li className="cursor-pointer">Car-sharing</li>
                <li className="cursor-pointer">Business</li>
                <li className="cursor-pointer">Airports</li>
                <li className="cursor-pointer">Cities</li>
              </div>
            )}
          </div>

          <div
            className={`flex flex-col gap-3  ${
              partner && "border rounded-xl pb-3"
            } `}
          >
            <div
              onClick={() => dispatch(toggleActions.togglepartner())}
              className="flex flex-col gap-3 font-bold hover:animate-shadow-drop-center hover:rounded-xl "
            >
              <div className="rounded-xl py-2 px-4 cursor-pointer">
                <div className="flex items-center justify-between">
                  <p className="w-[75%]">Partner with Restro</p>
                  {!partner ? (
                    <MdOutlineKeyboardArrowDown className="text-2xl" />
                  ) : (
                    <MdOutlineKeyboardArrowUp className="text-2xl" />
                  )}
                </div>
              </div>
            </div>

            {partner && (
              <div className="px-4 flex flex-col gap-6 animate-swing-in-top-fwd">
                <li className="cursor-pointer">Sign up as a driver</li>
                <li className="cursor-pointer">Sign up as a courir</li>
                <li className="cursor-pointer">fleets</li>
                <li className="cursor-pointer">franchise</li>
              </div>
            )}
          </div>

          <div
            className={`flex flex-col gap-3  ${
              company && "border rounded-xl pb-3"
            }`}
          >
            <div
              onClick={() => dispatch(toggleActions.togglecompany())}
              className="flex flex-col gap-3 font-bold hover:animate-shadow-drop-center hover:rounded-xl "
            >
              <div className="rounded-xl py-2 px-4 cursor-pointer">
                <div className="flex items-center justify-between">
                  <p className="w-[75%]">Company</p>
                  {!company ? (
                    <MdOutlineKeyboardArrowDown className="text-2xl" />
                  ) : (
                    <MdOutlineKeyboardArrowUp className="text-2xl" />
                  )}
                </div>
              </div>
            </div>
            {company && (
              <div className="px-4 flex flex-col gap-6 animate-swing-in-top-fwd">
                <li className="cursor-pointer">About us</li>
                <li className="cursor-pointer">Careeers</li>
                <li className="cursor-pointer">Sustainqability at Restro</li>
                <li className="cursor-pointer">Press</li>
                <li className="cursor-pointer">Blog</li>
                <li className="cursor-pointer">Brand guidelines</li>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-7 mb-20 px-5 md:justify-center">
          <div className="flex flex-col gap-3 items-center">
            <div className="text-gray-500">Get a ride in minutes!</div>
            <div className="text-center ">
              <div className="w-fit bg-green-400 font-bold rounded-full hover:animate-shadow-drop-center  py-2 px-5 cursor-pointer text-white">
                Download Restro App
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <div className="text-gray-500">Find your favourite food!</div>
            <div className="text-center ">
              <div className="w-fit bg-green-400 font-bold rounded-full hover:animate-shadow-drop-center  py-2 px-5 cursor-pointer text-white">
                Download Restro Food app
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
