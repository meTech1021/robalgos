import React from "react";  
import Link from "next/link";  
import * as Icon from "react-feather";  

const ServicesStyle1 = () => {  
  return (  
    <>  
      <div className="services-area-two pt-80 pb-50 bg-f9f6f6">  
        <div className="container">  
          {/* Optional Section Title Uncomment Below if Needed  
          <div className="section-title">  
            <h2>Our Services</h2>  
            <div className="bar"></div>  
            <p>  
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  
              eiusmod tempor incididunt ut labore et dolore magna aliqua.  
            </p>  
          </div>   
          */}  

          <div className="row justify-content-center">  
            
            {/* Discovery & Planning */}  
            <div className="col-lg-6 col-sm-6 mt-3 mb-3">  
              <div className="single-services-box">  
                <div className="icon">  
                  <Icon.Settings />  
                </div>  
                <h3>  
                  Discovery & Planning
                </h3>  
                <p>  
                  <ul>  
                    <li>Requirement Gathering: Understand client goals, needs, and constraints.</li>  
                    <li>Market Research: Analyze the competition and identify best practices.</li>  
                    <li>Project Scope & Timeline: Define deliverables, milestones, and timeline.</li>  
                    <li>Resource Allocation: Assign the team, tools, and budget.</li>  
                  </ul>  
                </p>  
              </div>  
            </div>  

            {/* Design */}  
            <div className="col-lg-6 col-sm-6 mt-3 mb-3">  
              <div className="single-services-box">  
                <div className="icon">  
                  <Icon.Mail />  
                </div>  
                <h3>  
                  Design
                </h3>  
                <p>  
                  <ul>  
                    <li>Wireframing & Prototyping: Create visual blueprints of the application.</li>  
                    <li>UI/UX Design: Develop a user-friendly and visually appealing design.</li>  
                    <li>Client Feedback Loop: Review and refine designs based on client feedback.</li>  
                  </ul>  
                </p>  
              </div>  
            </div>  

            {/* Development */}  
            <div className="col-lg-6 col-sm-6 mt-3 mb-3">  
              <div className="single-services-box">  
                <div className="icon">  
                  <Icon.Bell />  
                </div>  
                <h3>  
                  Development
                </h3>  
                <p>  
                  <ul>  
                    <li>Frontend & Backend Development: Build the user interface and server-side architecture.</li>  
                    <li>Database Setup: Configure data storage and retrieval systems.</li>  
                    <li>Feature Development: Code features based on the client’s needs.</li>  
                    <li>Integrations: Implement APIs or third-party services.</li>  
                  </ul>  
                </p>  
              </div>  
            </div>  

            {/* Quality Assurance (QA) & Testing */}  
            <div className="col-lg-6 col-sm-6 mt-3 mb-3">  
              <div className="single-services-box">  
                <div className="icon bg-c679e3">  
                  <Icon.Grid />  
                </div>  
                <h3>  
                  Quality Assurance (QA) & Testing
                </h3>  
                <p>  
                  <ul>  
                    <li>Automated & Manual Testing: Test the software for functionality, security, and usability.</li>  
                    <li>Bug Fixing & Optimization: Address issues and optimize performance.</li>  
                    <li>User Acceptance Testing (UAT): Clients test to validate if it meets expectations.</li>  
                  </ul>  
                </p>  
              </div>  
            </div>  

            {/* Deployment */}  
            <div className="col-lg-6 col-sm-6 mt-3 mb-3">  
              <div className="single-services-box">  
                <div className="icon bg-c679e3">  
                  <Icon.Info />  
                </div>  
                <h3>  
                  Deployment
                </h3>  
                <p>  
                  <ul>  
                    <li>Preparation for Launch: Ensure that the software is ready for production.</li>  
                    <li>Deployment to Production: Launch the application on live servers.</li>  
                    <li>Post-Deployment Testing: Verify functionality in the live environment.</li>  
                  </ul>  
                </p>  
              </div>  
            </div>  

            {/* Maintenance & Support */}  
            <div className="col-lg-6 col-sm-6 mt-3 mb-3">  
              <div className="single-services-box">  
                <div className="icon bg-c679e3">  
                  <Icon.HardDrive />  
                </div>  
                <h3>  
                  Maintenance & Support
                </h3>  
                <p>  
                  <ul>  
                    <li>Monitoring & Analytics: Track performance and user behavior.</li>  
                    <li>Bug Fixes & Updates: Regular maintenance to address issues and enhance features.</li>  
                    <li>Client Support: Ongoing support for any questions or adjustments.</li>  
                  </ul>  
                </p>  
              </div>  
            </div>  

            {/* Continuous Improvement */}  
            <div className="col-lg-12 col-sm-12 mt-3 mb-3">  
              <div className="single-services-box">  
                <div className="icon bg-eb6b3d">  
                  <Icon.MousePointer />  
                </div>  
                <h3>  
                  Continuous Improvement
                </h3>  
                <p>  
                  <ul>  
                    <li>Feedback Collection: Regularly gather feedback from users and clients.</li>  
                    <li>Feature Enhancements: Add new features and improvements over time.</li>  
                  </ul>  
                </p>  
              </div>  
            </div>  

          </div>  
        </div>  
      </div>  
    </>  
  );  
};  

export default ServicesStyle1;