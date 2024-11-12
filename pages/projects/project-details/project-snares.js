import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import challenge from '@/public/images/projects/project-snares/challenge.png'
import solution from '@/public/images/projects/project-snares/solution.png'
import result from '@/public/images/projects/project-snares/result.png'
import about from '@/public/images/projects/project-snares/about.png'

const Project360App = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Securitysnares Dashboard Full-Stack Web Application Development" />

      <div className="features-details-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 features-details-image">
              <Image
                src={about}
                alt="image"
                width={800}
                height={600}
              />
            </div>

            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>About the SecuritySnares Dashboard</h3>
                <p>
                The SecuritySnares Dashboard provides a centralized, user-friendly interface for monitoring and managing the RansomSnare system's performance and security metrics. The dashboard enables security teams to quickly detect threats, track incidents, and gain insights into system health across various endpoints. By offering real-time alerts and in-depth analytics, the dashboard supports proactive security management, allowing users to take immediate action to mitigate potential threats before they escalate.
                </p>
              </div>
            </div>
          </div>

          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Challenges and Solutions</h3>
                <p>
                Real-Time Alerts and Data Management: The RansomSnare system sends an average of 5-6 real-time alerts from its sensors. Managing these alerts without latency was critical. I used Pusher for instant notifications and Celery with Redis to handle background tasks, allowing the dashboard to process, filter, and display alerts in real-time without performance issues.<br/><br/>

                <strong>Role-Based Access Control (RBAC): </strong><br/>
                <strong>User Roles: The dashboard supports three user roles:</strong><br/>

                Superadmin: Administrators at SecuritySnares with full platform access.<br/>
                    MSSP-Organization Admin: Administrators for Managed Security Service Provider (MSSP) organizations utilizing RansomSnare who can add their employees as users.<br/>
                    Normal User: General users within an MSSP organization who have limited access to the dashboard features specific to their organization.<br/>

                  With multiple user roles—Superadmin, MSSP-Organization Admin, and Normal User—it was essential to implement robust access control. I developed a role-based access control system that tailored the dashboard features based on user type, ensuring secure and personalized user experiences.<br/><br/>

                Scalable Deployment: Initially deployed on AWS RDS and EC2, the dashboard was later migrated to AWS ECS and ECR to support auto-scaling and cost-effectiveness. This migration allowed for seamless scaling based on system demand, improving cost management and platform resilience.<br/><br/>

                </p>
              </div>
            </div>
            <div className="col-lg-6 features-details-image">
              <Image
                src={challenge}
                alt="image"
                width={800}
                height={600}
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 features-details-image">
              <Image
                src={solution}
                alt="image"
                width={800}
                height={600}
              />
            </div>

            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Key Features Developed</h3>
                <p>
                Alerts Management: Enabled real-time alerts that could be filtered and aggregated. Built functionality for allow/disallow decisions on alerts, giving security teams quick control over threat management.<br/><br/>

Multi-Factor Authentication (MFA): Integrated MFA to enhance user access security, which is critical for a cybersecurity-focused platform.<br/><br/>

API Key Management: Developed secure API key management functionality, allowing safe API access and usage within the platform.<br/><br/>

User and Agent Management: Implemented tools for MSSP admins to manage users and agents, including installing, uninstalling, and configuring RansomSnare agents across endpoints.<br/><br/>

Audit Trail: Added comprehensive logging of user actions for security and compliance, supporting accountability and transparency within the platform. <br/><br/>

                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Results</h3>
                <p>
                The SecuritySnares Dashboard provided clients with real-time visibility and control over ransomware and malware threats, significantly enhancing proactive security management. The dashboard’s role-based access and real-time analytics allowed security teams to act swiftly, minimizing potential damages from ransomware attacks. Clients reported improved response times and overall platform reliability, reinforcing SecuritySnares’ value as a trusted cybersecurity provider.
                </p>
              </div>
            </div>

            <div className="col-lg-6 features-details-image">
              <Image
                src={result}
                alt="image"
                width={800}
                height={600}
              />
            </div>
          </div>
          <div className="separate"></div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Project360App;
