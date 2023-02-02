import React from "react";
import Link from "next/link";
import {AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import styles from "../styles/Home.module.css";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footTop}>
        <Link href="/" className={styles.footLogo}>
          <img src="/dv20.png" alt="Logo" />
        </Link>
        <div className={styles.social}>
          <BsFacebook />
          <AiFillInstagram />
          <BsTwitter />
          <BsYoutube />
          <MdEmail />
        </div>
      </div>

      <div className={styles.footBottom}>
        <p>2022, Drummersville Podcast. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
