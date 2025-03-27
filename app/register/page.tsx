import { LoginBody } from "@/components/login-body";
import { AuthLayout } from "@/layouts/auth";
import React from "react";

const Register = () => {
  return (
    <AuthLayout>
      <LoginBody page="Sign up" />
    </AuthLayout>
  );
};

export default Register;
