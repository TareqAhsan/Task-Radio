import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";
const Editchanel = () => {
  // const [stuData, setStuData] = useState();
  const { user } = useAuth();
  const [paramsEdit, setParamsdit] = useState();
  const { state } = useLocation();
  const { id } = useParams();
  // console.log(state, id);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .put(`http://localhost:5000/dashboard/edit/${id}`, data)
      .then((result) => {
        if (result.status === 200) {
          swal({
            title: "Station Updated Successfully",
            icon: "success",
            timer: 1500,
          });
          reset();
        }
      });
  };

  useEffect(() => {
    const paramsData = state?.find((data) => data._id === id);
    setParamsdit(paramsData);
  }, [id, state]);
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
              defaultValue={paramsEdit?.name}
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
              defaultValue={paramsEdit?.chanelno}
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
        <input type="submit" value="update" className="btn btn-dark" />
      </form>
    </div>
  );
};

export default Editchanel;
