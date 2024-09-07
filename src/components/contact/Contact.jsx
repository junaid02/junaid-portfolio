import React from "react";
import ContactForm from "../form/ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="contact-area shape-less default-padding overflow-hidden"
      >
        <h2 className="text-shade">Contact</h2>
        <div className="container">
          <div className="contact-content">
            <div className="row align-center">
              <div className="col-lg-4 offset-lg-1 info">
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
