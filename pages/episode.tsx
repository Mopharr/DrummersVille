import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { AiOutlineClockCircle, AiOutlineSearch } from "react-icons/ai";
import styles from "../styles/episode.module.css";
import episodes from "../utilities/episodes.json";

const episode = () => {
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    
  }, []);

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
        </div>
      </section>
    </div>
  );
};

export default episode;