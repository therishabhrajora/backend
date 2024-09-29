import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchActions } from "../Store/fetchSlice";
import { MdChevronRight } from "react-icons/md";
import { toggleActions } from "../Store/toggleSlice";
import { Link, useNavigate, useParams } from "react-router-dom";

function Cities() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const { cities } = useSelector((state) => state.fetching);
 
  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch(`${window.location.origin}/india`);
      const result = await response.json();
      dispatch(fetchActions.setCities(result));
    };

    fetchCities();
  }, [dispatch]);
  const param=useParams();
  console.log("params",param)

  return (
    <>
      <div className="flex flex-wrap justify-around gap-5 px-5 my-20">
        {cities.map((city, index) => (
          <div
            key={index}
            className="border w-[200px] px-4 py-4 hover:animate-shadowdim-drop-center rounded-xl cursor-pointer"
          >
            <Link to={`/${city.name}/dinning`} state={city}  className="w-full text-xl flex justify-between items-center ">
              {city.name}
              <MdChevronRight />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cities;
