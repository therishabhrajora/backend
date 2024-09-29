import React from "react";

function Application() {
  return (
    <>
      <div className="my-20 mx-5 bg-green-800 px-5 pt-10 rounded-2xl lg:flex lg:items-center lg:justify-center lg:px-20">
        <div className="flex flex-col gap-7">
          <div className="text-3xl lg:text-5xl font-bold text-white">
            Your favourite food, delivered fast.
          </div>
          <div className="text-lg lg:text-xl text-white">Available for iOS and Android devices.</div>
          <div className="text-center ">
            <div className="w-fit bg-white lg:text-xl font-bold rounded-full  py-2 px-3 cursor-pointer text-green-900 hover:animate-shadow-drop-center">
              Get the app
            </div>
          </div>
        </div>
        <div>
            <img src="media04 (1).webp" alt="" className="lg:hidden" />
            <img src="media04.webp" alt="" className="lg:block hidden" />
        </div>
      </div>
    </>
  );
}

export default Application;
