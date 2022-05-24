import React from "react";
import styles from "../../styles/Footer/Footer.module.css";
const Footer = ({ state, fData }) => {
  return (
    <div
      className={styles.footer_main}
      //   style={{
      //     height: "90px",
      //     padding: "10px",
      //     backgroundColor: "#374151",
      //     borderRadius: "0 0 25px 25px",
      //   }}
    >
      {state && (
        <div className="d-flex align-items-center justify-content-center flex-column">
          <div className={styles.footer_heading}>CURRENTLY PLAYING</div>
          <h1 className={styles.footer_content}>{fData?.name}</h1>
        </div>
      )}
    </div>
  );
};

export default Footer;
