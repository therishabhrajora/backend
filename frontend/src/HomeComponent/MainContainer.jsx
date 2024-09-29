import React from "react";

function MainContainer() {
  return (
    <>
      <div className="px-5 py-20 lg:flex lg:flex-col lg:gap-10 lg:mt-10">
        <div className=" flex flex-col lg:flex-row-reverse gap-10 my-10  w-[100%]">
          <div className="w-full">
            <img src="/media01.webp" alt="" className="rounded-lg w-full" />
          </div>
          <div className="flex flex-col gap-10">
            <div className="text-2xl font-bold">
              Make money with food delivery
            </div>
            <div className="flex gap-3">
              <div className="text-white w-[50px]">
                <div className="bg-green-500 rounded-full text-center text-xs">
                  1
                </div>
              </div>
              <div>
                <p className="font-bold mb-3">Earn extra income,fast!</p>
                <p>
                  There's no subcription fee. You'll recieve your earnigns at
                  the end of each week.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-white w-[50px]">
                <div className="bg-green-500 rounded-full text-center text-xs">
                  2
                </div>
              </div>
              <div>
                <p className="font-bold mb-3">Make money whenever you like</p>
                <p>
                  You decide when and how often you deliver- wqeekdays,
                  evenung,weekends,or just the occassional hour- it's up to you.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-white w-[50px]">
                <div className="bg-green-500 rounded-full text-center text-xs">
                  3
                </div>
              </div>
              <div>
                <p className="font-bold mb-3">Deliver your way</p>
                <p>Bike, scooter or car- you choose how to make deliveries.</p>
              </div>
            </div>
            <div className="text-center ">
              <div className="w-[150px] bg-gray-300 font-bold rounded-full  py-2 cursor-pointer hover:animate-shadow-drop-center">
                Learn more
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col lg:flex-row gap-10 w-[100%]">
          <div className="w-full">
            <img src="/media02.webp" alt="" className="rounded-lg w-full" />
          </div>
          <div className="flex flex-col gap-10">
            <div className="text-2xl font-bold">Boost your sales</div>
            <div className="flex gap-3">
              <div className="text-white w-[50px]">
                <div className="bg-green-500 rounded-full text-center text-xs">
                  1
                </div>
              </div>
              <div>
                <p className="font-bold mb-3">Increase your revanues</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  aut eius debitis, placeat atque nostrum excepturi iure libero
                  cumque voluptas!
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-white w-[50px]">
                <div className="bg-green-500 rounded-full text-center text-xs">
                  2
                </div>
              </div>
              <div>
                <p className="font-bold mb-3">
                  Gain valuable business insights
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus, atque? In dicta labore sequi cumque!
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-white w-[50px]">
                <div className="bg-green-500 rounded-full text-center text-xs">
                  3
                </div>
              </div>
              <div>
                <p className="font-bold mb-3">Let us handle delivery</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Itaque, consequatur!
                </p>
              </div>
            </div>
            <div className="text-center ">
              <div className="w-[150px] bg-gray-300 font-bold rounded-full  py-2 cursor-pointer hover:animate-shadow-drop-center">
                Learn more
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col  lg:flex-row-reverse gap-10 mt-10 w-[100%]">
          <div className="w-full">
            <img src="/media03.webp" alt="" className="rounded-lg w-full" />
          </div>
          <div  className="flex flex-col gap-10">
            <div className="text-2xl font-bold">
              Discover, order and track in the app
            </div>
            <div className="flex gap-3">
              <div className="text-white w-[50px]">
                <div className="bg-green-500 rounded-full text-center text-xs">
                  1
                </div>
              </div>
              <div>
                <p className="font-bold mb-3">Discover local resturants</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  aut eius debitis, placeat atque nostrum excepturi iure libero
                  cumque voluptas!
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-white w-[50px]">
                <div className="bg-green-500 rounded-full text-center text-xs">
                  2
                </div>
              </div>
              <div>
                <p className="font-bold mb-3">Order andplay with ease</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus, atque? In dicta labore sequi cumque!
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-white w-[50px]">
                <div className="bg-green-500 rounded-full text-center text-xs">
                  3
                </div>
              </div>
              <div>
                <p className="font-bold mb-3">Track your order</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Itaque, consequatur!
                </p>
              </div>
            </div>
            <div className="text-center ">
              <div className="w-fit bg-gray-300 font-bold rounded-full  py-2 px-3 cursor-pointer hover:animate-shadow-drop-center">
                Order food online
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContainer;
