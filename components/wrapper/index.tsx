"use client";
import useAutoLogout from "@/hooks/autoLogout";
import { ReactNode } from "react";

export const Wrapper = ({ children }: { children: ReactNode }) => {
  useAutoLogout();
  return <>{children}</>;
};
