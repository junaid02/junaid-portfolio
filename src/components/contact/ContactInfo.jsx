import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="content">
        <ul>
          <li className="contact-info-list wow fadeInUp">
            <div className="icon">
              <i className="fas fa-envelope-open-text"></i>
            </div>
            <div className="info">
              <p>Email</p>
              <h5>
                <a href="mailto:junaid.ahmed625@gmail.com">
                  junaid.ahmed625@gmail.com
                </a>
              </h5>
            </div>
          </li>
          <li className="contact-info-list wow fadeInUp" data-wow-delay="300ms">
            <div className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="info">
              <p>Address</p>
              <h5>
                Melbourne, <br /> Australia
              </h5>
            </div>
          </li>
          <li className="contact-info-list wow fadeInUp" data-wow-delay="500ms">
            <div className="icon">
              <i className="fas fa-headphones-alt"></i>
            </div>
            <div className="info">
              <p>Phone</p>
              <h5>
                <a href="tel:+61415626966">+61415626966</a>
              </h5>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactInfo;
