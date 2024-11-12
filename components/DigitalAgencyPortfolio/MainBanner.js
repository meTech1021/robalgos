import React from "react";
import Link from "next/link"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const MainBanner = () => {
  return (
    <>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Autoplay]}
        className="agency-portfolio-home-slides"
      >
        <SwiperSlide>
          <div
            className="agency-portfolio-main-banner"
            style={{
              backgroundImage: `url(/images/agency-portfolio-main-banner/ap-main-banner-img1.jpg)`,
              
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="bigdata-analytics-content">
                    <h1
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="color-white"
                      
                    >
                      Welcome to Robalgos <br/> Where Innovation Meets Excellence
                    </h1>
                    <p className="color-white">
                    At Robalgos, we specialize in delivering cutting-edge software solutions that drive business growth and innovation. With a team of top-tier developers, including ICPC champions, we bring together expertise in algorithms, AI, computer vision, web development, mobile apps, and blockchain technology to create transformative digital experiences.
                    </p>
                    <p className="color-white">
                    Partner with us to unlock your business's full potential with tailor-made solutions designed to meet your unique needs. Explore our services, learn about our mission, and discover how we can help you achieve your technology goals.
                    </p>
                    <p className="color-white">
                    Let’s build the future together.
                    </p>

                    <Link href="/contact" className="btn btn-secondary">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="agency-portfolio-main-banner  "
            style={{
              backgroundImage: `url(/images/agency-portfolio-main-banner/ap-main-banner-img2.jpg)`,  
              backgroundSize: '250%', // This value can be adjusted for the desired zoom effect  
              backgroundPosition: 'center', // Centering the image  
              backgroundRepeat: 'no-repeat', // Prevent tiling of the image  
              width: '100%',  
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="bigdata-analytics-content">
                    <h1
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="color-white"
                    >
                      Welcome to Robalgos <br/> Where Innovation Meets Excellence
                    </h1>
                    <p className="color-white">
                    At Robalgos, we specialize in delivering cutting-edge software solutions that drive business growth and innovation. With a team of top-tier developers, including ICPC champions, we bring together expertise in algorithms, AI, computer vision, web development, mobile apps, and blockchain technology to create transformative digital experiences.
                    </p>
                    <p className="color-white">
                    Partner with us to unlock your business's full potential with tailor-made solutions designed to meet your unique needs. Explore our services, learn about our mission, and discover how we can help you achieve your technology goals.
                    </p>
                    <p className="color-white">
                    Let’s build the future together.
                    </p>
                    <Link href="/contact" className="btn btn-secondary">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="agency-portfolio-main-banner "
            style={{
              backgroundImage: `url(/images/agency-portfolio-main-banner/ap-main-banner-img3.jpg)`,
            }}
          >
            <div className="d-table">
              <div className="d-table-cell">
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

                    <p className="color-white">
                    At Robalgos, we specialize in delivering cutting-edge software solutions that drive business growth and innovation. With a team of top-tier developers, including ICPC champions, we bring together expertise in algorithms, AI, computer vision, web development, mobile apps, and blockchain technology to create transformative digital experiences.
                    </p>
                    <p className="color-white">
                    Partner with us to unlock your business's full potential with tailor-made solutions designed to meet your unique needs. Explore our services, learn about our mission, and discover how we can help you achieve your technology goals.
                    </p>
                    <p className="color-white">
                    Let’s build the future together.
                    </p>

                    <Link href="/contact" className="btn btn-secondary">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainBanner;
