import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { GoKebabHorizontal } from "react-icons/go";
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
        <BsSearch className={styles.search} />
        <div onClick={handleTog} className={styles.ham}>
          <img src="/menu.png" alt="" />
        </div>
      </div>

      <ul className={`${tog ? styles.activeTog : styles.navLink}`}>
        <div onClick={handleTog} className={styles.ham}>
          <GoKebabHorizontal className={styles.hamIcon} />
          <GoKebabHorizontal className={styles.hammIcon} />
        </div>
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
