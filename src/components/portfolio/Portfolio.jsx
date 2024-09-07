import React from "react";
import PortfolioData from "@/assets/jsonData/portfolio/PortfolioData.json";
import SinglePortfolio from "./SinglePortfolio";
import Image from "next/image";
import FactData from "@/assets/jsonData/fact/FactData.json";
import SingleFact from "../fact/SingleFact";
import shape1 from "@/assets/img/shape/1-light.png";
import shape10 from "@/assets/img/shape/10.png";

const Portfolio = () => {
  return (
    <>
      <div
        id="portfolio"
        className="portfolio-style-six-area default-padding-top"
      >
        <div className="shape-animated-right">
          <Image src={shape1} alt="Shape" />
        </div>
        <div className="container">
          <div className="heading-left">
            <div className="row align-center">
              <div className="col-lg-5">
                <div className="left-info">
                  <h5 className="sub-title">Recent Work</h5>
                  <h2 className="title">
                    Look at my portfolio and <br /> give me your feedback
                  </h2>
                  <div className="heading-shape">
                    <Image src={shape10} alt="Shape" />
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-6 offset-lg-1">
                                <div className="right-info">
                                    <div className="fun-factor-default">
                                        {FactData.map(data =>
                                            <SingleFact data={data} key={data.id} />
                                        )}
                                    </div>
                                </div>
                            </div> */}
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 gallery-content mb--15">
              <div className="magnific-mix-gallery masonary">
                <div id="portfolio-grid" className="gallery-items colums-3">
                  {PortfolioData.map((portfolio) => (
                    <SinglePortfolio portfolio={portfolio} key={portfolio.id} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
