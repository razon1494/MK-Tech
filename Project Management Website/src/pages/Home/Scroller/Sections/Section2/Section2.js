import "./Section2.css";
const Section2 = () => {
  return (
    <div className="container ms-5 ">
      <div className="row">
        <div className="col-md-3 wedo">
          <div className="d-flex justify-content-center align-items-center container">
            <img
              src="https://i.ibb.co/7nYyy3H/buisness-management.png"
              alt=""
            />
          </div>
          <p className="text-center">Business Management Software</p>
        </div>
        <div className="col-md-3 wedo">
          <div className="d-flex justify-content-center align-items-center container">
            <img src="https://i.ibb.co/NCKQYDC/digital-marketing.png" alt="" />
          </div>
          <p className="text-center">Digital Marketing</p>
        </div>
        <div className="col-md-3 wedo">
          <div className="d-flex justify-content-center align-items-center container">
            <img src="https://i.ibb.co/CW7Rm6Q/web-development.png" alt="" />
          </div>
          <p className="text-center">Mobile App & Web Development</p>
        </div>
        <div className="col-md-3 wedo">
          <div className="d-flex justify-content-center align-items-center container">
            <img
              className=""
              src="https://i.ibb.co/qY4LJpG/e-commerce.png"
              alt=""
            />
          </div>
          <p className="text-center">E-Commerece</p>
        </div>
        <div className="col-md-3 wedo">
          <div className="d-flex justify-content-center align-items-center container">
            <img
              src="https://i.ibb.co/jMxh03C/affiliate-marketing.png"
              alt=""
            />
          </div>
          <p className="text-center">Affliate Marketing</p>
        </div>

        <div className="col-md-3 wedo">
          <div className="d-flex justify-content-center align-items-center container">
            <img src="https://i.ibb.co/VgyBRDj/ad-network.png" alt="" />
          </div>
          <p className="text-center">Ad Network Solution</p>
        </div>
        <div className="col-md-3 wedo">
          <div className="d-flex justify-content-center align-items-center container">
            <img src="https://i.ibb.co/1z8Qd3r/personal-branding.png" alt="" />
          </div>
          <p className="text-center">Personal Branding</p>
        </div>
        <div className="col-md-3 wedo">
          <div className="d-flex justify-content-center align-items-center container">
            <img src="https://i.ibb.co/183bvCP/chat.png" alt="" />
          </div>
          <p className="text-center">Bulk SMS</p>
        </div>
      </div>
      <br /> <br />
      <button className="checkout">Check Out More</button>
    </div>
  );
};

export default Section2;
