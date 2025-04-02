"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { SubmitHandler, useForm } from "react-hook-form";
import Loader from "../loader";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type Form = {
  email: string;
  password: string;
};

export const AdminLoginBody = () => {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Form>();
  const router = useRouter();

  const submit: SubmitHandler<Form> = (e) => {
    console.log(e);
    setLoading(true);
    setTimeout(() => {
      if (e.email === "admin@gmail.com" && e.password === "Password1!") router.push("/admin/applications");
      else toast.error("Invalid Credentials");
      setLoading(false);
    }, 3000);
  };
  return (
    <div className={styles.container}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Admin Login</h2>
          <p>Please login to continue to your account</p>
        </div>
        <form onSubmit={handleSubmit(submit)} className={styles.form}>
          <div className={styles.group}>
            <label htmlFor="email">Email</label>
            <div>
              <input type="email" placeholder="Enter your Email" {...register("email", { required: "Email is Required" })} />
              {errors.email && <span className="error">{errors.email.message}</span>}
            </div>
          </div>
          <div className={styles.group}>
            <label htmlFor="password">Password</label>
            <div>
              <input type="password" placeholder="Enter your Password" {...register("password", { required: "Password is Required" })} />
              {errors.password && <span className="error">{errors.password.message}</span>}
            </div>
          </div>
          {loading ? <Loader /> : <button type="submit">Sign In</button>}
        </form>
      </div>
    </div>
  );
};
