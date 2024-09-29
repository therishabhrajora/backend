import React from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toggleActions } from "./Store/toggleSlice";

function Signup() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="w-[100%] hidden sm:flex justify-center">
        <div className="fixed top-36">
          <div className=" relative p-10 bg-white rounded-lg shadow-slate-900  shadow-lg">
            <div className="text-2xl font-bold text-center mb-5">Signup</div>
            <div className="bg-red-400 w-full border rounded mb-5">
              <input
                type="text"
                placeholder="Enter username"
                className="w-full px-2 py-3 focus:outline-none"
              />
            </div>
            <div className="bg-red-400 w-full border rounded mb-5">
              <input
                type="text"
                placeholder="Enter pasword"
                className="w-full px-2 py-3 focus:outline-none"
              />
            </div>
            <div className="text-center text-sm">
              <span>Already have an account? </span>
              <span
                onClick={() => {
                    dispatch(toggleActions.closesignup());
                  dispatch(toggleActions.openlogin());
                }}
                className="font-semibold cursor-pointer"
              >
                Login
              </span>
            </div>
            <IoMdClose
              className="absolute top-5 right-5 text-2xl cursor-pointer"
              onClick={() => dispatch(toggleActions.closesignup())}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
