import React from "react";
import * as Icon from "react-feather";
import Link from "next/link";
import Image from "next/image";

import blogImg1 from "/public/images/blog-image/blog1.jpg";
import blogImg2 from "/public/images/blog-image/blog2.jpg";
import blogImg3 from "/public/images/blog-image/blog3.jpg";
import blogImg4 from "/public/images/blog-image/blog4.jpg";
import blogImg5 from "/public/images/blog-image/blog5.jpg";
import blogImg6 from "/public/images/blog-image/blog6.jpg";

const BlogGridPost = () => {
  return (
    <>
      <div className="blog-area ptb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/blog/blog-details/py_django">
                    <Image
                      src={blogImg1}
                      alt="image"
                      width={860}
                      style={{ width: "100%", height: '250px', objectFit: 'cover' }}

                    />
                  </Link>

                  <div className="date">
                    <Icon.Calendar /> March 15, 2022
                  </div>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/blog/blog-details/py_django">
                    How We Built a Scalable Web Application Using Python and Django: Lessons from Food Delivery Platforms Like Deliveroo
                    </Link>
                  </h3>

                  <span>
                    By <Link href="#">Muramoto Hideoshi</Link>
                  </span>

                  <p>
                  In the fast-paced world of food delivery, platforms like Deliveroo have transformed the way people order and enjoy meals. 

                  </p>

                  <Link href="/blog/blog-details/py_django" className="read-more-btn">
                    Read More <Icon.ArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/blog/blog-details/ml">
                    <Image
                      src={blogImg2}
                      alt="image"
                      style={{ width: "100%", height: '250px', objectFit: 'cover' }}
                    />
                  </Link>

                  <div className="date">
                    <Icon.Calendar /> March 17, 2022
                  </div>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/blog/blog-details/ml">
                    Demystifying AI: How We Used Python and Machine Learning to Automate Customer Support Ticket Classification
                    </Link>
                  </h3>

                  <span>
                    By <Link href="#">Smith</Link>
                  </span>

                  <p>
                  With the rise of AI, businesses now have the ability to automate repetitive tasks, freeing up their teams to focus on higher-value work.
                  </p>

                  <Link href="/blog/blog-details/ml" className="read-more-btn">
                    Read More <Icon.ArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="blog-image">
                  <Link href="/blog/blog-details/fugging_face">
                    <Image
                      src={blogImg3}
                      alt="image"
                      style={{ width: "100%", height: '250px', objectFit: 'cover' }}

                    />
                  </Link>

                  <div className="date">
                    <Icon.Calendar /> March 19, 2022
                  </div>
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/blog/blog-details/fugging_face">
                    Leveraging Hugging Face Transformers for Real-World NLP Applications: Building a Customer Feedback Analysis Tool
                    </Link>
                  </h3>

                  <span>
                    By <Link href="#">John</Link>
                  </span>

                  <p>
                  Understanding customer feedback is essential for any business that wants to improve its products and services.
                  </p>

                  <Link href="/blog/blog-details/fugging_face" className="read-more-btn">
                    Read More <Icon.ArrowRight />
                  </Link>
                </div>
              </div>
            </div>

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

            {/* Pagination */}
            {/* <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Prev
                      </a>
                    </li>

                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>

                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>

                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>

                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogGridPost;
