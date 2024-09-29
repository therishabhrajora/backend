import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineEditNote } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import { toggleActions } from "../Store/toggleSlice";
import FetchResturant from "./fetchResturant";

function DinningSection() {
  const dispatch = useDispatch();
  const [selectedoption, setselectedoption] = useState("");
  const [filterArray, setfilterArray] = useState([]);

  const options = [
    {
      label: (
        <span key="filters" className="flex gap-1 items-center">
          Filters <MdOutlineEditNote />
        </span>
      ),
      link: "/filter",
    },
    {
      label: "Offer",
      link: "/offer",
    },
    {
      label: "Rating 4.0+",
      link: "/rating",
    },
    {
      label: "Pet Friendly",
      link: "/pet-friendly",
    },
    {
      label: "Outdoor Seating",
      link: "/outdoor-seating",
    },
    {
      label: "Open Now",
      link: "/open-now",
    },
  ];

  const location = useLocation();
 

  const { citydata } = useSelector((state) => state.fetching);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const wide = window.outerWidth;
  useEffect(() => {
    if (wide <= 350) {
      setItemsPerPage(1);
    } else if (wide < 640) {
      setItemsPerPage(1);
    } else if (wide < 768) {
      setItemsPerPage(2);
    } else if (wide < 1024) {
      setItemsPerPage(3);
    } else {
      setItemsPerPage(4);
    }
  }, [wide]);

  // Calculate the indices for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = citydata.response.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Handle page change
  const handleNextPage = () => {
    if (currentPage < Math.ceil(citydata.response.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleClick = (option, index) => {
    if (index == 0) {
      dispatch(toggleActions.Onopenfilter());
    } else if (selectedoption == "Offer") {
   
      const newcitydata = citydata.response.filter(
        (city) => city.offer === "offer"
      );
      setfilterArray(newcitydata);
    } else if (selectedoption == "Rating 4.0+") {
      console.log(citydata.response);
      const newcitydata = citydata.response.filter((city) => city.rating > 4.6);
      
      setfilterArray(newcitydata);
    }
  };

  return (
    <>
      <div className="md:px-10 bg-gray-200 py-5">
        <div className="px-10 text-3xl md:text-4xl">Collections</div>
        <div className="px-10 flex items-center justify-between mt-5">
          <div className="hidden md:block">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            {location.state.name} based on trends
          </div>
          <div className="flex gap-3 items-center">
            <div className="text-lg text-red-500">
              All collection in {location.state.name}
            </div>
            <IoMdArrowDropright />
          </div>
        </div>
        <div className="flex justify-between gap-6 py-5 w-[100%]">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2  rounded disabled:opacity-50"
          >
            <IoIosArrowBack />
          </button>
          <div className="flex flex-wrap gap-10 my-2 justify-evenly">
            {currentItems.map((city, index) => (
              <div
                key={index}
                className="rounded-lg w-[200px] md:w-[250px] h-[300px]"
              >
                <div className="relative rounded-lg w-full h-full">
                  <img
                    src={city.img_url}
                    alt="img1"
                    className="rounded-lg w-full h-full bg-cover"
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleNextPage}
            disabled={currentPage === Math.ceil(citydata.length / itemsPerPage)}
            className="px-4 py-2  rounded disabled:opacity-50"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className="px-10 my-5 flex gap-5 flex-wrap">
        {options.map((option, index) => (
          <div
            onClick={() => {
              handleClick(option, index);
              setselectedoption(option.label);
            }}
            key={index}
            className={`${
              selectedoption && "bg-red-400"
            } border py-1 px-2 rounded-lg hover:bg-gray-50 hover:cursor-pointer text-gray-500`}
          >
            {option.label}
          </div>
        ))}
      </div>
      <div className="px-10">
        <img
          src="/630ddfaf9382ef091d441d0311260eb61716296929.jpg"
          alt="hello"
        />
      </div>
      <div className="px-10 py-5">
        <div className="text-3xl">Best Food in Agra</div>
        <div className="flex flex-wrap gap-5 py-5 justify-evenly">
          {selectedoption == "" &&
            citydata.response.map((city, index) => (
              <FetchResturant city={city} index={index} />
            ))}
          {selectedoption == "Offer" &&
            filterArray.map((city, index) => (
              <FetchResturant city={city} index={index} />
            ))}
          {selectedoption == "Rating 4.0+" &&
            filterArray.map((city, index) => (
              <FetchResturant city={city} index={index} />
            ))}
        </div>
      </div>
    </>
  );
}

export default DinningSection;
