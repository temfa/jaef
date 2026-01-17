import { AboutBanner } from "@/components/about-banner";
import { AboutBody } from "@/components/about-body";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import React from "react";

const About = () => {
  return (
    <>
      <Header />
      <AboutBanner text="About J.A.E.Fs" />
      <AboutBody />
      <Footer />
    </>
  );
};

export default About;
