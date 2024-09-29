import React from "react";
import { IoMdStarOutline } from "react-icons/io";

function FetchResturant({ city ,index}) {
  return (
    <>
      <div key={index} className="md:w-[230px] w-[270px] h-[400px]">
        <div className="relative h-[300px] w-full">
          <img
            src={city.img_url}
            alt=""
            className="rounded-xl w-full h-[300px] py-2"
          />
          <div className="absolute bottom-4 bg-blue-400 text-white px-10">
            Flat 10% OFF
          </div>
        </div>
        <div className="px-2">
          <div className="flex items-center justify-between">
            <div className="font-semibold">{city.name}</div>
            <div className="bg-blue-600 text-white rounded-md px-1">
              <span className="flex items-center">
                {city.rating}
                <IoMdStarOutline />
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex overflow-hidden">
              {city.cuisine.map((cuisine, index) => (
                <span key={index} className="flex gap-2">
                  <div>{cuisine},&nbsp;</div>
                </span>
              ))}
            </div>
            <div>{city.price_for_two} for two</div>
          </div>
          <div>{city.location}</div>
          <div className="flex justify-between">
            <span className="text-red-400">Open</span>
            <span className="text-lg text-red-700 bg-yellow-300 px-2">
              {city.offer}
            </span>
            <span className="font-semibold">{city.distance_km} km</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default FetchResturant;
