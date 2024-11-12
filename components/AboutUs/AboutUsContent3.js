import React from "react";
import Image from "next/image";

import aboutImg from "/public/images/agency-image/agency-about-img.jpg";

// Shape Images
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg";

const AboutUsContent3 = () => {
  return (
    <>
      <div className="agency-about-area ptb-80">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-6 col-md-12">
              <div className="agency-about-img">
                <Image src={aboutImg} alt="image" width={707} height={581} />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="agency-about-content">
                <span className="sub-title">About RobAlgo</span>
                <h2>Forging the Future of Technology with the World’s Best Talent</h2>
                <div className="bar"></div>

                <p className="p-17">
                At Robalgos, we believe in the transformative power of technology. Our company was founded on the principle that exceptional software solutions are born from a synergy of world-class talent, cutting-edge technology, and a deep understanding of our clients' needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="about-inner-area">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our History</h3>
                  <p className="p-17">
                    Robalgos was founded on the belief that technology can transform industries and empower businesses to reach new heights. <br/>Built by a team of top-tier developers and led by CEO Robert Hamilton, Robalgos has rapidly grown into a trusted partner for cutting-edge solutions in algorithms, AI, computer vision, blockchain, and more. <br/>With roots in technology recruitment and decades of industry expertise, we’ve established a strong foundation in delivering excellence and innovation.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our Mission</h3>
                  <p className="p-17">
                    Our mission at Robalgos is to empower businesses by delivering impactful, innovative software solutions that drive growth and efficiency. <br/>We’re committed to understanding each client’s unique needs and crafting custom technology solutions that solve their most challenging problems. <br/>Through continuous improvement and an unwavering focus on quality, we aim to be the leading force in transforming ideas into reality.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Who We Are</h3>
                  <p className="p-17">
                    Robalgos is a dynamic team of skilled developers, AI experts, and innovators dedicated to creating intelligent, future-ready software solutions. <br/>Led by industry veterans and staffed by some of the brightest minds, including ICPC champions, we bring expertise across algorithms, AI, and blockchain technology. <br/>We pride ourselves on fostering a culture of collaboration and excellence to deliver solutions that push the boundaries of what’s possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape2 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
        <div className="shape3">
          <Image src={shape3} alt="shape" width={28} height={28} />
        </div>
        <div className="shape6 rotateme">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape7">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape8 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
      </div>
    </>
  );
};

export default AboutUsContent3;
