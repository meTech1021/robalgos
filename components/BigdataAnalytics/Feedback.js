import React from "react";
import Image from "next/image";

import authorImg1 from "/public/images/author1.jpg";
import authorImg2 from "/public/images/author2.jpg";
import authorImg3 from "/public/images/author3.jpg";

const Feedback = () => {
  return (
    <>
      <div className="bigdata-feedback-area pt-80 pb-50">
        <div className="container">
          <div className="section-title">
            <h2>What Users Saying</h2>
            <div className="bar"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-feedback-box">
                <div className="feedback-desc">
                  <p>
                  Working with Robalgos has been transformative for our business. Their expertise in AI and computer vision helped us streamline our processes and improve customer experience significantly. We couldn't be happier with the results.
                  </p>
                </div>

                <div className="client-info">
                  <Image
                    src={authorImg1}
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <h3>Emily Chen</h3>
                  <span>Chief Operating Officer, VisionTech Solutions</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-feedback-box">
                <div className="feedback-desc">
                  <p>
                  Robalgos exceeded our expectations on every level. Their team’s dedication to quality and attention to detail is unmatched. The website and mobile app they developed for us are not only beautiful but also incredibly user-friendly and efficient.
                  </p>
                </div>

                <div className="client-info">
                  <Image
                    src={authorImg2}
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <h3>Mark Taylor</h3>
                  <span>Head of Digital Innovation, Nexa Ventures</span>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-feedback-box">
                <div className="feedback-desc">
                  <p>
                    The blockchain solution Robalgos delivered brought an unprecedented level of transparency and security to our operations. Their agile approach and willingness to adapt to our needs made the entire experience smooth and productive.
                  </p>
                </div>

                <div className="client-info">
                  <Image
                    src={authorImg3}
                    alt="image"
                    width={150}
                    height={150}
                  />
                  <h3>Sarah Robinson</h3>
                  <span>Chief Technology Officer, FinSecure Corp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
