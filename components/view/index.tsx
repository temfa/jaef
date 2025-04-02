"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { useRouter } from "next/navigation";

type FormDetails = {
  fname: string;
  lname: string;
  sex: string;
  phoneNumber: string;
  age: string;
  dob: string;
  town: string;
  address: string;
  institution: string;
  matricNo: string;
  course: string;
  cgpa: string;
  duration: string;
  date: string;
  degree: string;
  fatherFullName: string;
  fatherTown: string;
  fatherOccupation: string;
  fatherAddress: string;
  fatherIncome: string;
  fatherAlive: string;
  long: string;
  nature: string;
  otherInfo: string;
  hodName: string;
  rank: string;
  refereeName1: string;
  refereeAddress1: string;
  refereeOccupation1: string;
  refereeRecomendation1: string;
  refereeName2: string;
  refereeAddress2: string;
  refereeOccupation2: string;
  refereeRecomendation2: string;
  picture: string;
  document: string;
  status: string;
  userId: string;
};

export const View = () => {
  const router = useRouter();

  const [orders, setOrders] = useState<FormDetails[]>([]);
  useEffect(() => {
    const fetchEventsFromFirestore = async () => {
      try {
        const queryData = query(collection(db, "application"));
        const querySnapshot = await getDocs(queryData);

        const firebaseOrders: FormDetails[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data() as FormDetails;
          if (data) {
            firebaseOrders.push(data); // Add all dates from Firebase
          }
        });

        setOrders(
          firebaseOrders?.filter((e) => {
            return e.userId !== undefined;
          })
        );
        // setLoading(false);
      } catch (error) {
        // setLoading(false);
        console.error("Error fetching events from Firestore:", error);
      }
    };

    fetchEventsFromFirestore();
  }, []);

  return (
    <div className={styles.assignContainer}>
      <div className={styles.assignWrapper}>
        <div className={styles.assignHeader}>
          <p>S/N</p>
          <p>Full Name</p>
          <p>Matric Number</p>
          <p>Phone Number</p>
          <p>Institution</p>
        </div>
        {orders.length === 0 ? (
          <p>No Data</p>
        ) : (
          orders?.map((item, index) => {
            return (
              <div className={styles.assignSingle} key={index} onClick={() => router.push(`/admin/applications/${item.userId}`)}>
                <p>{index + 1}</p>
                <p>
                  {item.lname} {item.fname}
                </p>
                <p>{item.matricNo}</p>
                <p>{item.phoneNumber}</p>
                <p>{item.institution}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
