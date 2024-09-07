import About from "@/components/about/About";
import Banner from "@/components/banner/Banner";
import Blog from "@/components/blog/Blog";

import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import HeaderMobile from "@/components/header/HeaderMobile";
import HeaderStyle1 from "@/components/header/HeaderStyle1";
import Portfolio from "@/components/portfolio/Portfolio";
import Price from "@/components/price/Price";
import Resume from "@/components/resume/Resume";
import ServicesStyle1 from "@/components/services/ServicesStyle1";

import Work from "@/components/work/Work";
import React from "react";

export const metadata = {
  title: "Junaid - Personal Portfolio Website",
};

const Home = () => {
  return (
    <>
      <HeaderMobile />
      <HeaderStyle1 />
      <Banner />
      <ServicesStyle1 />
      <Portfolio />
      {/* <About /> */}
      <Resume />
      {/* <Price /> */}

      <Work />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
