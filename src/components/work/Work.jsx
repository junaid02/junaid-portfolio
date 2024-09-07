"use client";
import React, { useEffect } from "react";
import shape16 from "@/assets/img/shape/16-light.png";
import illustration2 from "@/assets/img/illustration/2.png";
import Image from "next/image";
import { Link } from "react-scroll";

const Work = () => {
  useEffect(() => {
    document.body.classList.add("bg-fixed");

    return () => {
      document.body.classList.remove("bg-fixed");
    };
  }, []);

  return (
    <>
      {/* <div className="work-available-area text-center box-layout bg-light default-padding">
        <div className="shape-right-top-mini">
          <Image src={shape16} alt="illustration" />
        </div>
        <div className="shape-illustration">
          <Image src={illustration2} alt="illustration" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="work-available">
                <h2 className="title">
                  {`I'm`} <strong>available</strong> for <br /> freelance work
                </h2>
                <Link
                  className="btn btn-md circle btn-theme smooth-menu"
                  to="contact"
                  spy={true}
                >
                  Hire me now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Work;
