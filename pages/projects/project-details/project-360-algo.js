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
import about from '@/public/images/projects/project-360-algo/about.png'
import challenge from '@/public/images/projects/project-360-algo/challenge.png'
import solution from '@/public/images/projects/project-360-algo/solution.png'
import result from '@/public/images/projects/project-360-algo/result.png'

const Project360Algo = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Innovative Seam Finder Algorithm for 360° Photospheres" />

      <div className="features-details-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 features-details-image">
              <Image
                src={about}
                alt="image"
                width={800}
                height={600}
              />
            </div>

            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>About the Algorithm:</h3>
                <p>
                Our seam finder algorithm is designed to ensure flawless stitching for 360° photospheres, even in challenging environments. By focusing on precise seam alignment, our algorithm provides a high-quality immersive experience for users, without requiring specialized hardware.
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
                  Creating seamless indoor 360° photospheres presents unique challenges, especially in aligning features such as walls and corners. Ensuring that seams are perfectly aligned is critical to producing a natural-looking image, but parallax effects, caused by slight shifts in perspective between shots, make this difficult. Overcoming these effects while preserving alignment in the stitching process is essential to achieving a realistic 360° view.
                </p>
              </div>
            </div>

            <div className="col-lg-6 features-details-image">
              <Image
                src={challenge}
                alt="image"
                width={800}
                height={600}
              />
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details-image">
              <Image
                src={solution}
                alt="image"
                width={800}
                height={600}
              />
            </div>

            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Solutions</h3>
                <p>
                We developed an innovative seam finder algorithm that addresses these challenges through advanced computer vision and optimization techniques. By reducing the seam alignment issue to an optimization problem, our approach identifies and places seams in areas where they are less noticeable and aligns them with maximum precision. This solution uses an efficient optimization process that intelligently balances seam placement and alignment, significantly reducing parallax and distortion effects in indoor photospheres.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Results</h3>
                <p>
                Our seam finder algorithm has set a new standard in high-quality photosphere creation. With precise seam alignment and reduced parallax effects, our algorithm ensures that every photosphere delivers an immersive, uninterrupted viewing experience. Users benefit from beautifully stitched 360° images with perfectly aligned walls and minimal distortion, elevating the quality and realism of the photospheres generated through 360 Photo Cam.
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

export default Project360Algo;
