import React from "react";
import shape14 from "@/assets/img/shape/14.png";
import Image from "next/image";
import ResumeData from "@/assets/jsonData/resume/ResumeData.json";
import Education from "./Education";
import Experience from "./Experience";
import SingleSkill from "../skills/SingleSkill";

const Resume = () => {
  return (
    <>
      <div id="resume" className="resume-area default-padding-top">
        <div className="shape-right-top-extra">
          <Image src={shape14} alt="Shape" />
        </div>
        <div className="container">
          <div className="experience-content-box">
            <div className="row">
              <div className="col-xl-10 offset-xl-1">
                <div
                  className="nav nav-tabs text-center resume-tab-navs"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active"
                    id="nav-id-1"
                    data-bs-toggle="tab"
                    data-bs-target="#tab1"
                    type="button"
                    role="tab"
                    aria-controls="tab1"
                    aria-selected="true"
                  >
                    Biography <strong>01</strong>
                  </button>

                  <button
                    className="nav-link"
                    id="nav-id-2"
                    data-bs-toggle="tab"
                    data-bs-target="#tab2"
                    type="button"
                    role="tab"
                    aria-controls="tab2"
                    aria-selected="false"
                  >
                    Education <strong>02</strong>
                  </button>

                  <button
                    className="nav-link"
                    id="nav-id-3"
                    data-bs-toggle="tab"
                    data-bs-target="#tab3"
                    type="button"
                    role="tab"
                    aria-controls="tab3"
                    aria-selected="false"
                  >
                    Experience <strong>03</strong>
                  </button>
                </div>

                <div
                  className="tab-content resume-tab-content"
                  id="nav-tabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="tab1"
                    role="tabpanel"
                    aria-labelledby="nav-id-1"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <ul className="biography-table">
                          {ResumeData.biographyData.map((data) => (
                            <li key={data.id}>
                              <h5>{data.title}</h5>
                              <p>
                                {data.title === "LinkedIn" ? (
                                  <a
                                    href={data.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {data.info}
                                  </a>
                                ) : (
                                  data.info
                                )}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="tab2"
                    role="tabpanel"
                    aria-labelledby="nav-id-2"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <ul className="education-table">
                          {ResumeData.educationData.map((data) => (
                            <Education data={data} key={data.id} />
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="tab3"
                    role="tabpanel"
                    aria-labelledby="nav-id-3"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <ul className="experience-table">
                          {ResumeData.experienceData.map((data, index) => (
                            <Experience
                              data={data}
                              key={data.id}
                              index={index}
                            />
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
