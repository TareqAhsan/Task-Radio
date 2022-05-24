import { faRadio, faEye,faEdit} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navigation from "../../components/common/Navigation/Navigation";
import styles from "../../styles/Dashboard/dashboard.module.css";
const Dashboard = () => {
  return (
    <>
      <Navigation />
      <div className={styles.sidebar}>
        <Link className="active" to="/dashboard">
          <FontAwesomeIcon icon={faEye} className="mx-2" />
          view Stations
        </Link>
        <Link className="active" to="/dashboard/addchanel">
          <FontAwesomeIcon icon={faRadio} className="mx-2" />
          AddStation
        </Link>
        <Link className="active" to="/dashboard/manage">
          <FontAwesomeIcon icon={faEdit} className="mx-2" />
          ManageStation
        </Link>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
