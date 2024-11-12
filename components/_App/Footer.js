import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "react-feather";

import logo from "/public/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-area bg-f7fafd">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-md-6"
            >
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <div style={{  
                      width: 70,  
                      height: 70,  
                      overflow: 'hidden', // Hide the overflow of the image  
                      position: 'relative'  
                    }}>  
                      <Image   
                        src={logo}   
                        alt="logo"   
                        layout="fill" // Fill the div  
                        objectFit="cover" // Ensures the image covers the div  
                        style={{  
                          position: 'absolute',  
                          top: '50%',   // Center image vertically  
                          left: '50%',  // Center image horizontally  
                          transform: 'translate(-50%, -50%) scale(1.34' // Zoom in 20%  
                        }}   
                      />  
                    </div> 
                  </Link>
                </div>
                <p>
                Robalgos is a dynamic team of skilled developers, AI experts, and innovators dedicated to creating intelligent, future-ready software solutions. 
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
            >
              <div className="single-footer-widget ps-5">
                <h3>Company</h3>

                <ul className="list">
                  <li>
                    <Link href="/about-3">About Us</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  {/* <li>
                    <Link href="/features">Features</Link>
                  </li> */}
                  {/* <li>
                    <Link href="/pricing">Our Pricing</Link>
                  </li> */}
                  <li>
                    <Link href="/blog">Latest News</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
            >
              <div className="single-footer-widget">
                <h3>Support</h3>

                <ul className="list">
                  <li>
                    <Link href="/faq">FAQ's</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">Terms & Conditions</Link>
                  </li>
                  {/* <li>
                    <Link href="/team">Team</Link>
                  </li> */}
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
            >
              <div className="single-footer-widget">
                <h3>Address</h3>

                <ul className="footer-contact-info">
                  <li>
                    <Icon.MapPin />
                    20 Wenlock Road, London, <br /> N1 7GU, United Kingdom
                  </li>

                  <li>
                    <Icon.Mail />
                    Email:{" "}
                    <a href="mailto:info@robalgos.com">info@robalgos.com</a>
                  </li>

                  <li>
                    <Icon.PhoneCall />
                    Phone: <a href="tel:+4402080495271">+44 020 8049 5271</a>
                  </li>
                </ul>

                <ul className="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/"
                      className="facebook"
                      target="_blank"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.twitter.com/"
                      className="twitter"
                      target="_blank"
                    >
                      <Icon.Twitter />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagramcom/"
                      className="instagram"
                      target="_blank"
                    >
                      <Icon.Instagram />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/"
                      className="linkedin"
                      target="_blank"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p>
                  Copyright &copy; {currentYear} Robalgos Ltd.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image
          src="/images/map.png"
          className="map"
          alt="map"
          width={910}
          height={443}
        />

        {/* Shape Images */}
        <div className="shape1">
          <Image
            src="/images/shape1.png"
            alt="shape"
            width={202}
            height={202}
          />
        </div>

        <div className="shape8 rotateme">
          <Image src="/images/shape2.svg" alt="shape" width={22} height={22} />
        </div>
      </footer> 
    </>
  );
};

export default Footer;
