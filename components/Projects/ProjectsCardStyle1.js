import React from "react";
import * as Icon from "react-feather";
import Link from "next/link";
import Image from "next/image";

import worksImg1 from "/public/images/works-image/works-image1.jpg";
import worksImg2 from "/public/images/works-image/works-image2.jpg";
import worksImg3 from "/public/images/works-image/works-image3.jpg";
import worksImg4 from "/public/images/works-image/works-image4.jpg";
import worksImg5 from "/public/images/works-image/works-image5.jpg";
import worksImg6 from "/public/images/works-image/works-image6.jpg";
import worksImg7 from "/public/images/works-image/works-image7.jpg";
import worksImg8 from "/public/images/works-image/works-image8.jpg";
import worksImg9 from "/public/images/works-image/works-image9.jpg";

import projectImg1 from "/public/images/projects/project-360-algo/index.png";
import projectImg2 from "/public/images/projects/project-360-app/index.png";
import projectImg3 from "/public/images/projects/project-noa/index.png";
import projectImg4 from "/public/images/projects/project-snares/index.png";
import projectImg5 from "/public/images/projects/project-etl-pipeline/index.png";
import projectImg6 from "/public/images/projects/project-apeSwap/index.png";

// Shape Images 
import shape2 from "/public/images/shape2.svg"; 
import shape4 from "/public/images/shape4.svg"; 

const ProjectsCardStyle1 = () => {
  return (
    <>
      <div className="works-area pt-80 pb-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-6">
              <div className="single-works">
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

                <Link href="/projects/project-details/project-360-algo" className="icon">
                  <Icon.Settings />
                </Link>

                <div className="works-content">
                  <h3>
                    <Link href="/projects/project-details/project-360-algo">
                    Innovative Seam Finder Algorithm for 360° Photospheres
                    </Link>
                  </h3>
                  <p>
                  Our seam finder algorithm is designed to ensure flawless stitching for 360° photospheres, even in challenging environments.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-works">
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
                <Link href="/projects/project-details/project-360-app" className="icon">
                  <Icon.Settings />
                </Link>

                <div className="works-content">
                  <h3>
                    <Link href="/projects/project-details/project-360-app">DoSpace - 360 Photo Cam</Link>
                  </h3>
                  <p>
                  360 Photo Cam allows users to effortlessly capture fully immersive 360° photos of any space—no special equipment needed.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="single-works">
               <div
                  style={{
                    width: "100%",         // Full width of the parent container
                    paddingTop: "50%",     // Sets height to be half of the width for a 2:1 aspect ratio
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src={projectImg3}
                    alt="logo"
                    layout="fill"            // Fill the div
                    objectFit="cover"        // Ensures the image covers the div
                    style={{
                      position: "absolute",
                    }}
                  />
                </div>  
                <Link href="/projects/project-details/project-noa" className="icon">
                  <Icon.Settings />
                </Link>

                <div className="works-content">
                  <h3>
                    <Link href="/projects/project-details/project-noa">Noa Technologies - Lucy Networks - IoT-Powered Facility Management Platform(Django/React)</Link>
                  </h3>
                  <p>
                  Lucy Networks, a subproject of Noa Technologies, is focused on modernizing facility management through IoT connectivity, secure sensing, and software integration.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-works">
               <div
                  style={{
                    width: "100%",         // Full width of the parent container
                    paddingTop: "50%",     // Sets height to be half of the width for a 2:1 aspect ratio
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src={projectImg4}
                    alt="logo"
                    layout="fill"            // Fill the div
                    objectFit="cover"        // Ensures the image covers the div
                    style={{
                      position: "absolute",
                    }}
                  />
                </div>  
                <Link href="/projects/project-details/project-snares" className="icon">
                  <Icon.Settings />
                </Link>

                <div className="works-content">
                  <h3>
                    <Link href="/projects/project-details/project-snares">Securitysnares Dashboard Full-Stack Web Application Development</Link>
                  </h3>
                  <p>
                  The SecuritySnares Dashboard provides a centralized, user-friendly interface for monitoring and managing the RansomSnare system's performance and security metrics.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-works">
               <div
                  style={{
                    width: "100%",         // Full width of the parent container
                    paddingTop: "50%",     // Sets height to be half of the width for a 2:1 aspect ratio
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src={projectImg5}
                    alt="logo"
                    layout="fill"            // Fill the div
                    objectFit="cover"        // Ensures the image covers the div
                    style={{
                      position: "absolute",
                    }}
                  />
                </div>  
                <Link href="/projects/project-details/project-etl-pipeline" className="icon">
                  <Icon.Settings />
                </Link>

                <div className="works-content">
                  <h3>
                    <Link href="/projects/project-details/project-etl-pipeline">Pentester.com -  ETL Pipeline Development </Link>
                  </h3>
                  <p>
                  Designed an ETL pipeline for Pentester.com to handle the extraction, transformation, and storage of large-scale profile information from raw data sources. 
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="single-works">
               <div
                  style={{
                    width: "100%",         // Full width of the parent container
                    paddingTop: "50%",     // Sets height to be half of the width for a 2:1 aspect ratio
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src={projectImg6}
                    alt="logo"
                    layout="fill"            // Fill the div
                    objectFit="cover"        // Ensures the image covers the div
                    style={{
                      position: "absolute",
                    }}
                  />
                </div>  
                <Link href="/projects/project-details/project-apeSwap" className="icon">
                  <Icon.Settings />
                </Link>

                <div className="works-content">
                  <h3>
                    <Link href="/projects/project-details/project-apeSwap">ApeSwap DEX Platform Case Study </Link>
                  </h3>
                  <p>
                  ApeSwap is a decentralized exchange (DEX) and DeFi platform built on the Binance Smart Chain (BSC). 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape8 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
        <div className="shape2 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
        <div className="shape7">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape4">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
      </div>
    </>
  );
};

export default ProjectsCardStyle1;
