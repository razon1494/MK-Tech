import "./Section1.css";
const Section1 = () => {
  return (
    <div className="homesection align-items-center d-flex">
      <div className="">
        <h1 className="wetake">We take solutions to the</h1>
        <div className="wrapper">
          {/* <div className="static-text fs-1">I'm a</div> */}
          <ul className="dynamic-texts">
            <li>
              <span className="">NEXT LEVEL</span>
            </li>
            <li>
              <span className="">NEXT LEVEL</span>
            </li>
            <li>
              <span className="">NEXT LEVEL</span>
            </li>
            <li>
              <span className="">NEXT LEVEL</span>
            </li>
          </ul>
        </div>
        <p className="learnmore">Learn More About Us </p>
      </div>
    </div>
  );
};

export default Section1;
