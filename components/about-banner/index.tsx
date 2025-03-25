import React from "react";
import styles from "./styles.module.css";
import { Header } from "../header";

export const AboutBanner = ({ text }: { text: string }) => {
  return (
    <div className={styles.container}>
      <Header />
      <h2>{text}</h2>
    </div>
  );
};
