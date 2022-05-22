import React from "react";
import arrow from "../../assets/icons/back-arrow.png";
import swich from "../../assets/icons/switch.png";
import styles from "../../styles/Header/Header.module.css";
import headerImage from '../../styles/Header/Header.module.css'
const Header = () => {
  return (
    <header className={styles.mainheader}>
      <div className={styles.header}>
        <div>
          <img className={headerImage.header_image} src={arrow} alt="arrow" />
        </div>
        <div>STATIONS</div>
        <div>
          <img className={headerImage.header_image} src={swich} alt="swich" />
        </div>
      </div>
    </header>
  );
};

export default Header;
