/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { formLabels } from "@/utils/data";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { auth, db } from "@/utils/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
  idCard: FileList;
  admissionLetter: FileList;
  referee: FileList;
  picture: FileList;
  document: FileList;
};

export const ApplyBody = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const formRef2 = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(1);
  const [userId, setUserId] = useState("");
  const [status, setStatus] = useState("");
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<FormDetails>();
  const formValues = useWatch({ control });
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid); // User is logged in, set userId
        const fetchData = async () => {
          const savedData = await loadFormProgress(user.uid);
          if (savedData) {
            Object.entries(savedData).forEach(([key, value]) => setValue(key as keyof FormDetails, value));
            if (savedData.status) setStatus(savedData.status);
          }
        };
        fetchData();
      } else {
        toast.error("You have to be logged in to apply");
        setTimeout(() => {
          router.push("/login");
        }, 3000);
      }
    });

    return () => unsubscribe();
  }, [router, setValue]);

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

  useEffect(() => {
    if (userId && Object.keys(formValues).length > 0) {
      const timeout = setTimeout(() => {
        saveFormProgress(userId, formValues);
      }, 1000); // Save after 1s delay

      // Cleanup function to clear the timeout if formValues change again
      return () => clearTimeout(timeout);
    }
  }, [formValues, userId]);

  const uploadAndAssign = async (fileList: FileList | undefined): Promise<string> => {
    if (!fileList || fileList.length === 0) return "";
    const uploadedUrl = await uploadToCloudinary(fileList[0]);
    if (!uploadedUrl) {
      throw new Error(`Failed to upload `);
    }
    return uploadedUrl;
  };

  const submit: SubmitHandler<FormDetails> = async (e) => {
    try {
      const [picture, document, admissionLetter, idCard, referee] = await Promise.all([
        uploadAndAssign(e.picture),
        uploadAndAssign(e.document),
        uploadAndAssign(e.admissionLetter),
        uploadAndAssign(e.idCard),
        uploadAndAssign(e.referee),
      ]);

      const newObj = {
        ...e,
        picture,
        document,
        admissionLetter,
        idCard,
        referee,
        status: "Applied",
        userId,
      };

      await saveFormProgress(userId, newObj);
      toast.success("Application successful! Kindly check back later");
    } catch (error) {
      console.error(error);
      toast.error("Error saving form. Please try again.");
    }
  };

  const downloadPDF = async () => {
    if (!formRef.current) return;

    const canvas = await html2canvas(formRef.current);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 190; // Adjust width
    const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
    pdf.save("form.pdf"); // Download file
  };

  const downloadPDF2 = async () => {
    if (!formRef2.current) return;

    const canvas = await html2canvas(formRef2.current);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 190; // Adjust width
    const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

    pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
    pdf.save("referee.pdf"); // Download file
  };

  const uploadToCloudinary = async (file: File): Promise<string | null> => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "scholarship"); // from Cloudinary settings
    formData.append("cloud_name", "temfad");

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/temfad/image/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      return data.secure_url; // this is the hosted image URL
    } catch (err) {
      console.error("Upload failed:", err);
      return null;
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(submit)}>
      <div className={styles.header}>
        <Image src="/images/graduateLogo.png" width={60} height={60} alt="Logo" />
        <p>Application Form for Education Support Scheme</p>
        <h2>Joseph Adaramola Education Foundation(JAEF)</h2>
      </div>
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
            <h3 onClick={() => setActive(8)} className={active === 8 ? styles.active : ""}>
              Status
            </h3>
          ) : null}
        </div>
        <div className={styles.right}>
          <div className={styles.form}>
            <div className={styles.indicatorBody}>
              <div className={styles.indicator} style={{ width: `${(active / 7) * 100}%` }} />
            </div>
            <div className={styles.formHeader}>
              {active !== 8 && <p>Step {active}/7</p>}
              <h2>{formLabels[active - 1]}</h2>
            </div>
            {active === 1 ? (
              <>
                <Image src="/images/ad.jpeg" width={750} height={900} alt="Ad" />
              </>
            ) : active === 2 ? (
              <>
                <div className={styles.declaration}>
                  <h2>PARTICIPANT CONSENT CLAUSE FOR JAEF UNDERGRADUATE SCHOLARSHIP PROGRAM</h2>
                  <p>
                    I hereby affirm that I have attained the age of 18years and understand that Joseph Adaramola Education Foundation(JAEF) may collect, process, store and use my
                    personal data including my name, email address, phone number, date of birth, age, academic records, transcripts and other related data for the purpose of
                    processing my application, and participating in the Joseph Adaramola Education Foundation(JAEF) and for other lawful purposes in line with the Nigeria Data
                    Protection Act, 2023 (NDPA 2023).
                  </p>
                  <p>
                    I take cognizance of my rights under the NDPA 2023 with regards to my personal data including the right to access, rectify, request for deletion and the right
                    to object to the processing of such data and ultimately the right to withdraw this consent.
                  </p>
                  {/* <p>I also confirm that I have read and understood the SEPLAT Privacy Notice.</p> */}
                  <p>
                    In consideration of all the information stated herein that is within my knowledge, I hereby consent to the collection, processing, use and transfer of my
                    personal data within or outside Nigeria, for the purposes stated herein.
                  </p>
                  <label>
                    <input type="checkbox" />I agree
                  </label>
                </div>
              </>
            ) : active === 3 ? (
              <>
                <div className={styles.double}>
                  <div className={styles.group}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" placeholder="Enter your First Name" {...register("fname", { required: "First Name is required" })} />
                    {errors.fname && <span className="error">{errors.fname.message}</span>}
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" placeholder="Enter your Last Name" {...register("lname", { required: "Last Name is required" })} />
                    {errors.lname && <span className="error">{errors.lname.message}</span>}
                  </div>
                </div>
                <div className={styles.double}>
                  <div className={styles.group}>
                    <label htmlFor="sex">Sex</label>
                    <input type="text" placeholder="Enter your Sex" {...register("sex", { required: "Sex is required" })} />
                    {errors.sex && <span className="error">{errors.sex.message}</span>}
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" placeholder="Enter your Phone Number" {...register("phoneNumber", { required: "Phone Number is required", maxLength: 11 })} />
                    {errors.phoneNumber && <span className="error">{errors.phoneNumber.message}</span>}
                  </div>
                </div>
                <div className={styles.double}>
                  <div className={styles.group}>
                    <label htmlFor="age">Age</label>
                    <input type="number" placeholder="Enter your Age" {...register("age", { required: "Age is required" })} />
                    {errors.age && <span className="error">{errors.age.message}</span>}
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="sedobx">Date of Birth</label>
                    <input type="date" placeholder="Enter your First Name" {...register("dob", { required: "Date of Birth is required" })} />
                    {errors.dob && <span className="error">{errors.dob.message}</span>}
                  </div>
                </div>
                <div className={styles.double}>
                  <div className={styles.group}>
                    <label htmlFor="town">Town of Origin</label>
                    <input type="text" placeholder="Enter your Town of Origin" {...register("town", { required: "Town of Origin is required" })} />
                    {errors.town && <span className="error">{errors.town.message}</span>}
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="address">Address</label>
                    <input type="text" placeholder="Enter your Address" {...register("address", { required: "Address is required" })} />
                    {errors.address && <span className="error">{errors.address.message}</span>}
                  </div>
                </div>
                <div className={styles.double}>
                  <div className={styles.group}>
                    <label htmlFor="institution">Present Institution</label>
                    <input type="text" placeholder="Enter your Present Institution" {...register("institution", { required: "Present Institution is required" })} />
                    {errors.institution && <span className="error">{errors.institution.message}</span>}
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="address">Matric No.</label>
                    <input type="text" placeholder="Enter your Matric No." {...register("matricNo", { required: "Matric No. is required" })} />
                    {errors.matricNo && <span className="error">{errors.matricNo.message}</span>}
                  </div>
                </div>
                <div className={styles.double}>
                  <div className={styles.group}>
                    <label htmlFor="address">Course of Study</label>
                    <input type="text" placeholder="Enter your Course of Study" {...register("course", { required: "Course of Study is required" })} />
                    {errors.course && <span className="error">{errors.course.message}</span>}
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="address">Present Level/CGPA</label>
                    <input type="text" placeholder="400l/4.79" {...register("cgpa", { required: "Present Level/CGPA is required" })} />
                    {errors.cgpa && <span className="error">{errors.cgpa.message}</span>}
                  </div>
                </div>
                <div className={styles.double}>
                  <div className={styles.group}>
                    <label htmlFor="address">Duration of Course</label>
                    <input type="text" placeholder="Enter your Duration of Course" {...register("duration", { required: "Duration is required" })} />
                    {errors.duration && <span className="error">{errors.duration.message}</span>}
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="address">Date of Completion</label>
                    <input type="text" placeholder="Enter your Date of Completion" {...register("date", { required: "Date of Completion is required" })} />
                    {errors.date && <span className="error">{errors.date.message}</span>}
                  </div>
                </div>
                <div className={styles.group}>
                  <label htmlFor="address">Degree in View</label>
                  <input type="text" placeholder="Enter your Degree in View" {...register("degree", { required: "Degree in View is required" })} />
                  {errors.degree && <span className="error">{errors.degree.message}</span>}
                </div>
                <div className={styles.group}>
                  <label htmlFor="address">Picture</label>
                  <input type="file" placeholder="Enter your Picture" {...register("picture", { required: "Picture is required" })} />
                  {errors.picture && <span className="error">{errors.picture.message}</span>}
                </div>
              </>
            ) : active === 4 ? (
              <>
                <div className={styles.group}>
                  <label htmlFor="fatherFullName">Father&apos;s Full Name</label>
                  <input type="text" placeholder="Enter your Father's Full Name" {...register("fatherFullName", { required: "Father's Full Name is required" })} />
                  {errors.fatherFullName && <span className="error">{errors.fatherFullName.message}</span>}
                </div>
                <div className={styles.group}>
                  <label htmlFor="fatherTown">Town of Origin</label>
                  <input type="text" placeholder="Enter your Father's Town" {...register("fatherTown", { required: "Father's Town is required" })} />
                  {errors.fatherTown && <span className="error">{errors.fatherTown.message}</span>}
                </div>
                <div className={styles.group}>
                  <label htmlFor="fatherOccupation">Occupation</label>
                  <input type="text" placeholder="Enter your Father's Occupation" {...register("fatherOccupation", { required: "Father's Occupation is required" })} />
                  {errors.fatherOccupation && <span className="error">{errors.fatherOccupation.message}</span>}
                </div>
                <div className={styles.group}>
                  <label htmlFor="fatherAddress">Residential Address of Parents</label>
                  <input type="text" placeholder="Enter Address" {...register("fatherAddress", { required: "Address is required" })} />
                  {errors.fatherAddress && <span className="error">{errors.fatherAddress.message}</span>}
                </div>
                <div className={styles.group}>
                  <label htmlFor="fatherIncome">Estimated Annual Income of Parents</label>
                  <input type="text" placeholder="Enter  Annual Income" {...register("fatherIncome", { required: "Annual Income is required" })} />
                  {errors.fatherIncome && <span className="error">{errors.fatherIncome.message}</span>}
                </div>
                <div className={styles.group}>
                  <label htmlFor="fatherAlive">State whether living or dead</label>
                  <input type="text" placeholder="Enter  Field" {...register("fatherAlive", { required: "Field is required" })} />
                  {errors.fatherAlive && <span className="error">{errors.fatherAlive.message}</span>}
                </div>
              </>
            ) : active === 5 ? (
              <>
                <div className={styles.department}>
                  <div className={styles.group}>
                    <label htmlFor="long">How long has the applicant been in your department</label>
                    <input type="text" placeholder="Enter field" {...register("long", { required: "Field is required" })} />
                    {errors.long && <span className="error">{errors.long.message}</span>}
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
                    <input type="text" placeholder="Enter any other info" {...register("otherInfo", { required: "Field is required" })} />
                    {errors.otherInfo && <span className="error">{errors.otherInfo.message}</span>}
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="hodName">Name of the Dean/Hod</label>
                    <input type="text" placeholder="Enter Name of Dean/HOD" {...register("hodName", { required: "Name of HOD/Dean  is required" })} />
                    {errors.hodName && <span className="error">{errors.hodName.message}</span>}
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="rank">Rank</label>
                    <input type="text" placeholder="Enter Rank" {...register("rank", { required: "Rank  is required" })} />
                    {errors.rank && <span className="error">{errors.rank.message}</span>}
                  </div>
                </div>
                <p>
                  Click to download form: <span onClick={() => downloadPDF()}>Print</span>
                </p>
                <p>Note: You would have to upload a fully signed and stamped form at the last step to be able to apply</p>
              </>
            ) : active === 6 ? (
              <>
                <div className={styles.department}>
                  <h2>Referee One</h2>
                  <div className={styles.group}>
                    <label htmlFor="refereeName1">Name</label>
                    <input type="text" placeholder="Enter your Name" {...register("refereeName1", { required: "Name of is required" })} />
                    {errors.refereeName1 && <span className="error">{errors.refereeName1.message}</span>}
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="refereeAddress1">Address</label>
                    <input type="text" placeholder="Enter your  Address" {...register("refereeAddress1", { required: "Address is required" })} />
                    {errors.refereeAddress1 && <span className="error">{errors.refereeAddress1.message}</span>}
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="refereeOccupation1">Occupation</label>
                    <input type="text" placeholder="Enter your  Occupation" {...register("refereeOccupation1", { required: " Occupation is required" })} />
                    {errors.refereeOccupation1 && <span className="error">{errors.refereeOccupation1.message}</span>}
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="refereeRecomendation1">Recommendation</label>
                    <input type="text" placeholder="Enter your  Recommendation" {...register("refereeRecomendation1", { required: " Recommendation is required" })} />
                    {errors.refereeRecomendation1 && <span className="error">{errors.refereeRecomendation1.message}</span>}
                  </div>
                  <h2>Referee Two</h2>
                  <div className={styles.group}>
                    <label htmlFor="refereeName2">Name</label>
                    <input type="text" placeholder="Enter your Name" {...register("refereeName2", { required: "Name  is required" })} />
                    {errors.refereeName2 && <span className="error">{errors.refereeName2.message}</span>}
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="refereeAddress2">Address</label>
                    <input type="text" placeholder="Enter your  Address" {...register("refereeAddress2", { required: "Referee Address is required" })} />
                    {errors.refereeAddress2 && <span className="error">{errors.refereeAddress2.message}</span>}
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="refereeOccupation2">Occupation</label>
                    <input type="text" placeholder="Enter your  Occupation" {...register("refereeOccupation2", { required: "Referee Occupation is required" })} />
                    {errors.refereeOccupation2 && <span className="error">{errors.refereeOccupation2.message}</span>}
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="refereeRecomendation2">Recommendation</label>
                    <input type="text" placeholder="Enter your  Recommendation" {...register("refereeRecomendation2", { required: " Recommendation is required" })} />
                    {errors.refereeRecomendation2 && <span className="error">{errors.refereeRecomendation2.message}</span>}
                  </div>
                </div>
                <p>
                  Click to download form: <span onClick={() => downloadPDF2()}>Print</span>
                </p>
                <p>Note: You would have to upload a fully signed and stamped form at the last step to be able to apply</p>
              </>
            ) : active === 7 ? (
              <>
                <div className={styles.group}>
                  <label htmlFor="address">Dean/HOD Attestation form</label>
                  <input type="file" placeholder="Enter your Picture" {...register("document", { required: "Attestation Form is required" })} />
                </div>
                <div className={styles.group}>
                  <label htmlFor="address">ID Card</label>
                  <input type="file" placeholder="Enter your Picture" {...register("idCard", { required: "ID Card is required" })} />
                </div>
                <div className={styles.group}>
                  <label htmlFor="address">Admission Letter</label>
                  <input type="file" placeholder="Enter your Picture" {...register("admissionLetter", { required: "Admission Letter is required" })} />
                </div>
                <div className={styles.group}>
                  <label htmlFor="address">Referee Form</label>
                  <input type="file" placeholder="Enter your Picture" {...register("referee", { required: "Referee Form is required" })} />
                </div>
              </>
            ) : (
              <>
                <h4>The Status of your application is {status}</h4>
              </>
            )}
            {active === 7 ? (
              <button>Submit</button>
            ) : active === 8 ? null : (
              <div className={styles.buttons}>
                {active !== 1 && <h2 onClick={() => setActive(active - 1)}>Previous</h2>}
                <h2 onClick={() => setActive(active + 1)}>{active === 1 || active === 2 ? "Next" : "Save & Continue"} </h2>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={`${styles.downloadable} hiddenForPDF`} ref={formRef}>
        <h2>Joseph Adaramola Education Foundation(JAEF)</h2>
        <h3>Attestation by Applicant's Dean / HOD</h3>
        <div className={styles.department}>
          <div className={styles.double}>
            <div className={styles.group}>
              <label htmlFor="long">First Name</label>
              <input type="text" placeholder="" {...register("fname")} />
            </div>
            <div className={styles.group}>
              <label htmlFor="long">Last Name</label>
              <input type="text" placeholder="" {...register("lname")} />
            </div>
          </div>
          <div className={styles.group}>
            <label htmlFor="long">Gender</label>
            <input type="text" placeholder="" {...register("sex")} />
          </div>
          <div className={styles.group}>
            <label htmlFor="long">Department</label>
            <input type="text" placeholder="" {...register("course")} />
          </div>
          <div className={styles.group}>
            <label htmlFor="long">Matric No.</label>
            <input type="text" placeholder="" {...register("matricNo")} />
          </div>
          <div className={styles.group}>
            <label htmlFor="long">Level/CGPA</label>
            <input type="text" placeholder="" {...register("cgpa")} />
          </div>
          <div className={styles.group}>
            <label htmlFor="long">How long has the applicant been in your department</label>
            <input type="text" placeholder="" />
          </div>
          <div className={styles.group}>
            <label htmlFor="">Nature of Academic Programme</label>
            <input type="text" placeholder="" />
          </div>
          <div className={styles.group}>
            <label htmlFor="otherInfo">Any Other Info</label>
            <input type="text" placeholder="" />
          </div>
          <div className={styles.group}>
            <label htmlFor="hodName">Name of the Dean/Hod</label>
            <input type="text" placeholder="" />
          </div>
          <div className={styles.group}>
            <label htmlFor="rank">Rank</label>
            <input type="text" placeholder="" />
          </div>
          <div className={styles.signature}>
            <p>Stamp and Signature</p>
          </div>
        </div>
      </div>
      <div className={`${styles.downloadable} hiddenForPDF`} ref={formRef2}>
        <h2>Joseph Adaramola Education Foundation(JAEF)</h2>
        <h3>Attestation by Referees</h3>
        <div className={styles.department}>
          <h2>Referee One</h2>
          <div className={styles.group}>
            <label htmlFor="refereeName1"> Name</label>
            <input type="text" placeholder="" />
          </div>
          <div className={styles.group}>
            <label htmlFor="refereeAddress1"> Address</label>
            <input type="text" placeholder="" />
          </div>
          <div className={styles.group}>
            <label htmlFor="refereeOccupation1"> Occupation</label>
            <input type="text" placeholder="" />
          </div>
          <div className={styles.group}>
            <label htmlFor="refereeRecomendation1"> Recommendation</label>
            <input type="text" />
          </div>
          <div className={styles.signature}>
            <p> Signature and Date</p>
          </div>
          <h2>Referee Two</h2>
          <div className={styles.group}>
            <label htmlFor="refereeName2"> Name</label>
            <input type="text" />
          </div>
          <div className={styles.group}>
            <label htmlFor="refereeAddress2"> Address</label>
            <input type="text" />
          </div>
          <div className={styles.group}>
            <label htmlFor="refereeOccupation2"> Occupation</label>
            <input type="text" />
          </div>
          <div className={styles.group}>
            <label htmlFor="refereeRecomendation2"> Recommendation</label>
            <input type="text" />
          </div>
          <div className={styles.signature}>
            <p> Signature and Date</p>
          </div>
        </div>
      </div>
    </form>
  );
};
