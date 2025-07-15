/* eslint-disable react/no-unescaped-entities */
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
            management of the body, the Board of trustees shall meet every quarter. Guidelines for the adminstration of the foundation shall be established by the Board of Trustees
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
            <li>He or she must be based Ibaram</li>
            <li>Must be a person of impeccable character</li>
            <li>Must be a student of the aforementioned institutions of higher learning</li>
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
            <li>Duly complete online application form</li>
          </ul>
        </div>
      </div>
      <div className={styles.row}>
        <Image src="/images/4.png" width={745} height={559} alt="guidelines" />
        <div className={styles.content}>
          <h2>Approval and Mode of Disbursement</h2>
          <p>Approval to benefit from the foundation financial assistance shall be given by the founder upon the recommendation of the Board of Trustees</p>
          <p>Cheques were distributed at earlier editions but recent editions direct cash/fund credit was done into the account of individual beneficiary. </p>
          <div className={styles.table}>
            <div className={styles.single}>
              <p>Year</p>
              <p>Edition</p>
              <p>Beneficiary Count</p>
              <p>Amount Disbursed(#)</p>
            </div>
            <div className={styles.single}>
              <p>2016</p>
              <p>First</p>
              <p>4</p>
              <p>120,000</p>
            </div>
            <div className={styles.single}>
              <p>2017</p>
              <p>Second</p>
              <p>6</p>
              <p>180,000</p>
            </div>
            <div className={styles.single}>
              <p>2018</p>
              <p>Third</p>
              <p>9</p>
              <p>170,000</p>
            </div>
            <div className={styles.single}>
              <p>2019</p>
              <p>Fourth</p>
              <p>8</p>
              <p>140,000</p>
            </div>
          </div>
          <p>
            The first edition of Joseph Adaramola's Educational Foundation was held in 2016, where the sum of One hundred and twenty thousand (N120,000) Naira was disbursed to Four
            (4) beneficiaries. In 2017 Six(6) beneficiaries were given a total sum of One hundred and eighty thousand naira( N180, 000.00). This marked her second edition. Years
            2018 and 2019 editions which were the third and forth editions, Nine(9) and Eight(8) beneficiaries benefited from the foundation with amounts of Two hundred and seventy
            thousand (N270,00) Naira and Two hundred and forty thousand (N240,000) Naira respectively
          </p>
          <p>
            Cheques were distributed to successful applicants at a formal gathering in Ibaram-Akoko. This was to inspire other students to work hard to qualify for the foundation
            financial assistance and to encourage the young secondary school students to pay the desired attention to their academic activities
          </p>
        </div>
      </div>
      <Link href="/register">Apply Now</Link>
    </div>
  );
};
