import Image from "next/image";
import Link from "next/link";
import React from "react";

const SinglePortfolio = ({ portfolio }) => {
  const { id, title, thumb, subTitle, arrowIcon } = portfolio;

  return (
    <>
      <div className="pf-item">
        <div className="overlay-content">
          <div
            className="image-container"
            style={{ width: "510px", height: "230px" }}
          >
            <Image
              src={thumb}
              alt="thumb"
              width={610}
              height={350}
              className="img-fluid"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="content">
            <div className="title">
              <span>{subTitle}</span>
              <h5>
                <Link href={`/portfolio/${id}`}>{title}</Link>
              </h5>
            </div>
            <Link href={`/portfolio/${id}`}>
              <i className={arrowIcon}></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePortfolio;
