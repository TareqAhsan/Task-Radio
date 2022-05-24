import React, { useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import Layout from "../layout";
import Navigation from '../../components/common/Navigation/Navigation'

const Login = () => {
  const [logdata, setLogData] = useState();
  const location = useLocation()
  const navigate = useNavigate()
  const { loginUser, error, loading ,user} = useAuth();
  const hanleChange = (e) => {
    const field = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const newvalue = { ...logdata };
    newvalue[field] = value;
    setLogData(newvalue);
  };
  const handleSubmit = (e) => {
    loginUser(logdata.email, logdata.password,navigate);
    e.preventDefault();
  };
  return (
    // <Layout>
    <>
     <Navigation/>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "900px" }}
      >
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <form
            onSubmit={handleSubmit}
            className="shadow p-3 text-center"
            style={{ width: "450px", borderRadius: "10px" }}
          >
            <h4 className="text-dark">Sign in now</h4>
            <div className="mb-3">
              <input
                type="email"
                onBlur={hanleChange}
                name="email"
                className="form-control form-control-lg"
                placeholder="Your Email"
                style={{ borderRadius: "14px" }}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                onBlur={hanleChange}
                name="password"
                className="form-control form-control-lg"
                placeholder="Your password"
                style={{ borderRadius: "14px" }}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="submit"
                value="signin"
                className="btn btn-dark form-control form-control-lg"
                style={{ borderRadius: "14px" }}
              />
            </div>
            <div className="mb-3">
              {/* {error && <Alert variant="danger">{error}</Alert>} */}
              <Link to="/register">Dont have an account ? Signup</Link>
            </div>
          </form>
        )}
      </div>
      </>
  );
};

export default Login;