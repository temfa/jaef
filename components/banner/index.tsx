import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

export const Banner = () => {
  return (
    <div className={styles.container}>
      <h2>Take student experience to the next level</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>
      <Link href="">Join Now</Link>
    </div>
  );
};
