import { Banner } from "@/components/banner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { How } from "@/components/how";
import { Report } from "@/components/report";
import { Success } from "@/components/success";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Success />
      <How />
      <Report />
      <Footer />
    </>
  );
}
