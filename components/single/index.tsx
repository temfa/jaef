"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useForm } from "react-hook-form";
import { formLabels } from "@/utils/data";
import { doc, DocumentData, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { toast } from "react-toastify";

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
  // fatherIncome: string;
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
};
export const Single = ({ id }: { id: string }) => {
  const [status, setStatus] = useState("");
  const [active, setActive] = useState(1);
  const [data, setData] = useState<DocumentData>({});
  const { register, setValue } = useForm<FormDetails>();

  useEffect(() => {
    const fetchData = async () => {
      const savedData = await loadFormProgress(id);
      if (savedData) {
        Object.entries(savedData).forEach(([key, value]) => setValue(key as keyof FormDetails, value));
        if (savedData.status) setStatus(savedData.status);
        setData(savedData);
      }
    };
    fetchData();
  }, [id, setValue]);

  const loadFormProgress = async (userId: string) => {
    try {
      const docRef = doc(db, "application", userId);
      const snapshot = await getDoc(docRef);
      return snapshot.exists() ? snapshot.data() : null;
    } catch (error) {
      console.error("Error loading progress:", error);
      return null;
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const saveFormProgress = async (userId: string, data: any) => {
    try {
      const docRef = doc(db, "application", userId);
      await setDoc(docRef, data, { merge: true });
      console.log("Progress saved!");
    } catch (error) {
      console.error("Error saving progress:", error);
    }
  };
  return (
    <form className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          {formLabels?.map((item, index) => {
            return (
              <h3 key={index} onClick={() => setActive(index + 1)} className={active === index + 1 ? styles.active : ""}>
                {item}
              </h3>
            );
          })}
          {status ? (
            <h3 onClick={() => setActive(6)} className={active === 6 ? styles.active : ""}>
              Status
            </h3>
          ) : null}
        </div>
        <div className={styles.right}>
          <div className={styles.form}>
            <div className={styles.indicatorBody}>
              <div className={styles.indicator} style={{ width: `${(active / 6) * 100}%` }} />
            </div>
            <div className={styles.formHeader}>
              <p>Step {active}/6</p>
              <h2>{formLabels[active - 1]}</h2>
            </div>
            {active === 1 ? (
              <>
                <div className={styles.double}>
                  <div className={styles.group}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" readOnly placeholder="Enter your First Name" {...register("fname", { required: "First Name is required" })} />
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" readOnly placeholder="Enter your Last Name" {...register("lname", { required: "Last Name is required" })} />
                  </div>
                </div>
                <div className={styles.double}>
                  <div className={styles.group}>
                    <label htmlFor="sex">Sex</label>
                    <input type="text" readOnly placeholder="Enter your Sex" {...register("sex", { required: "Sex is required" })} />
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" readOnly placeholder="Enter your Phone Number" {...register("phoneNumber", { required: "Phone Number is required", maxLength: 11 })} />
                  </div>
                </div>
                <div className={styles.double}>
                  <div className={styles.group}>
                    <label htmlFor="age">Age</label>
                    <input type="number" readOnly placeholder="Enter your Age" {...register("age", { required: "Age is required" })} />
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="sedobx">Date of Birth</label>
                    <input type="date" placeholder="Enter your First Name" {...register("dob", { required: "Date of Birth is required" })} />
                  </div>
                </div>
                <div className={styles.double}>
                  <div className={styles.group}>
                    <label htmlFor="town">Town of Origin</label>
                    <input type="text" readOnly placeholder="Enter your Town of Origin" {...register("town", { required: "Town of Origin is required" })} />
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="address">Address</label>
                    <input type="text" readOnly placeholder="Enter your Address" {...register("address", { required: "Address is required" })} />
                  </div>
                </div>
                <div className={styles.double}>
                  <div className={styles.group}>
                    <label htmlFor="institution">Present Institution</label>
                    <input type="text" readOnly placeholder="Enter your Present Institution" {...register("institution", { required: "Present Institution is required" })} />
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="address">Matric No.</label>
                    <input type="text" readOnly placeholder="Enter your Matric No." {...register("matricNo", { required: "Matric No. is required" })} />
                  </div>
                </div>
                <div className={styles.double}>
                  <div className={styles.group}>
                    <label htmlFor="address">Course of Study</label>
                    <input type="text" readOnly placeholder="Enter your Course of Study" {...register("course", { required: "Course of Study is required" })} />
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="address">Present Level/CGPA</label>
                    <input type="text" readOnly placeholder="400l/4.79" {...register("cgpa", { required: "Present Level/CGPA is required" })} />
                  </div>
                </div>
                <div className={styles.double}>
                  <div className={styles.group}>
                    <label htmlFor="address">Duration of Course</label>
                    <input type="text" readOnly placeholder="Enter your Duration of Course" {...register("duration", { required: "Duration is required" })} />
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="address">Date of Completion</label>
                    <input type="text" readOnly placeholder="Enter your Date of Completion" {...register("date", { required: "Date of Completion is required" })} />
                  </div>
                </div>
                <div className={styles.group}>
                  <label htmlFor="address">Degree in View</label>
                  <input type="text" readOnly placeholder="Enter your Degree in View" {...register("degree", { required: "Degree in View is required" })} />
                </div>
                <div className={styles.group}>
                  <label htmlFor="address">Picture</label>
                  {/* <input type="file" placeholder="Enter your Picture" onChange={handleFileChange1} /> */}
                </div>
              </>
            ) : active === 2 ? (
              <>
                <div className={styles.group}>
                  <label htmlFor="fatherFullName">Father&apos;s Full Name</label>
                  <input type="text" readOnly placeholder="Enter your Father's Full Name" {...register("fatherFullName", { required: "Father's Full Name is required" })} />
                </div>
                <div className={styles.group}>
                  <label htmlFor="fatherTown">Town of Origin</label>
                  <input type="text" readOnly placeholder="Enter your Father's Town" {...register("fatherTown", { required: "Father's Town is required" })} />
                </div>
                <div className={styles.group}>
                  <label htmlFor="fatherOccupation">Occupation</label>
                  <input type="text" readOnly placeholder="Enter your Father's Occupation" {...register("fatherOccupation", { required: "Father's Occupation is required" })} />
                </div>
                <div className={styles.group}>
                  <label htmlFor="fatherAddress">Residential Address of Parents</label>
                  <input type="text" readOnly placeholder="Enter Address" {...register("fatherAddress", { required: "Address is required" })} />
                </div>
                {/* <div className={styles.group}>
                  <label htmlFor="fatherIncome">Estimated Annual Income of Parents</label>
                  <input type="text" readOnly placeholder="Enter  Annual Income" {...register("fatherIncome", { required: "Annual Income is required" })} />
                </div> */}
                <div className={styles.group}>
                  <label htmlFor="fatherAlive">State whether living or dead</label>
                  <input type="text" readOnly placeholder="Enter  Field" {...register("fatherAlive", { required: "Field is required" })} />
                </div>
              </>
            ) : active === 3 ? (
              <>
                <div className={styles.department}>
                  <div className={styles.group}>
                    <label htmlFor="long">How long has the applicant been in your department</label>
                    <input type="text" readOnly placeholder="Enter field" {...register("long", { required: "Field is required" })} />
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="">Nature of Academic Programme</label>
                    <select {...register("nature", { required: "Field is required" })}>
                      <option value="">Choose Option</option>
                      <option value="Remedial">Remedial</option>
                      <option value="Part-Time">Part-Time</option>
                      <option value="Full-Time">Full-Time</option>
                    </select>
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="otherInfo">Any Other Info</label>
                    <input type="text" readOnly placeholder="Enter any other info" {...register("otherInfo", { required: "Field is required" })} />
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="hodName">Name of the Dean/Hod</label>
                    <input type="text" readOnly placeholder="Enter Name of Dean/HOD" {...register("hodName", { required: "Name of HOD/Dean  is required" })} />
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="rank">Rank</label>
                    <input type="text" readOnly placeholder="Enter Rank" {...register("rank", { required: "Rank  is required" })} />
                  </div>
                </div>
              </>
            ) : active === 4 ? (
              <>
                <div className={styles.group}>
                  <label htmlFor="refereeName1">Referee One Name</label>
                  <input type="text" readOnly placeholder="Enter your Referee One Name" {...register("refereeName1", { required: "Name of Referee one is required" })} />
                </div>
                <div className={styles.group}>
                  <label htmlFor="refereeAddress1">Referee One Address</label>
                  <input type="text" readOnly placeholder="Enter your Refereee's Address" {...register("refereeAddress1", { required: "Referee Address is required" })} />
                </div>
                <div className={styles.group}>
                  <label htmlFor="refereeOccupation1">Referee One Occupation</label>
                  <input type="text" readOnly placeholder="Enter your Referee's Occupation" {...register("refereeOccupation1", { required: "Referee Occupation is required" })} />
                </div>
                <div className={styles.group}>
                  <label htmlFor="refereeRecomendation1">Referee One Recommendation</label>
                  <input
                    type="text"
                    readOnly
                    placeholder="Enter your Referee's Recommendation"
                    {...register("refereeRecomendation1", { required: "Referee's Recommendation is required" })}
                  />
                </div>
                <div className={styles.group}>
                  <label htmlFor="refereeName2">Referee Two Name</label>
                  <input type="text" readOnly placeholder="Enter your Referee Two Name" {...register("refereeName2", { required: "Name of Referee Two is required" })} />
                </div>
                <div className={styles.group}>
                  <label htmlFor="refereeAddress2">Referee Two Address</label>
                  <input type="text" readOnly placeholder="Enter your Refereee's Address" {...register("refereeAddress2", { required: "Referee Address is required" })} />
                </div>
                <div className={styles.group}>
                  <label htmlFor="refereeOccupation2">Referee Two Occupation</label>
                  <input type="text" readOnly placeholder="Enter your Referee's Occupation" {...register("refereeOccupation2", { required: "Referee Occupation is required" })} />
                </div>
                <div className={styles.group}>
                  <label htmlFor="refereeRecomendation2">Referee Two Recommendation</label>
                  <input
                    type="text"
                    readOnly
                    placeholder="Enter your Referee's Recommendation"
                    {...register("refereeRecomendation2", { required: "Referee's Recommendation is required" })}
                  />
                </div>
              </>
            ) : active === 5 ? (
              <>
                <div className={styles.group}>
                  <label htmlFor="address">Document</label>
                  {/* <input type="file" placeholder="Enter your Picture" onChange={handleFileChange2} /> */}
                </div>
              </>
            ) : (
              <>
                <h4>
                  The Status of your application is{" "}
                  <span>
                    <select
                      onChange={async (e) => {
                        try {
                          const newObj = { ...data, status: e.target.value };
                          await saveFormProgress(id, newObj);

                          toast.success("Application successfully! Kindly check back later");
                        } catch (error) {
                          console.log(error);
                          toast.error("Error saving form. Please try again.");
                        }
                      }}>
                      <option value={status}>{status}</option>
                      <option value="Processing">Processing</option>
                      <option value="Approved">Approved</option>
                    </select>
                  </span>
                </h4>
              </>
            )}

            <div className={styles.buttons}>
              {active !== 1 && <h2 onClick={() => setActive(active - 1)}>Previous</h2>}
              {active !== 6 && <h2 onClick={() => setActive(active + 1)}>Save & Continue</h2>}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
