import React from "react";
import Link from 'next/link';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import BlogDetailsContent from "@/components/Blog/BlogDetailsContent";
import * as Icon from "react-feather";
import Image from "next/image";
import BlogSidebar from "@/components/Blog/BlogSidebar";

import blogDetails from "/public/images/blog-image/blog4.jpg";

import blogImg1 from "/public/images/blog-image/blog7.jpg";
import blogImg2 from "/public/images/blog-image/blog8.jpg";
import blogImg3 from "/public/images/blog-image/blog9.jpg";

import user1 from "/public/images/client-image/client1.jpg";
import user2 from "/public/images/client-image/client2.jpg";
import user3 from "/public/images/client-image/client3.jpg";
import user4 from "/public/images/client-image/client4.jpg";
import user5 from "/public/images/client-image/client5.jpg";

const BlogDetails = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="How We Built a Scalable Web Application Using Python and Django: Lessons from Food Delivery Platforms Like Deliveroo" />

      <div className="blog-details-area ptb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="blog-details-desc">
                <div className="article-image">
                  <Image
                    src={blogDetails}
                    alt="image"
                    style={{ width: "100%", height: '600px', objectFit: 'cover' }}
                  />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Icon.Clock /> September 31, 2022
                      </li>
                      <li>
                        <Icon.User /> <Link href="#">Steven Smith</Link>
                      </li>
                    </ul>
                  </div>
                  <strong>Introduction</strong>
                  <p>In the fast-paced world of software development, innovation thrives not only on individual talent but on how we bring our skills together. At Robalgos, we understand that each project’s success depends on the synergy of a skilled, motivated team. With a shared commitment to excellence, our team members work together to develop software solutions that consistently exceed expectations.</p>
                  
                  <strong>Unified Vision, Diverse Expertise</strong>
                  <p>Our team includes some of the brightest minds in software development, from ICPC champions to seasoned tech veterans. Each member brings unique insights to the table—whether in algorithms, AI, blockchain, or app development. By leveraging this diverse expertise, we create solutions that are not only innovative but also highly functional and robust.</p>
                  
                  <strong>Open Communication and Support</strong>
                  <p>Effective collaboration requires open communication. At Robalgos, we foster an environment where everyone’s voice is valued. Team members freely exchange ideas, challenge assumptions, and support each other’s growth. This approach ensures that even the most complex challenges are met with multiple perspectives, leading to efficient, creative problem-solving.</p>
                  
                  <strong>Commitment to Continuous Improvement</strong>
                  <p>Every project is a learning experience, and we continually strive to improve. Our team regularly holds debriefs and retrospectives, evaluating both successes and areas for growth. This commitment to improvement fuels our drive and helps us stay at the cutting edge of technology.</p>
                  
                  <strong>Celebrating Wins and Growing Together</strong>
                  <p>Beyond project goals, we celebrate each other’s milestones and achievements. This sense of camaraderie strengthens our team and reinforces our collective commitment to Robalgos’ mission: delivering groundbreaking software solutions to our clients. Working together, we achieve more than we could alone, creating a positive and productive work environment.</p>

                  <strong>Conclusion </strong>
                  <p>The Robalgos team is more than just a group of developers. We are a community of innovators, constantly learning, supporting one another, and pushing the boundaries of what's possible. Together, we turn challenges into solutions, transforming ideas into powerful, practical software that drives our clients’ success.</p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogDetails;
