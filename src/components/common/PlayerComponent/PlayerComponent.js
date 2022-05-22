import React from "react";
import minus from "../../../assets/icons/minus.png";
import player from "../../../assets/icons/player.png";
import plus from "../../../assets/icons/plus.png";
import styles from "../../../styles/PlayerComponent/PlayerComponent.module.css";

const PlayerComponent = () => {
  return (
    <div>
      <div className="d-flex  align-items-center justify-content-around p-4">
        <div>
          <img className={styles.minus} src={minus} alt="minus" />
        </div>
        <div>
          <img className={styles.player} src={player} alt="player" />
        </div>
        <div>
          <img className={styles.plus} src={plus} alt="plus" />
        </div>
      </div>
    </div>
  );
};

export default PlayerComponent;
