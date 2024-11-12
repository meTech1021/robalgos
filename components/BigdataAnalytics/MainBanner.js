import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const MainBanner = () => {
  return (
    <>
      <div 
        className="bigdata-analytics-banner"
        style={{ backgroundImage: `url(/images/bigdata-analytics/main-banner.jpg)` }}
      >
        <div className="container">
          <div className="bigdata-analytics-content">
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              Welcome to Robalgos <br/> Where Innovation Meets Excellence
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              At Robalgos, we specialize in delivering cutting-edge software solutions that drive business growth and innovation. With a team of top-tier developers, including ICPC champions, we bring together expertise in algorithms, AI, computer vision, web development, mobile apps, and blockchain technology to create transformative digital experiences.<br/><br/>
              Partner with us to unlock your business's full potential with tailor-made solutions designed to meet your unique needs. Explore our services, learn about our mission, and discover how we can help you achieve your technology goals.
              </p>

            <Link
              href="/contact"
              className="btn btn-primary"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="banner-boxes-area">
          {/* <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-lg-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="single-banner-boxes">
                  <div className="icon">
                    <Icon.Server />
                  </div>
                  <h3>Analyze Your Data</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                    tempor incididunt ut labore dolore magna aliqua.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="single-banner-boxes">
                  <div className="icon">
                    <Icon.Code />
                  </div>
                  <h3>Customized Plan</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                    tempor incididunt ut labore dolore magna aliqua.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-sm-6"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="single-banner-boxes">
                  <div className="icon">
                    <Icon.Users />
                  </div>
                  <h3>Implement Solution</h3>
                  <p>
                    Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                    tempor incididunt ut labore dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MainBanner;
