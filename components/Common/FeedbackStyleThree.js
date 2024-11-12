import React from "react";
import * as Icon from "react-feather";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import clientImg1 from "/public/images/client-image/client1.jpg";
import clientImg2 from "/public/images/client-image/client2.jpg";
import clientImg3 from "/public/images/client-image/client3.jpg";

import user1 from "/public/images/agency-image/agency-user1.png";
import user2 from "/public/images/agency-image/agency-user2.png";
import user3 from "/public/images/agency-image/agency-user3.png";
import user4 from "/public/images/agency-image/agency-user4.png";
import user5 from "/public/images/agency-image/agency-user5.png";
import user6 from "/public/images/agency-image/agency-user6.png";
import ceo from "/public/images/agency-image/ceo.jpg";

const FeedbackStyleThree = () => {
  return (
    <>
      <div className="ml-feedback-area" style={{
        paddingTop: 50,
        paddingBottom: 10
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12" style={{padding: '50px'}}>
              <Image
                src={ceo}
                alt="shape"
                height={243}
                style={{
                  marginBottom: 30,
                  width: "100%"
                }}
              />

            </div>
            <div className="col-lg-7 col-md-12" style={{paddingRight: '50px', paddingTop: '50px'}}>
              <h2>Message from Robert Hamilton, CEO</h2>
              <div className="bar"></div>
              <br/>
              <p className="p-17">
              Forged through two decades of navigating the intricate landscape of technology recruitment, I’ve cultivated a deep-rooted understanding of the critical role talent plays in driving business success. My career has been dedicated to assembling high-performance teams that deliver exceptional results for some of the world's most demanding organizations, including leading law firms, financial institutions, and Fortune 500 companies.
              </p>
              <p className="p-17">
              This invaluable experience has culminated in the founding of Robalgos, a company that brings together an unparalleled collective of the world’s top developers. We offer a unique blend of cutting-edge skills and exceptional value, empowering businesses to achieve their full potential. Let’s partner to transform your technology vision into reality.
              </p>
            </div>

          </div>
        </div>

        {/* Shape Images */}


         
      </div>
    </>
  );
};

export default FeedbackStyleThree;
