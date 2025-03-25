import { AboutBanner } from "@/components/about-banner";
import { Footer } from "@/components/footer";
import { Guidelines } from "@/components/guidelines";
import React from "react";

const How = () => {
  return (
    <>
      <AboutBanner text="Guidelines of Operation" />
      <Guidelines />
      <Footer />
    </>
  );
};

export default How;
