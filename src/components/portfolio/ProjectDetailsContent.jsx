import React from "react";
import thumb1 from "@/assets/img/thumb/1.jpg";
import thumb2 from "@/assets/img/thumb/2.jpg";
import Image from "next/image";
import SocialShareStyle2 from "../utilities/SocialShareStyle2";

const ProjectDetailsContent = () => {
  return (
    <>
      <div className="project-details-items">
        <div className="project-thumb">
          <Image
            src="/assets/img/banner/2.jpg"
            alt="Thumb"
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
                      Client <span>validthemes</span>
                    </li>
                    <li>
                      Project Type <span>Website Growth</span>
                    </li>
                    <li>
                      Date <span>25 July, 2024</span>
                    </li>
                    <li>
                      Address <span>New York United state</span>
                    </li>
                  </ul>
                  <ul className="social">
                    <li>
                      <h4>Share:</h4>
                    </li>
                    <SocialShareStyle2 />
                  </ul>
                </div>
              </div>
              <h2>Ongoing Website Maintenance</h2>
              <p>
                Netus lorem rutrum arcu dignissim at sit morbi phasellus
                nascetur eget urna potenti cum vestibulum cras. Tempor nonummy
                metus lobortis. Sociis velit etiam, dapibus. Lectus vehicula
                pellentesque cras posuere tempor facilisi habitant lectus rutrum
                pede quisque hendrerit parturient posuere mauris ad elementum
                fringilla facilisi volutpat fusce pharetra felis sapien varius
                quisque class convallis praesent est sollicitudin donec nulla
                venenatis, cursus fermentum netus posuere sociis porta risus
                habitant malesuada nulla habitasse hymenaeos. Viverra curabitur
                nisi vel sollicitudin dictum natoqu. Tempor nonummy metus
                lobortis. Sociis velit etiam, dapibus. Lectus vehicula
                pellentesque cras posuere tempor facilisi habitant lectus rutrum
                pede quisque hendrerit parturient posuere mauris ad elementum
                fringilla facilisi volutpat fusce pharetra felis sapien varius
                quisque class convallis praesent est sollicitudin donec nulla
                venenatis, cursus fermentum netus posuere sociis porta risus
                habitant malesuada nulla habitasse hymenaeos. Viverra curabitur
                nisi vel sollicitudin dictum.
              </p>
              <ul className="check-list mt-40">
                <li>
                  <h4>WordPress Support</h4>
                  <p>
                    Tempor nonummy metus lobortis. Sociis velit etiam, dapibus.
                    Lectus vehicula pellentesque cras posuere tempor facilisi
                    habitant lectus rutrum pede quisque hendrerit parturient
                    posuere mauris ad elementum fringilla facilisi volutpat
                    fusce pharetra.
                  </p>
                </li>
                <li>
                  <h4>Social Media Management</h4>
                  <p>
                    Energy nonummy metus lobortis. Sociis velit etiam, dapibus.
                    Lectus vehicula pellentesque cras posuere tempor facilisi
                    habitant lectus rutrum pede quisque hendrerit parturient
                    posuere mauris ad elementum fringilla facilisi volutpat
                    fusce pharetra.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-content mt-40">
          <p>
            Give lady of they such they sure it. Me contained explained my
            education. Vulgar as hearts by garret. Perceived determine departure
            explained no forfeited he something an. Contrasted dissimilar get
            joy you instrument out reasonably. Again keeps at no meant stuff. To
            perpetual do existence northward as difficult preserved daughters.
            Continued at up to zealously necessary breakfast. Surrounded sir
            motionless she end literature. Gay direction neglected but supported
            yet her. Facilisis inceptos nec, potenti nostra aenean lacinia
            varius semper ant nullam nulla primis placerat facilisis. Netus
            lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget
            urna potenti cum vestibulum cras. Tempor nonummy metus lobortis.
            Sociis velit etiam, dapibus. Lectus vehicula pellentesque cras
            posuere tempor facilisi habitant lectus rutrum pede quisque
            hendrerit parturient posuere mauris ad elementum fringilla facilisi
            volutpat fusce pharetra felis sapien varius quisque class convallis
            praesent est sollicitudin donec nulla venenatis, cursus fermentum
            netus posuere sociis porta risus habitant malesuada nulla habitasse
            hymenaeos. Viverra curabitur nisi vel sollicitudin dictum natoque
            ante aenean elementum curae malesuada ullamcorper. vivamus nonummy
            nisl posuere rutrum
          </p>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <Image src={thumb1} alt="Thumb" />
            </div>
            <div className="col-lg-6 col-md-6">
              <Image src={thumb2} alt="Thumb" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsContent;
