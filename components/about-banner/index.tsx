import React from "react";
import styles from "./styles.module.css";
import { Header } from "../header";

export const AboutBanner = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h2>About J.A.E.F</h2>
    </div>
  );
};
