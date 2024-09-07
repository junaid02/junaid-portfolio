import React from "react";
import SocialShare from "../utilities/SocialShare";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <ul className="footer-social">
                <SocialShare />
              </ul>
            </div>
            <div className="col-lg-6 text-end">
              <p>
                &copy; {new Date().getFullYear()} Junaid Ahmed. All Rights
                Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
