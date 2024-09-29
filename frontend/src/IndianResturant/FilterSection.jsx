import React, { useEffect, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "../Store/toggleSlice";
import { useLocation, useNavigate } from "react-router-dom";

function FilterSection() {
  const dispatch = useDispatch();
  const searchCuisineref = useRef();
  

  const tabOptions = [
    { label: "Short by", value: "short" },
    { label: "Cuisines", value: "cuisines" },
    { label: "Rating", value: "rating" },
    { label: "Cost of two", value: "cost" },
    { label: "More filters", value: "filters" },
  ];

  const sortOptions = [
    {
      id: "popularity",
      value: "Popularity",
      label: "Popularity",
    },
    {
      id: "ratingHighToLow",
      value: "ratingHighToLow",
      label: "Rating: High to Low",
    },
    {
      id: "costLowToHigh",
      value: "costLowToHigh",
      label: "Cost: Low to High",
    },
    {
      id: "costHighToLow",
      value: "costHighToLow",
      label: "Cost: High to Low",
    },
    { id: "distance", value: "distance", label: "Distance" },
  ];

  const [selectedTab, setSelectedTab] = useState("short");
  const [rating, setRating] = useState(0);
  const [cost, setCost] = useState(0);
  const [searchCuisine, setSearchCuisine] = useState(0);
  const [newCuisine, setnewCuisine] = useState([]);
  const [sort, setSort] = useState(sortOptions[0].value);

  const { citydata } = useSelector((state) => state.fetching);

  const handlefilter = () => {
    dispatch(toggleActions.closeopenfilter());
  };

 

  useEffect(() => {
    const slider = document.getElementsByClassName("rating");
    const sliderContainer = document.getElementsByClassName("slider-container");
    const step = parseFloat(slider.step);
    const max = parseFloat(slider.max);
    const min = parseFloat(slider.min);
    const numSteps = (max - min) / step;

    // Clear existing markers
    sliderContainer.innerHTML = "";

    // Create markers
    for (let i = 0; i <= numSteps; i++) {
      const marker = document.createElement("div");
      marker.className = "marker";
      marker.style.left = `${(i / numSteps) * 100}%`;
      sliderContainer.appendChild(marker);
    }

    const handleNewCusinearray = () => {
      const newcuisine = citydata.cuisine.filter((cuisine) =>
        cuisine.name.include(searchCuisine)
      );
      setnewCuisine(newcuisine);
    };
  }, [searchCuisineref.current.value]);

  return (
    <>
      <div className="absolute bg-white bottom-0 w-[100%] h-full">
        <div className=" w-[100%] px-2 py-4 flex justify-between items-center">
          <div className="text-2xl font-semibold ">Filters</div>
          <RxCross2
            onClick={() => dispatch(toggleActions.closeopenfilter())}
            className="font-bold text-2xl hover:bg-gray-200"
          />
        </div>
        <div className="w-full flex border-t-2 border-b-2">
          <div className="w-[40%] flex flex-col bg-gray-200 list-none ">
            {tabOptions.map((tab, index) => (
              <li
                key={index}
                onClick={() => setSelectedTab(tab.value)}
                className={
                  selectedTab === tab.value
                    ? "border-l-2 border-red-600 py-6 px-4"
                    : "border-l-2 border-gray-200 py-6 px-4 "
                }
              >
                <div className="pl-2">
                  <span>{tab.label}</span>
                  {index == 0 && (
                    <div className="text-red-600 font-semibold text-sm">
                      {sort}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </div>

          {selectedTab == tabOptions[0].value && (
            <div className="w-[60%] list-none py-2 px-4 flex flex-col gap-5">
              {sortOptions.map((option) => (
                <li key={option.id} className="flex gap-2">
                  <input
                    type="radio"
                    name="sort"
                    id={option.id}
                    value={option.value}
                    checked={sort === option.value}
                    defaultChecked={option.selected}
                    onClick={(e) => setSort(e.target.value)}
                  />
                  <label htmlFor={option.id}>{option.label}</label>
                </li>
              ))}
            </div>
          )}

          {selectedTab == tabOptions[1].value && (
            <div className="p-3">
              <div className="flex  items-center gap-1 border-2 rounded px-1 py-2">
                <IoIosSearch className="text-lg text-gray-500" />
                <input
                  onChange={(e) => {
                    setSearchCuisine(e.target.value);
                    handleNewCusinearray;
                  }}
                  ref={searchCuisineref}
                  type="text"
                  className="w-full h-full focus:outline-none text-gray-400"
                  placeholder="Search here"
                />
              </div>
              {searchCuisineref.current == "" &&
                citydata.cuisine.map((cuisine, index) => (
                  <div key={index} className="border">
                    <div className="flex gap-2">
                      <input
                        type="checkbox"
                        name="cuisine"
                        id={`cuisine-${index}`}
                        value={cuisine.name}
                      />
                      <label htmlFor={`cuisine-${index}`}>{cuisine.name}</label>
                    </div>
                  </div>
                ))}
              {!searchCuisineref.current == "" &&
                newCuisine.map((cuisine, index) => (
                  <div key={index} className="border">
                    <div className="flex gap-2">
                      <input
                        type="checkbox"
                        name="cuisine"
                        id={`cuisine-${index}`}
                        value={cuisine.name}
                      />
                      <label htmlFor={`cuisine-${index}`}>{cuisine.name}</label>
                    </div>
                  </div>
                ))}
            </div>
          )}

          {selectedTab == tabOptions[2].value && (
            <div className="p-4">
              <div className="text-lg font-semibold mb-2">Rating</div>
              <div className="text-gray-700 mb-4">{rating}</div>
              <div
                id=""
                className="relative slider-container w-full h-2 bg-gray-200 rounded"
              >
                <input
                  type="range"
                  name="rating"
                  id="rating"
                  max={5.0}
                  min={0}
                  step={0.5}
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="rating w-full"
                />
              </div>
              <div className="flex justify-between text-lg">
                <span>Any</span>
                <span>0.5</span>
                <span>1.0</span>
                <span>1.5</span>
                <span>2</span>
                <span>2.5</span>
                <span>3</span>
                <span>3.5</span>
                <span>4</span>
                <span>4.5</span>
                <span>5</span>
              </div>
            </div>
          )}

          {selectedTab == tabOptions[3].value && (
            <div className="p-4">
              <div className="text-lg font-semibold mb-2">Cost of Two</div>
              <div className="text-gray-700 mb-4">{cost}</div>
              <div
                id=""
                className="relative slider-container w-full h-2 bg-gray-200 rounded"
              >
                <input
                  type="range"
                  name="costoftwo"
                  id="costoftwo"
                  max={2500}
                  min={0}
                  step={250}
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                  className="rating w-full"
                />
              </div>
              <div className="flex justify-between text-lg">
                <span>0</span>
                <span>250</span>
                <span>500</span>
                <span>750</span>
                <span>1000</span>
                <span>1250</span>
                <span>1500</span>
                <span>1750</span>
                <span>2000</span>
                <span>2250</span>
                <span>2500</span>
              </div>
            </div>
          )}
        </div>
        <div className="w-full flex justify-end gap-4 p-4 items-center">
          <span className="text-gray-500">Clear all</span>
          <span
            onClick={handlefilter}
            className="px-3 py-1 bg-red-400 rounded text-white"
          >
            filter
          </span>
        </div>
      </div>
    </>
  );
}

export default FilterSection;
