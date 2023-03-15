import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const Loading = () => {
  const back: any = useRef();
  useEffect(() => {
    gsap.to(back.current, { opacity: 0, duration: 1, delay: 5 });
  }, []);
  return (
    <div className={styles.loading} ref={back}>
      <p>DrummersVille</p>
      <Link href="https://www.linkedin.com/in/oluwaseun-dabiri">
        By Oluwaseun Dabiri
      </Link>
    </div>
  );
};

export default Loading;
