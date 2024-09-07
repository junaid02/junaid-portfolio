"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation"; // Next.js hooks
import { Link } from "react-scroll";

const HeaderStyle1 = () => {
  const pathname = usePathname(); // Get the current path
  const router = useRouter(); // Next.js router
  const searchParams = useSearchParams(); // Get the current query params

  // Effect to handle scrolling after the page loads
  useEffect(() => {
    // Check if the query parameter exists (like ?scroll=services)
    const scrollTo = searchParams.get("scroll");
    if (scrollTo && pathname === "/") {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname, searchParams]);

  // Handle navigation and scrolling
  const handleLinkClick = (to) => {
    if (pathname !== "/") {
      // If not on the home page, set a query parameter to indicate where to scroll
      router.push(`/?scroll=${to}`); // Navigate to home with scroll param
    } else {
      // If on the home page, scroll directly to the section
      const element = document.getElementById(to);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header className="header-fixed">
        <div className="f-flex">
          <div className="logo">
            <Link to="home" spy={true}>
              <div
                className="smooth-menu"
                onClick={() => handleLinkClick("home")}
                style={{ cursor: "pointer" }}
              >
                <h2>JA</h2>
              </div>
            </Link>
          </div>
          <div className="menu">
            <ul className="nav">
              <li>
                <Link className="smooth-menu" to="home" spy={true}>
                  <div
                    className="smooth-menu"
                    onClick={() => handleLinkClick("home")}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fas fa-home"></i>
                    <div className="menu-name">Home</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link className="smooth-menu" to="services" spy={true}>
                  <div
                    className="smooth-menu"
                    onClick={() => handleLinkClick("services")}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fas fa-cog"></i>
                    <div className="menu-name">Expertise</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link className="smooth-menu" to="portfolio" spy={true}>
                  <div
                    className="smooth-menu"
                    onClick={() => handleLinkClick("portfolio")}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fas fa-briefcase"></i>
                    <div className="menu-name">Portfolio</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link className="smooth-menu" to="resume" spy={true}>
                  <div
                    className="smooth-menu"
                    onClick={() => handleLinkClick("resume")}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fas fa-file-alt"></i>
                    <div className="menu-name">Resume</div>
                  </div>
                </Link>
              </li>
              <li>
                <Link className="smooth-menu" to="contact" spy={true}>
                  <div
                    className="smooth-menu"
                    onClick={() => handleLinkClick("contact")}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fas fa-comments"></i>
                    <div className="menu-name">Contact</div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderStyle1;
