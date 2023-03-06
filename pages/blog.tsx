import React from "react";
import Footer from "../components/footer";
import Nav from "../components/Nav";
import styles from "../styles/blog.module.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import car1 from "../utilities/car1.json";
import car2 from "../utilities/car2.json";
import car3 from "../utilities/car3.json";

const blog = () => {
  return (
    <div className={styles.blog}>
      <Nav />
      <section className={styles.blogHeader}>
        <label>Hot Topic</label>

        <h2>
          Where Passi<span>on</span> <br /> Meets Inspir<span>ation.</span>
        </h2>
        <p>
          Bringing to you inspiring, educating, motivating and transforming
          interviews from pro drummers and other music professionals.
        </p>
        <button>
          Read full story <HiOutlineArrowNarrowRight />
        </button>

        <div className={styles.image}>
          <img src="/d.png" alt="" />
          <img src="/d.png" alt="" />
          <img src="/d.png" alt="" />
        </div>
      </section>

      <section className={styles.playlist}>
        <ul className={styles.option}>
          <li className={styles.active}>All</li>
          <li>Category 1</li>
          <li>Category 2</li>
          <li>Category 3</li>
          <li>Category 4</li>
        </ul>
        <div className={styles.cat1}>
          {car1.map((item, index) => {
            return (
              <div key={index} className={styles.cat1Content}>
                <img src={item.image} alt="" />
                <div className={styles.cat1Text}>
                  <label>Hot Topic</label>
                  <h2>{item.title}</h2>
                  <p>{item.subTitle}</p>
                  <button>Read</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.cat2}>
          {car2.map((item, index) => {
            return (
              <div key={index} className={styles.cat2Content}>
                <img src={item.image} alt="" />
                <div className={styles.cat1Text}>
                  <label>Hot Topic</label>
                  <h2>{item.title}</h2>
                  <p>{item.subTitle}</p>
                  <button>Read</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.cat3}>
          {car3.map((item, index) => {
            return (
              <div key={index} className={styles.cat3Content}>
                <img src={item.image} alt="" />
                <div className={styles.cat1Text}>
                  <label>Hot Topic</label>
                  <h2>{item.title}</h2>
                  <p>{item.subTitle}</p>
                  <button>Read</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.cat2}>
          {car2.map((item, index) => {
            return (
              <div key={index} className={styles.cat2Content}>
                <img src={item.image} alt="" />
                <div className={styles.cat1Text}>
                  <label>Hot Topic</label>
                  <h2>{item.title}</h2>
                  <p>{item.subTitle}</p>
                  <button>Read</button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default blog;
