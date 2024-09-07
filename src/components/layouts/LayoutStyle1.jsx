import React from "react";
import FooterStyle1 from "../footer/Footer";
import HeaderStyle2 from "../header/HeaderStyle2";

const LayoutStyle1 = ({ children }) => {
  return (
    <>
      {/* <HeaderStyle2 /> */}
      {children}
      <FooterStyle1 />
    </>
  );
};

export default LayoutStyle1;
