import "./Section5.css";
const Section5 = () => {
  return (
    <div className="d-flex justify-content-center align-items-center container contact-form">
      <div className="regular">
        <input value="Full Name" className="contact-input" type="text" />
        <input
          value="Company/Organization"
          className="contact-input"
          type="text"
        />
        <input value="Phone" className="contact-input" type="text" />
        <input value="Email" className="contact-input" type="text" />
        <h2 className="support">support@pl.com</h2>
        <p className="copy-email">Click to copy the email</p>
      </div>
      <div className="">
        <textarea
          value="Please Describe your Requirements"
          name=""
          id=""
          className="text-area"
          cols="30"
          rows="10"
        ></textarea>
        <button className="clickmedia float-right">Submit</button>
      </div>
    </div>
  );
};

export default Section5;
