"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { formLabels } from "@/utils/data";

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
  picture: string;
};

export const ApplyBody = () => {
  const [active, setActive] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDetails>();

  const submit: SubmitHandler<FormDetails> = (e) => {
    setActive(active + 1);
    console.log(e);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit(submit)}>
      <div className={styles.header}>
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
        </div>
        <div className={styles.right}>
          <div className={styles.form}>
            <div className={styles.indicatorBody}>
              <div className={styles.indicator} style={{ width: `${(active / 4) * 100}%` }} />
            </div>
            <div className={styles.formHeader}>
              <p>Step {active}/4</p>
              <h2>{formLabels[active - 1]}</h2>
            </div>
            {active === 1 ? (
              <>
                <div className={styles.double}>
                  <div className={styles.group}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" placeholder="Enter your First Name" {...register("fname", { required: "First Name is required" })} />
                    {errors.fname && <span className="error">{errors.fname.message}</span>}
                  </div>
                  <div className={styles.group}>
                    <label htmlFor="fname">Last Name</label>
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
            ) : active === 2 ? (
              <>
                <div className={styles.group}>
                  <label htmlFor="fname">Father&apos;s Full Name</label>
                  <input type="text" placeholder="Enter your First Name" {...register("fname", { required: "First Name is required" })} />
                  {errors.fname && <span className="error">{errors.fname.message}</span>}
                </div>
                <div className={styles.group}>
                  <label htmlFor="fname">Town of Origin</label>
                  <input type="text" placeholder="Enter your Last Name" {...register("lname", { required: "Last Name is required" })} />
                  {errors.lname && <span className="error">{errors.lname.message}</span>}
                </div>
                <div className={styles.group}>
                  <label htmlFor="fname">Occupation</label>
                  <input type="text" placeholder="Enter your Last Name" {...register("lname", { required: "Last Name is required" })} />
                  {errors.lname && <span className="error">{errors.lname.message}</span>}
                </div>
                <div className={styles.group}>
                  <label htmlFor="fname">Residential Address of Parents</label>
                  <input type="text" placeholder="Enter your Last Name" {...register("lname", { required: "Last Name is required" })} />
                  {errors.lname && <span className="error">{errors.lname.message}</span>}
                </div>
                <div className={styles.group}>
                  <label htmlFor="fname">Estimated Annual Income of Parents</label>
                  <input type="text" placeholder="Enter your Last Name" {...register("lname", { required: "Last Name is required" })} />
                  {errors.lname && <span className="error">{errors.lname.message}</span>}
                </div>
                <div className={styles.group}>
                  <label htmlFor="fname">State whether livng or dead</label>
                  <input type="text" placeholder="Enter your Last Name" {...register("lname", { required: "Last Name is required" })} />
                  {errors.lname && <span className="error">{errors.lname.message}</span>}
                </div>
              </>
            ) : active === 3 ? (
              <>
                <div className={styles.group}>
                  <label htmlFor="fname">How long has the applicant been in your department</label>
                  <input type="text" placeholder="Enter your Last Name" {...register("lname", { required: "Last Name is required" })} />
                  {errors.lname && <span className="error">{errors.lname.message}</span>}
                </div>
                <div className={styles.group}>
                  <label htmlFor="">Nature of Academic Programme</label>
                  <select name="" id="">
                    <option value="">Choose Option</option>
                    <option value="Remedial">Remedial</option>
                    <option value="Part-Time">Part-Time</option>
                    <option value="Full-Time">Full-Time</option>
                  </select>
                </div>
                <div className={styles.group}>
                  <label htmlFor="fname">Any Other Info</label>
                  <input type="text" placeholder="Enter your Last Name" {...register("lname", { required: "Last Name is required" })} />
                  {errors.lname && <span className="error">{errors.lname.message}</span>}
                </div>
                <div className={styles.group}>
                  <label htmlFor="fname">Name of the Dean/Hod</label>
                  <input type="text" placeholder="Enter your Last Name" {...register("lname", { required: "Last Name is required" })} />
                  {errors.lname && <span className="error">{errors.lname.message}</span>}
                </div>
                <div className={styles.group}>
                  <label htmlFor="fname">Rank</label>
                  <input type="text" placeholder="Enter your Last Name" {...register("lname", { required: "Last Name is required" })} />
                  {errors.lname && <span className="error">{errors.lname.message}</span>}
                </div>
              </>
            ) : (
              <>
                <div className={styles.group}>
                  <label htmlFor="fname">Referee One Name</label>
                  <input type="text" placeholder="Enter your Last Name" {...register("lname", { required: "Last Name is required" })} />
                  {errors.lname && <span className="error">{errors.lname.message}</span>}
                </div>
                <div className={styles.group}>
                  <label htmlFor="fname">Referee One Address</label>
                  <input type="text" placeholder="Enter your Last Name" {...register("lname", { required: "Last Name is required" })} />
                  {errors.lname && <span className="error">{errors.lname.message}</span>}
                </div>
                <div className={styles.group}>
                  <label htmlFor="fname">Referee One Occupation</label>
                  <input type="text" placeholder="Enter your Last Name" {...register("lname", { required: "Last Name is required" })} />
                  {errors.lname && <span className="error">{errors.lname.message}</span>}
                </div>
                <div className={styles.group}>
                  <label htmlFor="fname">Referee One Recommendation</label>
                  <input type="text" placeholder="Enter your Last Name" {...register("lname", { required: "Last Name is required" })} />
                  {errors.lname && <span className="error">{errors.lname.message}</span>}
                </div>
                <div className={styles.group}>
                  <label htmlFor="fname">Referee Two Name</label>
                  <input type="text" placeholder="Enter your Last Name" {...register("lname", { required: "Last Name is required" })} />
                  {errors.lname && <span className="error">{errors.lname.message}</span>}
                </div>
                <div className={styles.group}>
                  <label htmlFor="fname">Referee Two Address</label>
                  <input type="text" placeholder="Enter your Last Name" {...register("lname", { required: "Last Name is required" })} />
                  {errors.lname && <span className="error">{errors.lname.message}</span>}
                </div>
                <div className={styles.group}>
                  <label htmlFor="fname">Referee Two Occupation</label>
                  <input type="text" placeholder="Enter your Last Name" {...register("lname", { required: "Last Name is required" })} />
                  {errors.lname && <span className="error">{errors.lname.message}</span>}
                </div>
                <div className={styles.group}>
                  <label htmlFor="fname">Referee Two Recommendation</label>
                  <input type="text" placeholder="Enter your Last Name" {...register("lname", { required: "Last Name is required" })} />
                  {errors.lname && <span className="error">{errors.lname.message}</span>}
                </div>
              </>
            )}
            <div className={styles.buttons}>
              {active !== 1 && <h2 onClick={() => setActive(active - 1)}>Previous</h2>}
              <h2 onClick={() => setActive(active + 1)}>Next</h2>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
