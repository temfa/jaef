"use client";
import React from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

export const LoginBody = ({ page }: { page: string }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      {page === "Sign up" ? (
        <div className={styles.header}>
          <h2>Sign Up</h2>
          <p>Please fill to create an account</p>
        </div>
      ) : (
        <div className={styles.header}>
          <h2>Sign In</h2>
          <p>Please login to continue to your account.</p>
        </div>
      )}
      {page === "Sign up" && (
        <div className={styles.group}>
          <label htmlFor="matricNo">Matric Number</label>
          <div>
            <input type="text" placeholder="Enter your Matric Number" name="matricNo" />
          </div>
        </div>
      )}
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
        <button onClick={() => router.push("/apply")}>{page}</button>
      </div>
    </div>
  );
};
