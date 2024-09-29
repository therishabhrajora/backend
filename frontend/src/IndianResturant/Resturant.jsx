import React, { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { GiScooter } from "react-icons/gi";
import { toggleActions } from "../Store/toggleSlice";
import DinningSection from "./DinningSection";
import DeliverySection from "./DeliverySection";
import {
  json,
  Link,
  Route,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { fetchActions } from "../Store/fetchSlice";
import FilterSection from "./FilterSection";

function Resturant(props) {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();
  const { activeDinnig, activeDelivery, openfilter } =
    useSelector((state) => state.toggle);
  useEffect(() => {
    const fetching = async () => {
      const response = await fetch(
        `${window.location.origin}/${location?.state.name}/dinning`
      );
      const resturants = await response.json();
      dispatch(fetchActions.setCityData(resturants));
      // console.log("resturants", resturants);
    };
    fetching();
  }, []);

  return (
    <>
      {!openfilter ? (
        <>
          <div className="flex justify-between px-5 py-2 items-center">
            <div className="text-4xl font-extrabold">Restro</div>
            <div className="md:flex px-3 hidden border mx-5 my-3">
              <div className="flex items-center gap-3">
                <FaLocationDot className="hidden" />
                <span>{location.state.name}</span>
                <MdOutlineArrowDropDown />
              </div>
              <div className="h-full overflow-hidden">
                <input
                  className="h-full p-3 focus:outline-none text-gray-400"
                  type="text"
                  placeholder="Search for restaurants, cuisine, or a dish"
                />
              </div>
            </div>
          </div>
          <div className="flex px-3 md:hidden border mx-5 my-3">
            <div className="flex items-center gap-3">
              <FaLocationDot className="hidden" />
              <span>{location.state.name.toLowerCase()}</span>
              <MdOutlineArrowDropDown />
            </div>
            <div className="h-full overflow-hidden">
              <input
                className="h-full p-3 focus:outline-none text-gray-400"
                type="text"
                placeholder="Search for restaurants, cuisine, or a dish"
              />
            </div>
          </div>
          <div className="px-5 flex items-center my-10 border-2 border-white gap-10 ml-10">
            <div
              onClick={() => {
                dispatch(toggleActions.setActiveDinning());
                dispatch(toggleActions.setInactiveDelivery());
                //navigate(`/${city}/dinning`);
              }}
              className={`flex items-center gap-3 pb-2 cursor-pointer ${
                activeDinnig
                  ? "border-b-2 border-red-300"
                  : "border-white border-b-2"
              }`}
            >
              <MdOutlineFreeBreakfast className="text-4xl p-2 bg-pink-200 rounded-full" />
              <span className="text-lg">Dining Out</span>
            </div>

            <div
              onClick={() => {
                dispatch(toggleActions.setActiveDelivery());
                dispatch(toggleActions.setInactiveDinnig());
                // navigate(`/${city}/delivery`);
              }}
              className={`flex items-center gap-3 pb-2 cursor-pointer ${
                activeDelivery
                  ? "border-b-2 border-red-300"
                  : "border-white border-b-2"
              }`}
            >
              <GiScooter className="text-4xl p-2 bg-green-200 rounded-full" />
              <span className="text-lg">Delivery</span>
            </div>
          </div>

          {activeDinnig ? <DinningSection /> : <DeliverySection />}
          {/* {activeDinnig && <DinningSection />} */}
        </>
      ) : (
        <FilterSection />
      )}
    </>
  );
}

export default Resturant;
