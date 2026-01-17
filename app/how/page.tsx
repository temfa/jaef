import { AboutBanner } from "@/components/about-banner";
import { Footer } from "@/components/footer";
import { Guidelines } from "@/components/guidelines";
import { Header } from "@/components/header";
import React from "react";

const How = () => {
  return (
    <>
      <Header />
      <AboutBanner text="Guidelines of Operation" />
      <Guidelines />
      <Footer />
    </>
  );
};

export default How;
