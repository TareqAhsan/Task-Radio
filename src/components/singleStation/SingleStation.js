import React from "react";
import styles from "../../styles/singleStation/SingleStation.module.css";
const SingleStation = ({ data, handleClick,state }) => {
  return (
    <>
      <div
        className={styles.single_Station}
        //   style={{
        //     display: "flex",
        //     alignItems: "center",
        //     justifyContent: "space-between",
        //     padding: "14px",
        //   }}
        onClick={() => handleClick(data.id)}
      >
        <p>{data.name}</p>
        <p>{data.point}</p>
      </div>
      <hr />
    </>
  );
};

export default SingleStation;
