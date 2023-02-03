import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { AiOutlineClockCircle, AiOutlineSearch } from "react-icons/ai";
import styles from "../styles/episode.module.css";
import episodes from "../utilities/episodes.json";
import { AiFillPlayCircle } from "react-icons/ai";
import Footer from "../components/footer";
import Modal from "../components/modal";

const Episode = () => {
  const [latest, setLatest] = useState([]);
  const [modal, setModal] = useState(false);
  const [details, setDetails] = useState();

  const handleModal = (item: any) => {
    setModal(true);
  };

  useEffect(() => {}, []);

  return (
    <div className={styles.episode}>
      <Nav />

      <section className={styles.header}>
        <button>Latest</button>

        <div className={styles.text}>
          <h2>Druid’s Podcasts, the mere feeling</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the <br /> readable content of a page when looking at its layout.
          </p>
          <div className={styles.time}>
            <AiOutlineClockCircle />
            <span>16 min</span>
          </div>
        </div>
      </section>
      <section className={styles.pod}>
        <h2>All podcasts are available on</h2>
        <div className={styles.podcast}>
          <img src="/dv06.png" alt="" />
          <img src="/dv05.png" alt="" />
          <img src="/dv04.png" alt="" />
          <img src="/dv03.png" alt="" />
          <img src="/dv02.png" alt="" />
          <img src="/dv01.png" alt="" />
        </div>
      </section>

      <section className={styles.episodeMap}>
        <div className={styles.top}>
          <p>
            Sort by :
            <select name="p" id="">
              <option value="latest">Latest</option>
              <option value="recommended">Recommended</option>
              <option value="discover">Discover</option>
            </select>
          </p>

          <div className={styles.input}>
            <AiOutlineSearch />
            <input type="text" placeholder="Search Podcast" id="" />
          </div>
        </div>

        <div className={styles.bottom}>
          <h2>Episodes</h2>
          <div className={styles.cards}>
            {episodes.map((item, indec) => {
              return (
                <div key={indec} className={styles.btnCard}>
                  <img src={item.image} alt="" />
                  <div>
                    <p>{item.title}</p>
                    <span>{item.subTitle}</span>

                    <button onClick={() => handleModal(item)}>
                      <AiFillPlayCircle />
                      Play
                    </button>
                    {modal ? <Modal /> : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Episode;
