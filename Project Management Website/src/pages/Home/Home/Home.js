import { useEffect } from "react";

import NavBar from "../../Shared/NavBar/NavBar";

import Footer from "../Footer/Footer";
import Slider from "../Slider/Slider";

import "./Home.css";

const Home = () => {
  //Title Change
  useEffect(() => {
    document.title = "Project Manager";
  }, []);

  return (
    <div>
      {/* First Part Navbar  */}
      <NavBar></NavBar>
      {/* Second Part Slider */}
      <Slider></Slider>
      {/* Bonus (fifth) Contact Form */}

      <Footer></Footer>
    </div>
  );
};

export default Home;
