import { useEffect, useState } from "react";
import useAuth from "../../../context/useAuth";
import "./Product.css";
const Product = ({ project }) => {
  let index = 1;
  const { user, person } = useAuth();
  //getting user data
  const [member, setMember] = useState({});
  const [loading, setLoading] = useState(true);
  const [test, setTest] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/member/:${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMember(data);
        setTest(true);
      });
  }, [test]);

  const handleApply = () => {
    setTest(false);
    console.log(member);
  };
  return (
    <tr>
      <th scope="row">{index++}</th>
      <td className="fs-4 fw-bold user-info">{project.Name}</td>
      <td className="fs-5 fw-bold">
        {project.status} <br /> {project.applied} members
      </td>

      <td>
        {project.status ? (
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
        )}
      </td>
      <td></td>
    </tr>
  );
};

export default Product;
