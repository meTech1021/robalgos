import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const WhatWeDo = () => {
  return (
    <>
      <div className="what-we-do-area ptb-80">
        <div className="container">
          <div className="section-title">
            <h2>What We Do</h2>
            <div className="bar"></div>
            <p>
            At Robalgos, we are dedicated to transforming your vision into reality through our comprehensive suite of software solutions. Our mission is to empower businesses with innovative technologies that drive efficiency, growth, and success. Here’s how we achieve that:
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-what-we-do-box">
                <div className="icon">
                  <i className="flaticon-monitor"></i>
                </div>
                <h3>
                  Tailored Software Development
                </h3>
                <p>
                We create bespoke software solutions that are perfectly aligned with your business needs. Our agile development process ensures that we adapt to changes quickly, delivering high-quality products on time.
                </p>

                {/* <Link href="/services/service-details/" className="link">
                  Market Research
                

                <Link href="/services/service-details/" className="link">
                  Investment Research
                

                <Link href="/services/service-details/" className="read-more-btn">
                  <Icon.ArrowRight /> Read More
                 */}
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-what-we-do-box">
                <div className="icon">
                  <i className="flaticon-idea"></i>
                </div>

                <h3>
                  Advanced Algorithm Solutions
                </h3>

                <p>
                Our expertise in algorithm development allows us to tackle your most complex challenges. We design and implement algorithms that optimize processes, enhance performance, and provide actionable insights from your data.
                </p>

                {/* <Link href="/services/service-details/" className="link">
                  Data Analytics
                

                <Link href="/services/service-details/" className="link">
                  Business Intelligence
                

                <Link href="/services/service-details/" className="read-more-btn">
                  <Icon.ArrowRight /> Read More
                 */}
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-what-we-do-box">
                <div className="icon">
                  <i className="flaticon-software"></i>
                </div>
                <h3>
                  Intelligent AI Implementations
                </h3>
                <p>
                Transform visual data into actionable insights with cutting-edge computer vision technology, perfect for industries ranging from healthcare to retail.
                </p>

                {/* <Link href="/services/service-details/" className="link">
                  Intelligence Automation
                

                <Link href="/services/service-details/" className="link">
                  Quality Engineering
                

                <Link href="/services/service-details/" className="read-more-btn">
                  <Icon.ArrowRight /> Read More
                 */}
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-what-we-do-box">
                <div className="icon">
                  <i className="flaticon-idea"></i>
                </div>

                <h3>
                  Cutting-edge Computer Vision
                </h3>

                <p>
                We leverage advanced computer vision technology to extract meaningful information from visual data, enabling you to gain valuable insights that drive innovation in areas such as healthcare, retail, and more.
                </p>
              </div>
            </div>  
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-what-we-do-box">
                <div className="icon">
                  <i className="flaticon-idea"></i>
                </div>

                <h3>
                  Engaging Website Development
                </h3>

                <p>
                Your online presence is crucial to your brand’s success. We build responsive, visually stunning websites that not only captivate your audience but also provide an intuitive user experience.
                </p>
              </div>
            </div>  
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-what-we-do-box">
                <div className="icon">
                  <i className="flaticon-idea"></i>
                </div>

                <h3>
                  Innovative Mobile Applications
                </h3>

                <p>
                Our mobile app development team creates high-performance applications that offer seamless experiences across all devices. From concept to launch, we ensure your app stands out in a competitive market.
                </p>
              </div>
            </div>  
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-what-we-do-box">
                <div className="icon">
                  <i className="flaticon-idea"></i>
                </div>

                <h3>
                  Secure Blockchain Solutions
                </h3>

                <p>
                We help you unlock the potential of blockchain technology to enhance security and transparency in your operations. Our blockchain solutions are designed to innovate and streamline your business processes.
                </p>
              </div>
            </div>  
            <div
              className="col-lg-6 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-what-we-do-box">
                <div className="icon">
                  <i className="flaticon-idea"></i>
                </div>

                <h3>
                  Ongoing Support and Maintenance
                </h3>

                <p>
                Our commitment to your success doesn’t end with delivery. We provide continuous support and maintenance to ensure your solutions evolve with your business needs and remain at the forefront of technology.
                </p>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
