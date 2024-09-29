import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import IndianResturant from "./IndianResturant";
import Footer from "./HomeComponent/Footer";
import Resturant from "./IndianResturant/Resturant";
import { useSelector } from "react-redux";
import ScrollToTop from "./IndianResturant/ScrollToTop";

function App() {
  const { indiaSidebar, openfilter } = useSelector((state) => state.toggle);
  const sate = useSelector((state) => state.toggle);
  

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/india" element={<IndianResturant />} />
        <Route path={`/:city/dinning`} element={<Resturant />} />
        <Route path={`/:city/delivery`} element={<Resturant />} />
      </Routes>
      {!indiaSidebar || (!openfilter && <Footer />)}
    </>
  );
}

export default App;
