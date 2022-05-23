import "./Section3.css";
const Section3 = () => {
  return (
    <div className="partners">
      <h1 className="partner-heading">
        We have worked as a team <br /> and made impact together
      </h1>
      <div className="row container">
        <div className="col-md-3 brand">
          <div className="d-flex justify-content-center align-items-center container">
            <img
              src="https://i.ibb.co/jMxh03C/affiliate-marketing.png"
              alt=""
            />
          </div>
        </div>

        <div className="col-md-3 brand">
          <div className="d-flex justify-content-center align-items-center container">
            <img src="https://i.ibb.co/VgyBRDj/ad-network.png" alt="" />
          </div>
        </div>
        <div className="col-md-3 brand">
          <div className="d-flex justify-content-center align-items-center container">
            <img src="https://i.ibb.co/1z8Qd3r/personal-branding.png" alt="" />
          </div>
        </div>
        <div className="col-md-3 brand">
          <div className="d-flex justify-content-center align-items-center container">
            <img src="https://i.ibb.co/183bvCP/chat.png" alt="" />
          </div>
        </div>
      </div>
      <button className="clickbrand">Click for more</button>
    </div>
  );
};

export default Section3;
