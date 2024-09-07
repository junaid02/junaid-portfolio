"use client";

import useSidebarMenu from "@/hooks/useSidebarMenu";
import useStickyMenu from "@/hooks/useStickyMenu";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation"; // Next.js hooks
import { Link } from "react-scroll";

const HeaderMobile = () => {
  const { isOpen, openMenu, closeMenu } = useSidebarMenu();
  const isMenuSticky = useStickyMenu();

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
    console.log("here");
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
      <header id="home">
        <nav
          className={`navbar mobile-sidenav onepage-menu mobile-nav-only attr-border navbar-sticky navbar-default validnavs navbar-fixed dark on no-full force-sticky ${
            isOpen ? "navbar-responsive" : ""
          } ${isMenuSticky ? "" : "no-background"}`}
        >
          <div className="container d-flex justify-content-between align-items-center">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
                onClick={openMenu}
              >
                <i className="fa fa-bars"></i>
              </button>
              <Link className="navbar-brand" to="home">
                <div
                  className="smooth-menu"
                  onClick={() => handleLinkClick("home")}
                  style={{ cursor: "pointer" }}
                >
                  <h3 style={{ color: "black" }}>Junaid Ahmed</h3>
                </div>
              </Link>
            </div>
            <div
              className={`collapse navbar-collapse collapse-mobile ${
                isOpen ? "show" : ""
              }`}
              id="navbar-menu"
            >
              <h3 style={{ color: "black" }}>Junaid Ahmed</h3>
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
                onClick={closeMenu}
              >
                <i className="fa fa-times"></i>
              </button>
              <ul
                className="nav navbar-nav navbar-right"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li>
                  <Link className="smooth-menu" to="home">
                    <div
                      className="smooth-menu"
                      onClick={() => handleLinkClick("home")}
                      style={{ cursor: "pointer" }}
                    >
                      Home
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="smooth-menu" to="services">
                    <div
                      className="smooth-menu"
                      onClick={() => handleLinkClick("services")}
                      style={{ cursor: "pointer" }}
                    >
                      expertise
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className="smooth-menu" to="portfolio">
                    <div
                      className="smooth-menu"
                      onClick={() => handleLinkClick("portfolio")}
                      style={{ cursor: "pointer" }}
                    >
                      portfolio
                    </div>
                  </Link>
                </li>

                <li>
                  <Link className="smooth-menu" to="resume">
                    <div
                      className="smooth-menu"
                      onClick={() => handleLinkClick("resume")}
                      style={{ cursor: "pointer" }}
                    >
                      resume
                    </div>
                  </Link>
                </li>

                <li>
                  <Link className="smooth-menu" to="contact">
                    <div
                      className="smooth-menu"
                      onClick={() => handleLinkClick("contact")}
                      style={{ cursor: "pointer" }}
                    >
                      contact
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`overlay-screen ${isOpen ? "opened" : ""}`}
            onClick={closeMenu}
          ></div>
        </nav>
      </header>
    </>
  );
};

export default HeaderMobile;
