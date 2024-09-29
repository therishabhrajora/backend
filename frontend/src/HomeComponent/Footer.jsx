import React from "react";
import { CiGlobe } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="px-5 my-10 flex flex-col gap-7 border-t-2 pt-5">
        <div className="lg:flex-row lg:gap-24 flex flex-col gap-7"> 
          <div className="flex flex-col gap-5">
            <div className="text-green-400 text-3xl font-bold">Restro</div>
            <div className="flex  items-center gap-2 font-bold ">
              <CiGlobe className="text-lg font-bold cursor-pointer" />
              <span>EN</span>
            </div>
          </div>
          <div className="flex gap-10 md:gap-32 list-none flex-wrap">
            <div className="flex flex-col gap-3">
              <div className="font-bold">Restro</div>
              <li className="cursor-pointer">Rides</li>
              <li className="cursor-pointer">Food delivery</li>
              <li className="cursor-pointer">Groceryt delivery</li>
              <li className="cursor-pointer">Scooters</li>
              <li className="cursor-pointer">Car-sharing</li>
              <li className="cursor-pointer">Business</li>
              <li className="cursor-pointer">Airports</li>
              <li className="cursor-pointer">Cities</li>
            </div>

            <div className="flex flex-col gap-3">
              <div className="font-semibold">Partner with Restro</div>
              <li className="cursor-pointer">Sign up as a driver</li>
              <li className="cursor-pointer">Sign up as a courir</li>
              <li className="cursor-pointer">fleets</li>
              <li className="cursor-pointer">franchise</li>
            </div>

            <div className="flex flex-col gap-3">
              <div className="font-semibold">Company</div>
              <li className="cursor-pointer">About us</li>
              <li className="cursor-pointer">Careeers</li>
              <li className="cursor-pointer">Sustainqability at Restro</li>
              <li className="cursor-pointer">Press</li>
              <li className="cursor-pointer">Blog</li>
              <li className="cursor-pointer">Brand guidelines</li>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-7 mt-10 md:justify-center">
          <div className="flex flex-col gap-3">
            <div className="text-gray-500 md:hidden">Request a ride</div>
            <div className="text-center ">
              <div className="w-fit bg-green-400 font-bold rounded-full  py-2 px-3 cursor-pointer hover:animate-shadow-drop-center">
                <p className="md:hidden">Order food online</p>
                <p className="hidden md:block">Get the Restro app</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="text-gray-500 md:hidden">Order a food</div>
            <div className="text-center ">
              <div className="w-fit bg-green-400 font-bold rounded-full  py-2 px-3 cursor-pointer hover:animate-shadow-drop-center">
                <p className="md:hidden">Order food online</p>
                <p className="hidden md:block">Get the Restro food app</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-10 pt-10 my-16 border-t-2 flex flex-col gap-4 md:items-center">
          <div className="flex gap-4 ">
            <FaFacebook className="bg-gray-200 p-1 text-3xl cursor-pointer rounded-full hover:animate-shadow-drop-center" />
            <FaXTwitter className="bg-gray-200 p-1 text-3xl cursor-pointer rounded-full hover:animate-shadow-drop-center" />
            <FaTiktok className="bg-gray-200 p-1 text-3xl cursor-pointer rounded-full hover:animate-shadow-drop-center" />
            <AiFillInstagram className="bg-gray-200 p-1 text-3xl cursor-pointer rounded-full hover:animate-shadow-drop-center" />
            <FaLinkedinIn className="bg-gray-200 p-1 text-3xl cursor-pointer rounded-full hover:animate-shadow-drop-center" />
          </div>
          <div className="text-gray-500">&copy; 2024 Restro Technology OU</div>
          <div className="list-none flex flex-wrap text-gray-500 gap-5">
            <li className="cursor-pointer">Suppliers</li>
            <li className="cursor-pointer">Terms & Conditions</li>
            <li className="cursor-pointer">Privacy</li>
            <li className="cursor-pointer">Cookies</li>
            <li className="cursor-pointer">Security</li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
