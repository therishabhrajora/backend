import React, { useEffect } from "react";
import Hero from "./HomeComponent/Hero";
import Header from "./HomeComponent/Header";
import MainContainer from "./HomeComponent/MainContainer";
import ReviewContainer from "./HomeComponent/ReviewContainer";
import Application from "./HomeComponent/Application";
import Footer from "./HomeComponent/Footer";
import Sidebar from "./HomeComponent/Sidebar";
import Gettheapp from "./HomeComponent/Gettheapp";
import MoveToTopbtn from "./HomeComponent/MoveToTopbtn";
import { useDispatch, useSelector } from "react-redux";
import { scrollActions } from "./Store/scrollSlice";


function Home() {
  const dispatch = useDispatch();
  const { showgetapp, showTopbtn } = useSelector((state) => state.scroll);
  const { sidebar } = useSelector((state) => state.toggle);

  useEffect(() => {
    const handleScroll = () => {
      const getapp = window.innerHeight;
      const topbtn = window.innerHeight * 0.4;
      const hidegetapp = window.innerHeight * 8;
      const scrollPosition = window.scrollY;

      if (scrollPosition > getapp && scrollPosition < hidegetapp) {
        dispatch(scrollActions.showgetapp());
      } else if (scrollPosition > topbtn) {
        dispatch(scrollActions.showTopbtn());
      } else {
        dispatch(scrollActions.hideTopbtn());
        dispatch(scrollActions.hidegetapp());
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);

  const scrollToTop = () => {
    console.log("clicked")
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      {!sidebar ? (
        <>
          <Hero />
          <MainContainer />
          <ReviewContainer />
          <Application />
          {showgetapp && <Gettheapp />}
          {showTopbtn && <MoveToTopbtn scrollToTop={scrollToTop}/>}
        </>
      ) : (
        <>
          <Sidebar />
          <Gettheapp />
          {showTopbtn && <MoveToTopbtn scrollToTop={scrollToTop}/>}
        </>
      )}
    </>
  );
}

export default Home;
