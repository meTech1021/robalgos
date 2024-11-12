import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import challenge from '@/public/images/projects/project-360-app/challenge.png'
import solution from '@/public/images/projects/project-360-app/solution.png'
import result from '@/public/images/projects/project-360-app/result.png'

const Project360App = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="DoSpace - 360 Photo Cam" />

      <div className="features-details-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 features-details-image" style={{padding: 0}}>
              <video
                src="/images/projects/project-360-app/about.mp4"
                autoPlay
                loop
                muted        // Mutes the video
                controls     // Optional: shows playback controls
                style={{ width: '50%', height: 'auto', clipPath: 'inset(0 5% 0 5%)'  }}
                ></video>
            </div>

            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>About the App:</h3>
                <p>
                360 Photo Cam allows users to effortlessly capture fully immersive 360° photos of any space—no special equipment needed. By snapping a few photos from a smartphone, users can instantly create high-quality, interactive photospheres with a complete ground-to-sky view. Our advanced algorithm seamlessly stitches these photos, providing a unique and immersive experience.
                </p>
              </div>
            </div>
          </div>

          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Challenges</h3>
                <p>
                Creating a high-quality 360° photo experience on a mobile device posed significant challenges. Without specialized hardware, the app needed to accurately stitch multiple photos into a seamless sphere. This required innovative computer vision and optimization techniques to manage image alignment, blending, and high-speed processing for a smooth user experience.
                </p>
              </div>
            </div>

            <div className="col-lg-6 features-details-image">
                <video
                    src="/images/projects/project-360-app/challenge.mp4"
                    autoPlay
                    loop
                    muted        // Mutes the video
                    controls     // Optional: shows playback controls
                    style={{ width: '50%', height: 'auto', clipPath: 'inset(0 5% 0 5%)'  }}
                ></video>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 features-details-image justify-content-center d-flex" style={{padding: 0}}>
                <div
                  style={{
                    width: "50%",         // Full width of the parent container
                    paddingTop: "50%",     // Sets height to be half of the width for a 2:1 aspect ratio
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src={solution}
                    alt="logo"
                    layout="fill"            // Fill the div
                    objectFit="cover"        // Ensures the image covers the div
                    style={{
                      position: "absolute",
                    }}
                  />
                </div> 
            </div>

            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Solutions</h3>
                <p>
                Robalgos developed a cutting-edge algorithm that intelligently aligns and stitches photos in real-time to produce flawless 360° images. By leveraging our expertise in computer vision and optimization, we created a solution that manages alignment, perspective correction, and image blending with precision. Our approach eliminated the need for additional hardware, making 360° photography accessible to any user with a smartphone.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Results</h3>
                <p>
                The 360 Photo Cam app provides users with a stunning, immersive experience and has quickly become a favorite tool for capturing full 360° views of cherished spaces. The app’s ease of use and the quality of its output have led to high user engagement, positive reviews, and strong demand. Through our unique algorithm, Robalgos has enabled DoSpace to offer a leading solution in mobile 360° photography, setting a new standard in the field.
                </p>
              </div>
            </div>

            <div className="col-lg-6 features-details-image">
              <Image
                src={result}
                alt="image"
                width={800}
                height={600}
              />
            </div>
          </div>
          <div className="separate"></div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Project360App;
