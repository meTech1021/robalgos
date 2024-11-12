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
import challenge from '@/public/images/projects/project-etl-pipeline/challenge.png'
import solution from '@/public/images/projects/project-etl-pipeline/solution.png'
import result from '@/public/images/projects/project-etl-pipeline/result.png'
import about from '@/public/images/projects/project-etl-pipeline/about.png'

const Project360App = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Pentester.com  ETL Pipeline Development " />

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
                <h3>About the Pentester ETL Pipeline</h3>
                <p>
                Designed an ETL pipeline for Pentester.com to handle the extraction, transformation, and storage of large-scale profile information from raw data sources. With 8TB of data to process, requiring up to a month to complete, I implemented advanced features like dynamic configuration generation, file sharding, and checkpoint-based resume/pause functionality to maximize efficiency and data integrity.
                </p>
              </div>
            </div>
          </div>

          <div className="separate"></div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Challenges</h3>
                <p>
                Automate data extraction and parsing with minimal manual intervention.<br/>
                Implement checkpoint-based processing to enable resumption from the last processed file in case of interruptions.<br/>
                Ensure scalability for large datasets by introducing file sharding.<br/>

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
                <h3>Solutions</h3>
                <p>
                <strong>
                  Data Collection:
                </strong>
                &nbsp;Aggregate individual raw data files from the source location. <br/><br/>
    <strong>
    Dynamic Parsing Configuration: 
    </strong>

		&nbsp;For each file, retrieve an existing parsing configuration or use Langchain to auto-generate one via LLM if it does not exist.
    <br/><br/>
    <strong>
    File Sharding for Large Files:
    </strong>
		&nbsp;Split large files into smaller shards to improve processing speed and reduce memory load.
    <br/><br/>
    <strong>
    Data Parsing and Storage:
    </strong>
		&nbsp;Apply parsing configurations to each shard, extracting structured data.
		Store the parsed data in PostgreSQL using Django ORM.
    <br/><br/>
    <strong>
    Checkpoint-based Resume/Pause Functionality:
    </strong>
		&nbsp;Implemented using Python to maintain a checkpoint log for each processed file, enabling the system to pause and resume from the last checkpoint.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Results</h3>
                <p>
                A scalable, automated solution capable of handling large datasets.<br/>
Improved fault tolerance and reduced downtime with resume/pause capabilities.<br/>
Successfully structured and stored profiles for efficient use in downstream applications.<br/>

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
