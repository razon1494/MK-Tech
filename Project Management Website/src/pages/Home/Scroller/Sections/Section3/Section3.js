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
            <img src="https://i.ibb.co/pJS4G3t/applepng.png" alt="" />
          </div>
        </div>

        <div className="col-md-3 brand">
          <div className="d-flex justify-content-center align-items-center container">
            <img src="https://i.ibb.co/pw6cVSx/Emirates.png" alt="" />
          </div>
        </div>
        <div className="col-md-3 brand">
          <div className="d-flex justify-content-center align-items-center container">
            <img src="https://i.ibb.co/QfYrBpR/bmw.png" alt="" />
          </div>
        </div>
        <div className="col-md-3 brand">
          <div className="d-flex justify-content-center align-items-center container">
            <img src="https://i.ibb.co/DVNLM64/adidas.png" alt="" />
          </div>
        </div>
      </div>
      <button className="clickbrand">Click for more</button>
    </div>
  );
};

export default Section3;
