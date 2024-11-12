import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";

import icon1 from "/public/images/bigdata-analytics/icon1.png";
import icon2 from "/public/images/bigdata-analytics/icon2.png";
import icon3 from "/public/images/bigdata-analytics/icon3.png";
import icon4 from "/public/images/bigdata-analytics/icon4.png";
import icon5 from "/public/images/bigdata-analytics/icon5.png";
import icon6 from "/public/images/bigdata-analytics/icon6.png";

import rectangle from "/public/images/bigdata-analytics/rectangle.png";

const Services = () => {
  return (
    <>
      <div className="bigdata-services-area ptb-80 bg-eef6fd">
        <div className="container">
          <div className="section-title">
            <h2>Services We Can Help You With</h2>
            <h4>Empowering Your Business with Comprehensive Software Solutions</h4>
            <div className="bar"></div>
            <p>
            At Robalgos, we offer a wide range of software services tailored to help your business thrive in the digital age. Our expert team specializes in
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box-item">
                <div className="icon">
                  <Image
                    src={icon1}
                    alt="image"
                    width={50}
                    height={50}
                  />
                </div>
                <h3>
                  Algorithm Development & Optimization
                </h3>
                <p>
                Harness the power of data with advanced algorithms designed to solve complex problems, optimize business operations, and drive efficiency.
                </p>


                <div className="shape">
                  <Image
                    src="/images/bigdata-analytics/rectangle.png"
                    alt="image"
                    width={230}
                    height={226}
                  />
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box-item">
                <div className="icon">
                  <Image
                    src={icon2}
                    alt="image"
                    width={50}
                    height={50}
                  />
                </div>
                <h3>
                  Artificial Intelligence (AI)
                </h3>
                <p>
                Unlock the potential of AI with intelligent solutions that automate processes, enhance decision-making, and deliver personalized experiences.
                </p>

                
                  
                

                <div className="shape">
                  <Image
                    src="/images/bigdata-analytics/rectangle.png"
                    alt="image"
                    width={230}
                    height={226}
                  />
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box-item">
                <div className="icon">
                  <Image
                    src={icon3}
                    alt="image"
                    width={50}
                    height={50}
                  />
                </div>
                <h3>
                  Computer Vision
                </h3>
                <p>
                Transform visual data into actionable insights with cutting-edge computer vision technology, perfect for industries ranging from healthcare to retail.
                </p>

                
                  
                

                <div className="shape">
                  <Image
                    src="/images/bigdata-analytics/rectangle.png"
                    alt="image"
                    width={230}
                    height={226}
                  />
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box-item">
                <div className="icon">
                  <Image
                    src={icon4}
                    alt="image"
                    width={50}
                    height={50}
                  />
                </div>
                <h3>
                  Website Development
                </h3>
                <p>
                Create stunning, user-friendly websites that enhance your brand's online presence and engage your audience.
                </p>

                
                  
                

                <div className="shape">
                  <Image
                    src="/images/bigdata-analytics/rectangle.png"
                    alt="image"
                    width={230}
                    height={226}
                  />
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box-item">
                <div className="icon">
                  <Image
                    src={icon5}
                    alt="image"
                    width={50}
                    height={50}
                  />
                </div>
                <h3>
                  Mobile App Development
                </h3>
                <p>
                Develop intuitive and high-performance mobile applications that provide seamless experiences across all platforms.
                </p>

                
                  
                

                <div className="shape">
                  <Image
                    src="/images/bigdata-analytics/rectangle.png"
                    alt="image"
                    width={230}
                    height={226}
                  />
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box-item">
                <div className="icon">
                  <Image
                    src={icon6}
                    alt="image"
                    width={50}
                    height={50}
                  />
                </div>
                <h3>
                  Blockchain Solutions
                </h3>
                <p>
                Leverage the potential of blockchain technology to secure your transactions, enhance transparency, and drive innovation in your business processes.
                </p>

                
                  
                

                <div className="shape">
                  <Image
                    src={rectangle}
                    alt="image"
                    width={230}
                    height={226}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
