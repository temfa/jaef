import React from "react";
import styles from "./styles.module.css";

export const LoginBody = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Sign In</h2>
        <p>Please login to continue to your account.</p>
      </div>
      <div className={styles.form}>
        <div className={styles.group}>
          <label htmlFor="email">Email</label>
          <div>
            <input type="email" placeholder="Enter your Email" name="email" />
          </div>
        </div>
        <div className={styles.group}>
          <label htmlFor="password">Password</label>
          <div>
            <input type="password" placeholder="Enter your Password" name="password" />
          </div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};
