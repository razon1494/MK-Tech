import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useAuth from "../../../context/useAuth";
import "./Navbar.css";

const NavBar = () => {
  const history = useHistory();
  //destructuring from auth context
  const { user, admin, isUser, logout } = useAuth();

  return (
    <div className="mb-4">
      <Navbar
        fixed="top"
        className="d-block navigation-bar"
        collapseOnSelect
        expand="md"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>
            <NavLink to="/home" className="navbar-title">
              <img
                className="img-fluid"
                src="https://i.ibb.co/MRzsP59/logo1.png"
                alt=""
                width="50px"
              />
              <h2 className="nav-head d-inline">
                {" "}
                G.<span className="kers">Chairs</span>{" "}
              </h2>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavLink
                className="nav-items fs-6 px-3  py-2 text-light"
                to="/home"
              >
                Home
              </NavLink>

              {isUser && (
                <NavLink
                  className="nav-items fs-6 px-3  py-2 text-light"
                  to="/products"
                >
                  Explore
                </NavLink>
              )}

              {admin && (
                <NavLink
                  className="nav-items fs-6 px-3  py-2 text-light"
                  to="/manageorders"
                >
                  Manage Projects
                </NavLink>
              )}
              {admin && (
                <NavLink
                  className="nav-items fs-6 px-3  py-2 text-light"
                  to="/addproducts"
                >
                  Add Project
                </NavLink>
              )}
              {admin && (
                <NavLink
                  className="nav-items fs-6 px-3  py-2 text-light"
                  to="/makeadmin"
                >
                  Make Supervisor
                </NavLink>
              )}
              {user?.email ? (
                <button
                  onClick={() => logout(history)}
                  className="fs-6 nav-items py-2 px-3 me-2 fw-bold text-light text-start logout"
                  as={Link}
                  to="/"
                >
                  Logout
                </button>
              ) : (
                <Nav.Link
                  className="nav-items fs-6 px-3  py-2 fw-bold text-light"
                  as={Link}
                  to="/login"
                >
                  Sign In
                </Nav.Link>
              )}
              <Navbar.Text>
                <p className="fs-6 ms-3 user-name fw-bold">
                  {" "}
                  {user?.displayName}
                </p>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
    </div>
  );
};

export default NavBar;
