import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const ManageStation = () => {
  const [manage, setManage] = useState();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/dashboard/${id}`)
      .then((result) => console.log(result));
  };

  const handleNavigate = id=>{
    navigate(`/dashboard/edit/${id}`, {
        state:
            manage
          
      });
  }

  useEffect(() => {
    fetch(`http://localhost:5000/dashboard`)
      .then((res) => res.json())
      .then((result) => {
        setManage(result?.radios);
      });
  }, [manage]);
  return (
    <div>
      <h1>Manage all station</h1>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">chanelno</th>
            <th scope="col">delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {manage?.map((data, index) => (
            <tr key={data?._id}>
              <th scope="row">{index}</th>
              <td>{data?.name}</td>
              <td>{data?.chanelno}</td>
              <td onClick={() => handleDelete(data._id)}>
                {" "}
                <FontAwesomeIcon icon={faTrash} className="mx-2" />
              </td>
              <td onClick={()=>handleNavigate(data?._id)}>
               <FontAwesomeIcon icon={faEdit} className="mx-2" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageStation;
