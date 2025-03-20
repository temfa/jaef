import React, { FC, ReactNode } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

type Props = {
  children: ReactNode;
};

export const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div>{children}</div>
      </div>
      <div className={styles.right}>
        <Image src="/images/right-column.png" fill alt="right" />
      </div>
    </div>
  );
};
