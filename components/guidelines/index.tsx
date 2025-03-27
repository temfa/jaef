import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

export const Guidelines = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <Image src="/images/1.png" width={745} height={559} alt="guidelines" />
        <div className={styles.content}>
          <h2>Board of Trustees</h2>
          <p>
            The 4-member Board of Trustees shall be responsible for the formulation and execution of policies for the smooth administration of the foundation. To enhance sound
            management of the foundation, the Board of trustees shall meet every quarter. Guidelines for the adminstration of the foundation shall be established by the Board of
            Trustees
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <Image src="/images/2.png" width={745} height={559} alt="guidelines" />
        <div className={styles.content}>
          <h2>Qualification for Financial assistance</h2>
          <p>To qualify for the assistance, an applicant must fulfill the following conditions:</p>
          <ul>
            <li>Must be an Indigene of Ibaram-Akoko, from a relatively poor family background</li>
            <li>Must be a person of impeccable character</li>
            <li>Must be a student of the aforemention institutions of higher learning</li>
            <li>Must possess not less than a CGPA of 2.5</li>
          </ul>
        </div>
      </div>
      <div className={styles.row}>
        <Image src="/images/3.png" width={745} height={559} alt="guidelines" />
        <div className={styles.content}>
          <h2>Mode of Application</h2>
          <p>An interested person shall:</p>
          <ul>
            <li>Vist the foundation&apos;s Website </li>
            <li>A duly completed application form</li>
          </ul>
        </div>
      </div>
      <div className={styles.row}>
        <Image src="/images/4.png" width={745} height={559} alt="guidelines" />
        <div className={styles.content}>
          <h2>Approval and Mode of Disbursement</h2>
          <p>Approval to benefit from the foundation financial assistance shall be given by the founder upon the recommendation of the Board of Trustees</p>
          <p>
            Cheques shall be distributed to successful applicants at a formal gathering in Ibaram-Akoko. This is to inspire other students to work hard to qualify for the
            foundation financial assistance and to encourage the young secondary students to pay the desired attention to their academic activities
          </p>
        </div>
      </div>
      <Link href="/register">Apply Now</Link>
    </div>
  );
};
