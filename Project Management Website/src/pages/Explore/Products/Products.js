import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../../context/useAuth";
import Footer from "../../Home/Footer/Footer";
import NavBar from "../../Shared/NavBar/NavBar";
import "./Products.css";
const Products = () => {
  //Title Change
  useEffect(() => {
    document.title = "Projects";
  }, []);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [check, setCheck] = useState(true);

  const { user, isLoading, setIsLoading, person, GetPerson } = useAuth();
  //getting user data
  const [member, setMember] = useState({});
  const [test, setTest] = useState(false);
  GetPerson(user.email);
  //getting data from db
  useEffect(() => {
    fetch("http://localhost:5000/manageprojects")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
        setTest(false);
        console.log("korsiiiiiii");
      });
  }, [test]);
  console.log(products);
  // Apply btn click handler
  const handleApply = (projectId, applied) => {
    const newAppliedNumber = applied + 1;

    const url = `http://localhost:5000/member/${person._id}`;

    const updated = person;
    updated?.application.push(projectId);
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        application: updated.application,
        projectId: projectId,
        applied: newAppliedNumber,
      }),
    })
      .then((res) => {})
      .finally(() => {
        setTest(true);
      });
  };
  let index = 1;
  if (isLoading === true || person === null) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div class="spinner-grow text-danger" role="status">
          <span class="sr-only text-center">Loading...</span>
        </div>
      </div>
    );
  }
  //
  return (
    <div>
      <NavBar></NavBar>
      <br />
      <div className="products mt-5 container">
        <h1 className="products-title mt-5 text-center">
          EXPLORE ALL OF OUR PROJECTS
        </h1>
        <div className="d-flex align-items-center justify-content-center mt-5">
          {loading && (
            <div className="d-flex align-items-center justify-content-center">
              <Spinner animation="grow" variant="warning" />
            </div>
          )}
        </div>
        <div className="table-responsive">
          <table class="table table-hover table-light table-responsive-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Project Name</th>
                <th scope="col">Status</th>
                <th scope="col">Apply</th>
              </tr>
            </thead>
            <tbody>
              {products.map((project) => (
                <tr>
                  <th scope="row">{index++}</th>
                  <td className="fs-4 fw-bold user-info">{project.Name}</td>
                  <td className="fs-5 fw-bold">
                    {project.status} <br /> {project.applied} members
                  </td>

                  <td>
                    {person ? (
                      person.application.find((e) => e == project._id) ? (
                        <button
                          className="btn btn-success"
                          disabled
                          onClick={() => handleApply(project._id)}
                        >
                          Applied
                        </button>
                      ) : (
                        <button
                          className="btn btn-success"
                          onClick={() =>
                            handleApply(project._id, project.applied)
                          }
                        >
                          Apply
                        </button>
                      )
                    ) : (
                      <></>
                    )}
                    {/* {project.status ? (
                      <button
                        className="btn btn-success"
                        onClick={() => handleApply(project._id)}
                      >
                        Apply
                      </button>
                    ) : (
                      <button
                        className="btn btn-success"
                        onClick={() => handleApply(project._id)}
                      >
                        Pending
                      </button>
                    )} */}
                  </td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Products;
