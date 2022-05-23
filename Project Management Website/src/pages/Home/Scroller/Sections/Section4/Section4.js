import "./Section4.css";
const Section4 = () => {
  return (
    <div className="partners">
      <div className="row container">
        <div className="col-md-4 media">
          <div className="d-flex justify-content-center align-items-center container">
            <img
              src="https://i.ibb.co/jMxh03C/affiliate-marketing.png"
              alt=""
            />
          </div>
        </div>

        <div className="col-md-4 media">
          <div className="d-flex justify-content-center align-items-center container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/SH25ChTfELc?controls=0&mute=1&autoplay=1&loop=50"
              title="YouTube video player"
              frameborder="0"
            ></iframe>
          </div>
        </div>
        <div className="col-md-4 media">
          <div className="d-flex justify-content-center align-items-center container">
            <img src="https://i.ibb.co/1z8Qd3r/personal-mediaing.png" alt="" />
          </div>
        </div>
      </div>
      <h1 className="partner-heading">
        Some of our recent jobs are here,
        <br /> Find Out More Stories
      </h1>
      <button className="clickmedia">See more stories like this</button>
    </div>
  );
};

export default Section4;
