import { LoginBody } from "@/components/login-body";
import { AuthLayout } from "@/layouts/auth";
import React from "react";

const Login = () => {
  return (
    <AuthLayout>
      <LoginBody page="Sign in" />
    </AuthLayout>
  );
};

export default Login;
