import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";

import blogImg4 from "/public/images/blog-image/blog4.jpg";
import blogImg5 from "/public/images/blog-image/blog5.jpg";
import blogImg6 from "/public/images/blog-image/blog6.jpg";

// Shape Images
import shape1 from "/public/images/shape1.png";
import shape2 from "/public/images/shape2.svg";
import shape3 from "/public/images/shape3.svg";
import shape4 from "/public/images/shape4.svg"; 

const BlogPost = () => {
  return (
    <>
      <div className="blog-area pt-80 pb-50">
        <div className="container">
          <div className="section-title">
            <h2>Our Recent Story</h2>
            <div className="bar"></div>
              <Link href="/blog">
              RobAlgos Blog
              </Link>
              
          </div>

          <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/blog/blog-details/cooperation">
                    <Image
                      src={blogImg4}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>

                  <div className="date">
                    <Icon.Calendar /> March 15, 2022
                  </div>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/blog/blog-details/cooperation">
                    Building Together: The Power of Collaboration at Robalgos
                    </Link>
                  </h3>

                  <span>
                    By <Link href="#">Admin</Link>
                  </span>

                  <p>
                  In the fast-paced world of software development, innovation thrives not only on individual talent but on how we bring our skills together.
                  </p>

                  <Link href="/blog/blog-details/cooperation" className="read-more-btn">
                    Read More <Icon.ArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/blog/blog-details/algo">
                    <Image
                      src={blogImg5}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>

                  <div className="date">
                    <Icon.Calendar /> March 17, 2022
                  </div>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/blog/blog-details/algo">
                    The Joy of Problem-Solving: Behind the Scenes of Algorithm Development at Robalgos
                    </Link>
                  </h3>

                  <span>
                    By <Link href="#">Smith</Link>
                  </span>

                  <p>
                  At Robalgos, algorithm development isn’t just about lines of code—it’s a process full of creativity, collaboration, and sometimes unexpected fun.
                  </p>

                  <Link href="/blog/blog-details/algo" className="read-more-btn">
                    Read More <Icon.ArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/blog/blog-details/lgdata">
                    <Image
                      src={blogImg6}
                      alt="image"
                      width={860}
                      height={700}
                    />
                  </Link>

                  <div className="date">
                    <Icon.Calendar /> March 19, 2022
                  </div>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/blog/blog-details/lgdata">
                    Building Resilience and Scalability: Our Journey in Developing Large-Scale Backends
                    </Link>
                  </h3>

                  <span>
                    By <Link href="#">John</Link>
                  </span>

                  <p>
                  In the realm of software development, creating a large-scale backend system is like building the foundation of a skyscraper.
                  </p>

                  <Link href="/blog/blog-details/lgdata" className="read-more-btn">
                    Read More <Icon.ArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <Image
            src={shape1}
            alt="shape"
            width={202}
            height={202}
          />
        </div>
        <div className="shape2 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
        <div className="shape3">
          <Image src={shape3} alt="shape" width={28} height={28} />
        </div>
        <div className="shape4">
          <Image src={shape4} alt="shape" width={21} height={20} />
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

export default BlogPost;
