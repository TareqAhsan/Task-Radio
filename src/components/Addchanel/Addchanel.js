import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";
const Addchanel = () => {
  // const [stuData, setStuData] = useState();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // data.email = user?.email;
    
    console.log(typeof data.chanelno);
    fetch(`https://serene-wildwood-74216.herokuapp.com/dashboard/addstation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.radio._id);
        if (result.radio._id) {
          swal({
            title: "Station Added Successfullyy",
            icon: "success",
            timer: 1500,
          });
          reset();
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="my-4">
        <div className="mb-3 row">
          <label
            htmlFor="staticEmail"
            className="col-sm-2 col-lg-1 col-form-label"
          >
            Chanel Name
          </label>
          <div className="col-sm-10 col-lg-6">
            <input
              placeholder="Name"
              {...register("name", { required: true })}
              className="form-control"
              type="text"
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
        </div>
        <div className="mb-3 row">
          <label
            htmlFor="staticEmail"
            className="col-sm-2 col-lg-1 col-form-label"
          >
            Chanel Number
          </label>
          <div className="col-sm-10 col-lg-6">
            <input
              placeholder="Chanel number"
              {...register("chanelno", { required: true })}
              className="form-control"
              type="text"
            />
            {errors.chanelno && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
        </div>
        <input type="submit" value="save" className="btn btn-dark" />
      </form>
    </div>
  );


};

export default Addchanel;