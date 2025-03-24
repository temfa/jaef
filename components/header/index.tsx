import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <h2>JAEF</h2>
      </div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/how">How it works</Link>
        <button>
          <Link href="/apply">Apply Now</Link>
        </button>
        <button>
          <Link href="/login">Login</Link>
        </button>
      </nav>
    </header>
  );
};
