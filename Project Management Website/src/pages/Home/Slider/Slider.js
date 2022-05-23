import { Carousel } from "react-bootstrap";
import "./Slider.css";

//react-bootstrap carousel
const Slider = () => {
  return (
    <div className="pb-5 mt-0 slider">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/bPrMtHz/a3.png"
            alt="First slide"
          />

          <Carousel.Caption className="carousel1-text">
            <h2 className="carousel1-title">
              You Can Manage Your Projects Here
            </h2>
            {/* <p className='carousel1-p'>Our equipments are very high quality and latest so you will get the best result.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/hB7P6dk/a1.png"
            alt="Second slide"
          />

          <Carousel.Caption className="carousel2-text">
            <h2 className="carousel2-title">
              Go to projects page to see all projects
            </h2>
            {/* <p className='carousel2-p'>Be our social member and you will get 20-40% discount on every test </p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/LRP94k3/a2.png"
            alt="Third slide"
          />
          <Carousel.Caption className="carousel3-text">
            <h2 className="carousel3-title">Apply For Projects</h2>
            {/* <p className='carousel3-p'>Our doctors directly involve with lab test so that we can assure you best output</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
