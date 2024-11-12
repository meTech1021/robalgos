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
import challenge from '@/public/images/projects/project-noa/challenge.png'
import solution from '@/public/images/projects/project-noa/solution.png'
import result from '@/public/images/projects/project-noa/result.png'
import about from '@/public/images/projects/project-noa/about.png'

const Project360App = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Noa Technologies - Lucy Networks - IoT-Powered Facility Management Platform(Django/React)" />

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
                <h3>About the Lucy Networks</h3>
                <p>
                Lucy Networks, a subproject of Noa Technologies, is focused on modernizing facility management through IoT connectivity, secure sensing, and software integration. The Lucy Hub and Satellite Sensors connect to Lucy Access, a cloud-based dashboard that offers real-time monitoring and insights into energy consumption, appliance health, environmental conditions, and workforce safety. The platform serves sectors like hospitality, education, and manufacturing, aiming to boost energy efficiency, improve workplace safety, and support corporate ESG objectives.
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
                Real-Time Data Visualization and Mapping: Facility managers needed a clear, location-based view of asset data. Using React.js and MapBox SDK, I created an interactive map interface within Lucy Access, where users could see sensor data in real-time, navigate between locations, and filter data for specific assets or environmental conditions. <br/><br/>

                Processing and Displaying High-Volume Data: The platform handled large data sets from numerous IoT devices, requiring efficient data management and rendering. I optimized the front-end to handle high-frequency updates from RabbitMQ, displaying data in real-time without compromising performance.<br/><br/>

                Scalable API Integration: To maintain seamless data transmission, I optimized the API integration to work efficiently with the large volume of data sent from the IoT devices, allowing for secure, scalable communication between devices and the dashboard.<br/><br/><br/>

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
                Interactive Map for Asset Tracking: Integrated MapBox SDK to display asset locations, environmental metrics, and sensor statuses in a dynamic, interactive map. This feature allowed facility managers to quickly identify and address issues based on location.<br/><br/>

	Customizable Real-Time Dashboard: Developed a user-friendly interface using React.js that displayed real-time data, with options for managers to customize their view based on specific metrics, such as air quality or energy consumption.<br/><br/>

	Role-Based Access and Alerts: Added role-based access control to customize data visibility and alert settings for different user roles, enhancing security and allowing users to configure their experience based on individual responsibilities.<br/><br/>

	Scalable Deployment on AWS: Migrated the system to AWS ECS and ECR to allow auto-scaling, ensuring that the platform could handle increased data volume and maintain cost-effectiveness.<br/><br/><br/>

                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Results</h3>
                <p>
                The Lucy Access platform provided facility managers with actionable insights and the tools to proactively manage energy efficiency, appliance health, and environmental conditions. The interactive mapping and real-time data visualization empowered users to make data-driven decisions quickly, improving operational efficiency and helping organizations meet sustainability goals. Through Lucy Networks, clients benefited from better resource utilization, lower energy costs, and a safer, more compliant workplace environment.
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
