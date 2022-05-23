import "./Scroller.css";
import Section1 from "./Sections/Section1/Section1";
import Section2 from "./Sections/Section2/Section2";
import Section3 from "./Sections/Section3/Section3";
import Section4 from "./Sections/Section4/Section4";
import Section5 from "./Sections/Section5/Section5";
import Sidebar from "./Sidebar/Sidebar";
const Scroller = () => {
  const handleOnWheel = (e) => {
    console.log("hi");
    const scrollContainer = document.getElementById("containerS");
    console.log(scrollContainer);
    // e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
  };
  return (
    <div className="bodyS row">
      <div
        className="containerS col-md-9"
        id="containerS"
        onWheel={handleOnWheel}
      >
        <section className="">
          <Section1></Section1>
        </section>
        <section className="d-flex justify-content-center align-items-center container section2">
          <Section2></Section2>
        </section>
        <section className=" section3">
          <Section3></Section3>
        </section>
        <section className="section2">
          <Section4></Section4>
        </section>
        <section className="">
          <Section5></Section5>
        </section>
      </div>
      <div className="col-md-2">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
};

export default Scroller;
