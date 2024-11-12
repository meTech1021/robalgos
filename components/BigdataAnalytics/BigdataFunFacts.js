import React from "react";
import Link from "next/link";

const BigdataFunFacts = () => {
  return (
    <>
      <div className="funfacts-area bg-image ptb-80">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>Let’s Talk About Your Next Big Idea</h2>
            <div className="bar"></div>
            <p>
            Ready to take your business to the next level? Schedule a call with us today to discuss your technology needs and how Robalgos can help. Our team of experts is eager to learn about your vision and explore how we can turn it into a reality. Whether you need AI-powered solutions, a new website, a mobile app, or a blockchain solution, we’re here to help.
            </p>
          </div>

          <div className="row justify-content-center">
            {/* <div
              className="col-lg-3 col-md-3 col-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-funfact">
                <h3>180K</h3>
                <p>Downloaded</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-3 col-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-funfact">
                <h3>20K</h3>
                <p>Feedback</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-3 col-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-funfact">
                <h3>500+</h3>
                <p>Workers</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-3 col-6 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-funfact">
                <h3>70+</h3>
                <p>Contributors</p>
              </div>
            </div> */}
          </div>

          <div
            className="contact-cta-box"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h3>Have any question about us?</h3>
            <p>Don't hesitate to contact us</p>

            <Link href="/contact" className="btn btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BigdataFunFacts;
