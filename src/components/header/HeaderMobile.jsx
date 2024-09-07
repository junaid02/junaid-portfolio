"use client";
import React from "react";
import logo from "@/assets/img/logo.png";
import Image from "next/image";
import { Link } from "react-scroll";
import useSidebarMenu from "@/hooks/useSidebarMenu";
import useStickyMenu from "@/hooks/useStickyMenu";

const HeaderMobile = () => {
  const { isOpen, openMenu, closeMenu } = useSidebarMenu();
  const isMenuSticky = useStickyMenu();

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
                <h3 style={{ color: "black" }}>Junaid Ahmed</h3>
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
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="smooth-menu" to="services">
                    expertise
                  </Link>
                </li>
                <li>
                  <Link className="smooth-menu" to="portfolio">
                    portfolio
                  </Link>
                </li>
                {/* <li>
                  <Link className="smooth-menu" to="about">
                    about
                  </Link>
                </li> */}

                {/* <li>
                  <Link className="smooth-menu" to="blog">
                    blog
                  </Link>
                </li> */}
                <li>
                  <Link className="smooth-menu" to="resume">
                    resume
                  </Link>
                </li>

                <li>
                  <Link className="smooth-menu" to="contact">
                    contact
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
