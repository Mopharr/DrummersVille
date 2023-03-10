import React from "react";
import styles from "../styles/Home.module.css";
import styless from "../styles/episode.module.css";
import stylesss from "../styles/blog.module.css";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const Nav = () => {
  const [tog, setTog] = useState(false);

  const handleTog = () => {
    setTog((prev) => !prev);
  };
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <img src="/dv20.png" alt="Logo" />
      </Link>
      <div className={styles.mobHam}>
        <BsSearch className={styless.search} />

        {tog ? (
          <FaTimes className={styles.close} onClick={handleTog} />
        ) : (
          <div onClick={handleTog} className={styles.ham}>
            <img src="/menu.png" alt="" />
          </div>
        )}
      </div>

      <ul className={`${tog ? styles.activeTog : styles.navLink}`}>

        <li>
          <Link href="/episode">Episode</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
