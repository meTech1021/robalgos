import React from "react";
import Link from "next/link";
import Image from "next/image";

import projectImg1 from "/public/images/project-360-algo.png";
import projectImg2 from "/public/images/project-360-app.png";
import projectImg3 from "/public/images/projects-img3.jpg";
import projectImg4 from "/public/images/projects-img4.jpg";
import projectImg5 from "/public/images/projects-img5.jpg";
import projectImg6 from "/public/images/projects-img6.jpg";
import projectImg7 from "/public/images/projects-img7.jpg";
import projectImg8 from "/public/images/projects-img8.jpg";

const ProjectsCardStyle2 = () => {
  return (
    <>
      <div className="ml-projects-area pt-80 pb-50">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-ml-projects-box justify-content-center text-center">
                {/* <Image src={projectImg1} alt="image" height={800} layout="intrinsic" style={{ maxHeight: '500px', width: '100%' }} /> */}
                <h5>Innovative Seam Finder Algorithm</h5>
                <div
                  style={{
                    width: "100%",         // Full width of the parent container
                    paddingTop: "50%",     // Sets height to be half of the width for a 2:1 aspect ratio
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src={projectImg1}
                    alt="logo"
                    layout="fill"            // Fill the div
                    objectFit="cover"        // Ensures the image covers the div
                    style={{
                      position: "absolute",
                    }}
                  />
                </div>  
                <div className="plus-icon">
                  <Link href="/projects/project-details/project-360-algo">
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="single-ml-projects-box justify-content-center text-center">
                {/* <Image src={projectImg1} alt="image" height={800} layout="intrinsic" style={{ maxHeight: '500px', width: '100%' }} /> */}
                <h5>DoSpace - 360 Photo Cam</h5>
                <div
                  style={{
                    width: "100%",         // Full width of the parent container
                    paddingTop: "50%",     // Sets height to be half of the width for a 2:1 aspect ratio
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src={projectImg2}
                    alt="logo"
                    layout="fill"            // Fill the div
                    objectFit="cover"        // Ensures the image covers the div
                    style={{
                      position: "absolute",
                    }}
                  />
                </div>  
                <div className="plus-icon">
                  <Link href="/projects/project-details/project-360-app">
                    <span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsCardStyle2;
