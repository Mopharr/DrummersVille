import React from "react";
import styles from "../styles/episode.module.css";
import { FiPlayCircle } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

const modal = ({ details, setModal }: any) => {
  const handleClose = () => {
    setModal(false);
  };

  return (
    <div className={styles.modal}>
      <FaTimes className={styles.close} onClick={handleClose} />
      <div className={styles.modalTop}>
        <img src={details.image} alt="" />
        <div className={styles.modalText}>
          <h3>{details.title}</h3>
          <p>{details.subTitle}</p>
          <span>
            <FiPlayCircle />
            1hr 20min
          </span>
        </div>
      </div>
      <div className={styles.modalBottom}>
        <div className={styles.play}>
          <img src="dv06.png" alt="" />
          <p>
            Listen on <br /> Apple Podcast
          </p>
        </div>
        <div className={styles.play}>
          <img src="a1.png" alt="" />
          <p>
            Listen on <br /> Anchor
          </p>
        </div>
        <div className={styles.play}>
          <img src="a.png" alt="" />
          <p>
            Listen on <br /> Audiomack
          </p>
        </div>
        <div className={styles.play}>
          <img src="a4.png" alt="" />
          <p>
            Listen on <br /> Spotify
          </p>
        </div>
        <div className={styles.play}>
          <img src="a3.png" alt="" />
          <p>
            Listen on <br /> Scitcher
          </p>
        </div>
        <div className={styles.play}>
          <img src="a2.png" alt="" />
          <p>
            Listen on <br /> Google Podcast
          </p>
        </div>
      </div>
    </div>
  );
};

export default modal;
