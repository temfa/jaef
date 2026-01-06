"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import Close from "@/svgs/close";
import Bars from "@/svgs/bars";
import { auth } from "@/utils/firebase";

export const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setActive(true); // User is logged in, set userId
      } else {
        setActive(false);
      }
    });

    return () => unsubscribe();
  }, []);
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
        <Link href="/events">Events</Link>
        {active ? (
          <button>
            <Link href="/apply">Apply</Link>
          </button>
        ) : (
          <button>
            <Link href="/login">Login</Link>
          </button>
        )}
      </nav>
    </header>
  );
};
