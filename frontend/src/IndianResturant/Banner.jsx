import React from "react";
import { VscThreeBars } from "react-icons/vsc";
import { toggleActions } from "../Store/toggleSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "../login";
import Signup from "../Signup";

function Banner() {
  const dispatch = useDispatch();
  const { indiaSidebar, openlogin, opensignup } = useSelector(
    (state) => state.toggle
  );

  return (
    <>
      <div className="relative w-[100%]">
        <div className="w-full">
          <img
            src="/vecteezy_ai-generated-assorted-indian-food-on-dark-wooden-background_36804355.jpg"
            alt="banner"
            className="scale-150 brightness-50"
          />
        </div>

        <VscThreeBars
          onClick={() => dispatch(toggleActions.openIndiaSidebar())}
          className="absolute sm:hidden top-5 left-5 text-xl text-white"
        />
        <div className="absolute hidden top-0 right-0  w-full sm:flex justify-end list-none gap-4 py-4 px-7 text-gray-200">
          <li className="cursor-pointer hover:text-gray-400">Add Restaurant</li>
          <li
            onClick={() => {
              dispatch(toggleActions.closesignup());
              dispatch(toggleActions.openlogin());
            }}
            className="cursor-pointer hover:text-gray-400"
          >
            Log In
          </li>
          <li
            onClick={() => {
              dispatch(toggleActions.closelogin());
              dispatch(toggleActions.opensignup());
            }}
            className="cursor-pointer hover:text-gray-400"
          >
            Sign Up
          </li>
        </div>
        <div className="absolute top-10 h-full content-center w-full text-center text-white ">
          <div className="text-5xl mb-4">Restro</div>
          <div className="text-2xl px-4">
            Find the best Resturant and bar india
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-10 mt-32 px-5">
        <div className="text-4xl text-center">
          Popular locations in <span className="font-semibold">India</span>
        </div>
        <div className="text-3xl text-center">
          From swanky upscale restaurants to the cosiest hidden gems serving the
          most incredible food, Zomato covers it all. Explore menus, and
          millions of restaurant photos and reviews from users just like you, to
          find your next great meal.
        </div>
      </div>
      {openlogin && <Login />}
      {opensignup && <Signup />}
    </>
  );
}

export default Banner;
