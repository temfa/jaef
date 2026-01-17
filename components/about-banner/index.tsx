import React from "react";
import styles from "./styles.module.css";

export const AboutBanner = ({ text }: { text: string }) => {
  return (
    <div className={styles.container}>
      <h2>{text}</h2>
    </div>
  );
};
