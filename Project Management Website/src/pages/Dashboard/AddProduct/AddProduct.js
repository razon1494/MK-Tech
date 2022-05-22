import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./AddProduct.css";
const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  //calling api for add products

  const onSubmit = (data) => {
    console.log(data);
    data.status = "open";
    data.applied = 0;
    axios.post(`http://localhost:5000/createproject`, data).then((res) => {
      if (res.data.insertedId) {
        //confirmation
        Swal.fire("ADDED!", "Your Product Is Now Live!", "success");
        //reset the form
        reset();
      }
    });
  };
  return (
    <div>
      <h2 className="add-product-title text-center">CREATE NEW PROJECT</h2>
      <p className="text-center text-danger">**All Fields Are Mandatory**</p>
      {/* Add Form Starts here */}
      <div className="form-container container">
        <form
          className="form row align-items-center justify-content-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h4 className="d-inline col-md-3">Project Name: </h4>
          <div className="col-md-8">
            <input
              className="py-3 my-3 form-control"
              {...register("Name", { required: true })}
              placeholder="Enter Project Name"
            />
          </div>

          <input
            className="w-25 button-84 submit-part py-2 my-3 fs-3"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
