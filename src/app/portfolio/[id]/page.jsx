import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutStyle1 from "@/components/layouts/LayoutStyle1";
import PortfolioSingleContent from "@/components/portfolio/PortfolioSingleContent";
import React from "react";
import HeaderMobile from "@/components/header/HeaderMobile";
import HeaderStyle1 from "@/components/header/HeaderStyle1";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "pkdreamers - Developed by Junaid Ahmed",
};

const PortfolioSingle = () => {
  return (
    <>
      <HeaderMobile />
      <HeaderStyle1 />
      {/* <BreadCrumb breadCrumb="portfolio-single" title="Portfolio Single" /> */}
      <PortfolioSingleContent />
      <Footer />
    </>
  );
};

export default PortfolioSingle;
