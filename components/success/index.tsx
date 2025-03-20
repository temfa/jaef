import React from "react";
import styles from "./styles.module.css";

export const Success = () => {
  return (
    <div className={styles.container}>
      <h2>Our Success</h2>
      <div className={styles.body}>
        <div className={styles.single}>
          <h2>15k+</h2>
          <p>Number of Awardees</p>
        </div>
        <div className={styles.single}>
          <h2>100%</h2>
          <p>Disbursement Rate</p>
        </div>
        <div className={styles.single}>
          <h2>5+</h2>
          <p>Board of Directors</p>
        </div>
        <div className={styles.single}>
          <h2>6+</h2>
          <p>Years of Experience</p>
        </div>
      </div>
    </div>
  );
};
