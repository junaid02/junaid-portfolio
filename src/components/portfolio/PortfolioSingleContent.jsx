"use client";
import React, { useState } from "react";
import Image from "next/image";
import SocialShareStyle2 from "../utilities/SocialShareStyle2";
import { useParams } from "next/navigation";
import PortfolioData from "@/assets/jsonData/portfolio/PortfolioData.json";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // Lightbox styles

const PortfolioSingleContent = () => {
  const params = useParams();
  const { id } = params;

  // Find the portfolio item by id
  const portfolioItem = PortfolioData.find((item) => item.id.toString() === id);

  const [isOpen, setIsOpen] = useState(false); // To control lightbox state
  const [photoIndex, setPhotoIndex] = useState(0); // To control the current image index

  if (!portfolioItem) return <div>Project not found</div>;

  // Combine the thumb image and other images into one array
  const allImages = [portfolioItem.thumb, ...portfolioItem.images];

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <div className="project-details-area default-padding portfolio-padding">
        <div className="container">
          <div className="project-details-items">
            <h2>
              <a
                href="https://www.pkdreamers.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#007bff", textDecoration: "underline" }}
              >
                {portfolioItem.title}
              </a>
            </h2>
            <p>{portfolioItem.description}</p>
            <ul className="check-list mt-40 mb-40">
              {portfolioItem.responsibilities.map((responsibility, index) => (
                <li key={index}>
                  <h4>{responsibility.title}</h4>
                  <p>{responsibility.description}</p>
                </li>
              ))}
            </ul>

            {/* Main Thumbnail Image - Clickable for Lightbox */}
            <div
              className="project-thumb"
              onClick={() => handleImageClick(0)} // Set the thumb index to 0
              style={{ cursor: "pointer" }}
            >
              <Image
                src={portfolioItem.thumb}
                alt={portfolioItem.title}
                width={1175}
                height={515}
              />
            </div>

            <div className="top-info">
              <div className="row">
                <div className="col-xl-12 left-info">
                  <div className="project-info mt-md-50 mt-xs-40 mb-40">
                    <div className="content">
                      <ul className="project-basic-info">
                        <li>
                          Client <span>{portfolioItem.client}</span>
                        </li>
                        <li>
                          Project Type <span>{portfolioItem.projectType}</span>
                        </li>
                        <li>
                          Date <span>{portfolioItem.date}</span>
                        </li>
                        <li>
                          Address <span>{portfolioItem.address}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="main-content mt-40">
              <div className="row">
                {portfolioItem.images.map((image, index) => (
                  <div
                    className="col-lg-6 col-md-6"
                    key={index}
                    onClick={() => handleImageClick(index + 1)} // Add 1 to index to account for thumb
                    style={{ cursor: "pointer" }}
                  >
                    <Image
                      src={image}
                      alt="Thumb"
                      width={600} // Fixed width
                      height={400} // Fixed height
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox for all images */}
      {isOpen && (
        <Lightbox
          mainSrc={allImages[photoIndex]} // Display the current image
          nextSrc={allImages[(photoIndex + 1) % allImages.length]} // Next image
          prevSrc={
            allImages[(photoIndex + allImages.length - 1) % allImages.length]
          } // Previous image
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + allImages.length - 1) % allImages.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % allImages.length)
          }
          // Use native img tag inside lightbox instead of next/image
          imageLoadErrorMessage="Image failed to load"
          loader={
            <img
              src={allImages[photoIndex]} // Direct img tag
              alt="Portfolio Image"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          }
        />
      )}
    </>
  );
};

export default PortfolioSingleContent;
