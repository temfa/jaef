import { AboutBanner } from "@/components/about-banner";
import { AboutBody } from "@/components/about-body";
import { Footer } from "@/components/footer";
import React from "react";

const About = () => {
  return (
    <>
      <AboutBanner text="About J.A.E.Fs" />
      <AboutBody />
      <Footer />
    </>
  );
};

export default About;
