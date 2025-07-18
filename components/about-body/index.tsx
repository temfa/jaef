import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export const AboutBody = () => {
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <Image src="/images/about-1.png" width={745} height={558} alt="First" />
        <div className={styles.content}>
          <h2> Joseph Adaramola Education Foundation</h2>
          <p>
            The Joseph Adaramola Education Foundation (JAEF) was inaugurated by Mr. Akin Adaramola on the occasion of Ibaram-Akoko Education Summit, 2015 in memory of his late
            father (Pa Joseph Adaramola) for his love and commitment to the education of his children during his life time .
          </p>
          <p>
            While inagurating the foundation, Mr. Adaramola donated the sum of N500,000.00 to the foundation as seed fund and also appointed a 4-member board of Trustees,
            comprising Mr. E. O. Olumoko as Chairman , Surv. Adaramola Francis , Dr. Ajiga Olajide as members and Mrs. Akande Iyadunni as Secretary.
          </p>
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.content}>
          <p>
            The Joseph Adaramola Foundation was established as a platform to offer educational financial assistance to qualified indigenes of Ibaram-Akoko who are students in
            Nigerian public institutions of higher learning. Such institutions of higher learning are limited to Schools of Nursing/Health Technology, Polytechnics and
            Universities. This window of opportunity is open only to indigent students who are in dire need of financial assistance for the pursuance of their academic programmes.
          </p>
          <p>Students in private institutions of higher learning are not qualified for the assistance</p>
        </div>
        <Image src="/images/about-2.png" width={745} height={558} alt="First" />
      </div>
    </div>
  );
};
