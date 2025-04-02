import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Single } from "@/components/single";
import React from "react";

const SingleApplication = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <>
      <Header />
      <Single id={slug} />
      <Footer />
    </>
  );
};

export default SingleApplication;
