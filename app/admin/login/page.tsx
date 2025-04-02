import { AdminLoginBody } from "@/components/admin-login";
import { AuthLayout } from "@/layouts/auth";
import React from "react";

const AdminLogin = () => {
  return (
    <AuthLayout>
      <AdminLoginBody />
    </AuthLayout>
  );
};

export default AdminLogin;
