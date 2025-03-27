import React from "react";
import styles from "./styles.module.css";

export const Signup = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Sign Up</h2>
          <p>Please fill to create an account</p>
        </div>
        <div className={styles.form}>
          <div className={styles.group}>
            <label htmlFor="matricNo">Matric Number</label>
            <div>
              <input type="text" placeholder="Enter your Matric Number" name="matricNo" />
            </div>
          </div>
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
    </div>
  );
};
