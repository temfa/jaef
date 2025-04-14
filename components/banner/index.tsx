import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

export const Banner = () => {
  return (
    <div className={styles.container}>
      <h2>Take student experience to the next level</h2>
      <p>
        The Joseph Adaramola Education Foundation (JAEF) was inagurated by Mr. Akin Adaramola on the occasion of Ibaram-Akoko Educaton Summit, 2015 in memory of his late father.
      </p>
      <Link href="/register">Join Now</Link>
    </div>
  );
};
