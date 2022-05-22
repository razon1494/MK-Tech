import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "./ManageOrders.css";
const ManageOrders = () => {
  //state declare
  const [orders, setOrders] = useState([]);
  const [check, setCheck] = useState(true);
  const [control, setConrol] = useState(false);
  const [open, setOpen] = useState(0);
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(0);

  //getting orders data
  useEffect(() => {
    fetch("http://localhost:5000/manageprojects")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setOpen(data.filter((e) => e.status == "open"));
        setProgress(data.filter((e) => e.status == "in Progress"));
        setCompleted(data.filter((e) => e.status == "completed"));
      });
  }, [check, control]);

  //handle approve
  const handleApprove = (id) => {
    const url = `http://localhost:5000/services/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        setCheck(!check);
        console.log("Poree", check);
      })
      .finally();
  };
  const handleDelete = (id) => {
    // var sure=window.confirm(`Are you sure you want to delete this order?`);
    let sure = false;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          // setSure(true);
          sure = true;
          console.log(sure);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      })
      .then(() => {
        if (sure) {
          fetch(`http://localhost:5000/deleteproject/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                setConrol(!control);
              } else {
                setConrol(false);
              }
            });
        }
      });
    console.log(id);
  };
  // Status Change
  const handleStatusChange = (id, status) => {
    console.log(id);
    const url = `http://localhost:5000/projects/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: status }),
    })
      .then((res) => {
        setCheck(!check);
        console.log("Poree", check);
      })
      .finally();
  };

  //table index variable
  let index = 1;
  return (
    <div className="manage-order-container">
      <h1 className="text-center all-order-title">ALL PROJECTS</h1>
      <p className="text-center all-order-p">
        You can change the status of projects
      </p>
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-secondary active">
          <input
            type="radio"
            name="options"
            id="option1"
            autocomplete="off"
            checked
          />
          All ({orders.length})
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="option2" autocomplete="off" />
          Open ({open.length})
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="option3" autocomplete="off" />
          In Progress ({progress.length})
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="option4" autocomplete="off" />
          Completed ({completed.length})
        </label>
      </div>
      <div className="table-responsive">
        <table class="table table-hover table-light table-responsive-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Project Name</th>
              <th scope="col">Status</th>
              <th scope="col">Change</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((service) => (
              <tr>
                <th scope="row">{index++}</th>
                <td className="fs-4 fw-bold user-info">{service.Name}</td>
                <td className="fs-5 fw-bold">
                  {service.status} <br /> {service.applied} members
                </td>
                <td className="fs-5 fw-bold">
                  {service.applied < 0 || service.status == "completed" ? (
                    <button className="btn btn-secondary" disabled>
                      Status Can Not <br />
                      Be Changed
                    </button>
                  ) : (
                    <button
                      className="btn btn-secondary"
                      onClick={() =>
                        handleStatusChange(service._id, service.status)
                      }
                    >
                      Change Status to <br />
                      {service.status == "open" ? "In Progress" : "Completed"}
                    </button>
                  )}
                </td>

                <td>
                  {service.status ? (
                    <button
                      className="btn btn-success"
                      onClick={() => handleApprove(service._id)}
                    >
                      Edit
                    </button>
                  ) : (
                    <button
                      className="btn btn-success"
                      onClick={() => handleApprove(service._id)}
                    >
                      Pending
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(service._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
