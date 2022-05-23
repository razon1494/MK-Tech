import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="d-flex flex-column navs">
        <Link className="links">Home</Link>
        <Link className="links">What We Do</Link>
        <Link className="links">Our Partners</Link>
        <Link className="links">Portfolio</Link>
        <Link className="links">Contact Us</Link>
      </nav>
    </div>
  );
};
export default Sidebar;
