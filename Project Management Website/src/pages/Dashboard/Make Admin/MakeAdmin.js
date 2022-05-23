import { useState } from "react";
import Swal from "sweetalert2";
import "./MakeAdmin.css";
const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  // Admin Creation API Call;
  const handleOnSubmit = (e) => {
    const user = { email };
    fetch("https://mysterious-everglades-33894.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log("Success", data);
          // alert('success')
          Swal.fire("YES!", `${email} is now admin`, "success");
          setEmail("");
          setSuccess(true);
        } else {
          Swal.fire({
            icon: "error",
            title: "REJECTED",
            text: `${email} is not an user or already admin`,
          });
        }
      });
    console.log(email);
    e.preventDefault();
  };
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <h2 className="admin-title-h text-center">Make New Supervisor</h2>
      <p className="text-center all-order-p">
        Enter the user email. User must be a member
      </p>
      <form onSubmit={handleOnSubmit}>
        <input
          onBlur={handleOnBlur}
          className="form-control form-control-lg w-50 mx-auto my-5"
          type="email"
          placeholder="Enter New Email For Admin"
        ></input>
        <br />
        <div className="d-flex justify-content-center">
          <button type="submit" className="button-84 mx-auto mb-2">
            CONFIRM
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
