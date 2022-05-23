import { useEffect } from "react";

import NavBar from "../../Shared/NavBar/NavBar";
import Scroller from "../Scroller/Scroller";

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
      {/* <Slider></Slider> */}
      <Scroller></Scroller>
      {/* Bonus (fifth) Contact Form */}
    </div>
  );
};

export default Home;
