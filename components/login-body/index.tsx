"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/utils/firebase";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import Loader from "../loader";

type FormDetails = {
  matricNo: string;
  email: string;
  password: string;
};

export const LoginBody = ({ page }: { page: string }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDetails>();

  const submit: SubmitHandler<FormDetails> = (e) => {
    setLoading(true);
    if (page === "Sign up") {
      createUserWithEmailAndPassword(auth, e.email, e.password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          const userId = user.uid;
          const docRef = doc(db, "users", userId);

          const payload = {
            email: e.email,
            matricNo: e.matricNo,
          };

          setDoc(docRef, payload)
            .then(() => {
              router.push("/apply");
              setLoading(false);
            })
            .catch((error) => {
              setLoading(false);
              toast.error(error);
            });
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);
          setLoading(false);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, e.email, e.password)
        .then(() => {
          // Signed in
          // const user = userCredential.user;

          setLoading(false);
          router.push("/apply");
          // ...
        })
        .catch((error) => {
          setLoading(false);
          // const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);
        });
    }
  };

  return (
    <div className={styles.container}>
      {page === "Sign up" ? (
        <div className={styles.header}>
          <h2>Sign Up</h2>
          <p>Please fill to create an account</p>
        </div>
      ) : (
        <div className={styles.header}>
          <h2>Sign In</h2>
          <p>Please login to continue to your account.</p>
        </div>
      )}
      {page === "Sign up" && (
        <div className={styles.group}>
          <label htmlFor="matricNo">Matric Number</label>
          <div>
            <input type="text" placeholder="Enter your Matric Number" {...register("matricNo", { required: "Matric Number is Required" })} />
            {errors.matricNo && <span className="error">{errors.matricNo.message}</span>}
          </div>
        </div>
      )}
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
        {loading ? <Loader /> : <button type="submit">{page}</button>}
        {page === "Sign up" ? (
          <p>
            Already have an account?{" "}
            <span>
              <Link href="/login">Login</Link>
            </span>{" "}
          </p>
        ) : (
          <p>
            Don&apos;t have an account?{" "}
            <span>
              <Link href="/register">Sign Up</Link>
            </span>{" "}
          </p>
        )}
      </form>
    </div>
  );
};
