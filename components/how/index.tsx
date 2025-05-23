import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { UserSvg } from "@/svgs/user";
import { AccessSvg } from "@/svgs/access";
import { QuestionSvg } from "@/svgs/question";
import { ResultSvg } from "@/svgs/result";

export const How = () => {
  return (
    <div className={styles.container}>
      <h2>How It Works</h2>
      <div className={styles.wrapper}>
        <div className={styles.body}>
          <div className={styles.single}>
            <div>
              <UserSvg />
            </div>
            <Link href="/register">Sign Up</Link>
            <p>Create your account to get started. It only takes a few minutes.</p>
          </div>
          <div className={styles.single}>
            <div>
              <AccessSvg />
            </div>
            <Link href="/login">Get Access</Link>
            <p>Log in to access the portal and explore available opportunities.</p>
          </div>
          <div className={styles.single}>
            <div>
              <QuestionSvg />
            </div>
            <Link href="/login">Apply</Link>
            <p>Complete and submit your application with the required details and documents.</p>
          </div>
          <div className={styles.single}>
            <div>
              <ResultSvg />
            </div>
            <h2>Get Result</h2>
            <p>View your application results once the review process is complete.</p>
          </div>
        </div>
        <Link href="/register">Start Now</Link>
      </div>
    </div>
  );
};
