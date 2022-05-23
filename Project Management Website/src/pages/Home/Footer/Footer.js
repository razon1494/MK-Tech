import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            Project <span>Management</span>
          </h3>

          <p class="footer-links">
            <Link to="/home" className="me-3">
              Home
            </Link>
            <Link to="/login" className="me-3">
              Login
            </Link>
            <Link to="/register" className="me-3">
              Register
            </Link>
            <Link to="/products" className="me-3">
              Projects
            </Link>
          </p>

          <p class="footer-company-name">Project Management &copy; 2021</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>H.C.S 2726, Noddapara, Ashkona,</span> Dhaka, Bangladesh
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+88-01744-941494</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">info@pm.net</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            Project Manager is a web app to organize projects. It can simply
            help the supervisor and the members to view and observe the status
            of the project. It can also help members to work together in a team.
          </p>

          <div class="footer-icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
        <div className="copyright mt-3 text-center text-light">
          <small>&copy; 2022 By Arifur Rahman Razon</small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
