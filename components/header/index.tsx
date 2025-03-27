"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Close from "@/svgs/close";
import Bars from "@/svgs/bars";

export const Header = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <header className={mobile ? `${styles.container} ${styles.mobile}` : styles.container}>
      <div className={styles.logo}>
        <h2>JAEF (RC126840)</h2>
        {mobile ? <Close action={() => setMobile(false)} /> : <Bars action={() => setMobile(true)} />}
      </div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/how">How it works</Link>

        <button>
          <Link href="/login">Login</Link>
        </button>
      </nav>
    </header>
  );
};
