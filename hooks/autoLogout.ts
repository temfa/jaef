"use client";
import { useEffect, useRef } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/utils/firebase";

const useAutoLogout = (timeout = 30 * 60 * 1000) => {
  // default: 30 minutes
  const timer = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      signOut(auth);
    }, timeout);
  };

  useEffect(() => {
    const events = ["mousemove", "keydown", "click", "scroll"];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    resetTimer(); // initialize timer

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      if (timer.current) clearTimeout(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useAutoLogout;
