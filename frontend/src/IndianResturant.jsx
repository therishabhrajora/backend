import React from "react";
import Banner from "./IndianResturant/Banner";
import Cities from "./IndianResturant/Cities";
import { Route, Routes } from "react-router-dom";
import Resturant from "./IndianResturant/Resturant";
import { useSelector } from "react-redux";
import IndiaSidebar from "./IndianResturant/IndiaSidebar";

function IndianResturant() {
  const { indiaSidebar } = useSelector((state) => state.toggle);

  return (
    <>
      {!indiaSidebar ? (
        <>
          <Banner />
          <Cities />
        </>
      ) : (
        <IndiaSidebar/>
      )}
    </>
  );
}

export default IndianResturant;
