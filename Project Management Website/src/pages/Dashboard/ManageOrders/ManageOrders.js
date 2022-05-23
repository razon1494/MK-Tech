import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
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

  const [show, setShow] = useState(false);
  const [targetName, setTargetName] = useState("");
  const [targetId, setTargetId] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (name, id) => {
    setTargetName(name);
    setTargetId(id);
    setShow(true);
  };

  //getting orders data
  useEffect(() => {
    fetch("https://mysterious-everglades-33894.herokuapp.com/manageprojects")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setOpen(data.filter((e) => e.status == "open"));
        setProgress(data.filter((e) => e.status == "in Progress"));
        setCompleted(data.filter((e) => e.status == "completed"));
      });
  }, [check, control]);

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
          fetch(
            `https://mysterious-everglades-33894.herokuapp.com/deleteproject/${id}`,
            {
              method: "DELETE",
              headers: { "content-type": "application/json" },
            }
          )
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
    const url = `https://mysterious-everglades-33894.herokuapp.com/projects/${id}`;
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
  const [editedName, setEditedName] = useState("");

  //handle Edit
  const handleEdit = () => {
    const url = `https://mysterious-everglades-33894.herokuapp.com/project/${targetId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newName: editedName }),
    })
      .then((res) => {
        setCheck(!check);
      })
      .finally(handleClose());
  };
  const handleEditNameOnchange = (e) => {
    setEditedName(e.target.value);
    console.log(editedName);
  };

  //table index variable
  let index = 1;
  return (
    <div className="manage-order-container">
      <h1 className="text-center all-order-title">ALL PROJECTS</h1>
      <p className="text-center all-order-p">
        You can change the status of projects
      </p>
      <div
        className="btn-group btn-group-toggle d-flex justify-content-center align-items-center"
        data-toggle="buttons"
      >
        <button className="btn btn-primary p-3 fs-4 fw-bold">
          All ({orders.length})
        </button>
        <button className="btn btn-danger p-3 fs-4 fw-bold">
          Open ({open.length})
        </button>
        <button className="btn btn-info p-3 fs-4 fw-bold">
          In Progress ({progress.length})
        </button>
        <button className="btn btn-success p-3 fs-4 fw-bold">
          Completed ({completed.length})
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-hover table-light table-responsive-sm">
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
                  {service.applied < 3 || service.status == "completed" ? (
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
                  <Button
                    variant="primary"
                    onClick={() => handleShow(service.Name, service._id)}
                  >
                    Edit
                  </Button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder={targetName}
                        onChange={handleEditNameOnchange}
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={() => handleEdit()}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
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
