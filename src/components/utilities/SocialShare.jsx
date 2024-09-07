import Link from "next/link";
import React from "react";

const SocialShare = () => {
  return (
    <>
      <li className="ms-5">
        <Link
          className="linkedin"
          href="https://www.linkedin.com/in/junaid-ahmed625/"
          target="_blank"
        >
          <i className="fab fa-linkedin-in"></i>
        </Link>
      </li>
    </>
  );
};

export default SocialShare;
