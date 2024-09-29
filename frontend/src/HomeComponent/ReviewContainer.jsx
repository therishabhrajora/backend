import React from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleActions } from "../Store/toggleSlice";

function ReviewContainer() {
  const dispatch = useDispatch();
  const {
    questionOne,
    questiontwo,
    questionthree,
    questionfour,
    questionfive,
  } = useSelector((state) => state.toggle);
  return (
    <>
      <div className="px-5 pb-20 lg:w-[70%] lg:ml-[15%] flex flex-col lg:items-center gap-10">
        <div className="capitalize text-3xl font-bold">
          Frequently Asked Questions
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div
            onClick={() => dispatch(toggleActions.toggleOne())}
            className="border rounded-xl py-2 px-4 md:py-5 cursor-pointer hover:animate-shadow-drop-center"
          >
            <div className="flex items-center justify-between">
              <p className="w-[75%]">
                How can i Find delivery resturants near me
              </p>
              {!questionOne ? (
                <MdOutlineKeyboardArrowDown className="text-2xl" />
              ) : (
                <MdOutlineKeyboardArrowUp className="text-2xl" />
              )}
            </div>
            {questionOne && (
              <div className="text-gray-500 pt-3 animate-swing-in-top-fwd">
                Restro food has a huge selection of restaurants and stores in
                your city. just enter yyour address or turn on "location
                services", and you'll be able to see which resturants deliver
                near you.
              </div>
            )}
          </div>

          <div
            onClick={() => dispatch(toggleActions.toggletwo())}
            className="border rounded-xl py-2 px-4 md:py-5 cursor-pointer hover:animate-shadow-drop-center"
          >
            <div className="flex items-center justify-between">
              <p className="w-[75%]">Does Bot Food offer only food delivery</p>
              {!questiontwo ? (
                <MdOutlineKeyboardArrowDown className="text-2xl" />
              ) : (
                <MdOutlineKeyboardArrowUp className="text-2xl" />
              )}
            </div>
            {questiontwo && (
              <div className="text-gray-500 pt-3 animate-swing-in-top-fwd">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium officia veritatis vitae rem rerum hic culpa quo odit
                natus veniam, incidunt quidem, error nam, sequi molestias
                consequuntur autem maiores. Eum.
              </div>
            )}
          </div>

          <div
            onClick={() => dispatch(toggleActions.togglethree())}
            className="border rounded-xl py-2 px-4 md:py-5 cursor-pointer hover:animate-shadow-drop-center"
          >
            <div className="flex items-center justify-between">
              <p className="w-[75%]">
                Can o order takeaway food with the app ?
              </p>
              {!questionthree ? (
                <MdOutlineKeyboardArrowDown className="text-2xl" />
              ) : (
                <MdOutlineKeyboardArrowUp className="text-2xl" />
              )}
            </div>
            {questionthree && (
              <div className="text-gray-500 pt-3 animate-swing-in-top-fwd">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
                explicabo necessitatibus commodi iure voluptatem quo facere
                asperiores optio laborum eligendi. Voluptatibus fugit maiores
                atque quia incidunt dolorum, deserunt numquam perspiciatis
                recusandae modi, laboriosam, vel ratione.
              </div>
            )}
          </div>

          <div
            onClick={() => dispatch(toggleActions.togglefour())}
            className="border rounded-xl py-2 px-4 md:py-5 cursor-pointer hover:animate-shadow-drop-center"
          >
            <div className="flex items-center justify-between">
              <p className="w-[75%]">
                Does Bolt Food offer recommendations about what food to order ?
              </p>
              {!questionfour ? (
                <MdOutlineKeyboardArrowDown className="text-2xl" />
              ) : (
                <MdOutlineKeyboardArrowUp className="text-2xl" />
              )}
            </div>
            {questionfour && (
              <div className="text-gray-500 pt-3 animate-swing-in-top-fwd">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium omnis voluptatum sunt veritatis eligendi aspernatur
                quaerat?
              </div>
            )}
          </div>

          <div
            onClick={() => dispatch(toggleActions.togglefive())}
            className="border rounded-xl py-2 px-4 md:py-5 cursor-pointer hover:animate-shadow-drop-center"
          >
            <div className="flex items-center justify-between">
              <p className="w-[75%]">
                What kind of resturants are listed on bolt food ?
              </p>
              {!questionfive ? (
                <MdOutlineKeyboardArrowDown className="text-2xl" />
              ) : (
                <MdOutlineKeyboardArrowUp className="text-2xl" />
              )}
            </div>
            {questionfive && (
              <div className="text-gray-500 pt-3 animate-swing-in-top-fwd">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                tempore voluptatum provident reiciendis asperiores mollitia
                cupiditate nihil totam dolorum esse!
              </div>
            )}
          </div>
        </div>
        <div className="text-center justify-center flex">
          <div className="w-fit bg-gray-300 font-bold rounded-full  py-2 px-3 cursor-pointer hover:animate-shadow-drop-center">
            View more
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewContainer;
