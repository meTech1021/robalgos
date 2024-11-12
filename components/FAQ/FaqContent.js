import React from "react";  
import ContactForm from "@/components/FAQ/ContactForm";  
import {  
  Accordion,  
  AccordionItem,  
  AccordionItemHeading,  
  AccordionItemButton,  
  AccordionItemPanel,  
} from "react-accessible-accordion";  

const FaqContent = () => {  
  return (  
    <>  
      <div className="faq-area ptb-80">  
        <div className="container">  
          <div className="faq-accordion">  
            <Accordion preExpanded={["a"]}>  
              <AccordionItem uuid="a">  
                <AccordionItemHeading>  
                  <AccordionItemButton>  
                    <span>What types of services does Robalgos offer?</span>  
                  </AccordionItemButton>  
                </AccordionItemHeading>  
                <AccordionItemPanel>  
                  <p>  
                    We offer a comprehensive suite of software development services, including tailored software solutions, algorithm development, AI implementation, computer vision, web and mobile app development, and blockchain technology. Our team specializes in delivering high-quality solutions that drive innovation and efficiency.  
                  </p>  
                </AccordionItemPanel>  
              </AccordionItem>  

              <AccordionItem uuid="b">  
                <AccordionItemHeading>  
                  <AccordionItemButton>  
                    <span>How does Robalgos ensure the quality of its solutions?</span>  
                  </AccordionItemButton>  
                </AccordionItemHeading>  
                <AccordionItemPanel>  
                  <p>  
                    Quality is at the core of everything we do. Our process includes rigorous testing and quality assurance at each stage of development, from prototyping to final deployment. We use automated and manual testing methods to ensure that each solution meets the highest standards of functionality, security, and user experience.  
                  </p>  
                </AccordionItemPanel>  
              </AccordionItem>  

              <AccordionItem uuid="c">  
                <AccordionItemHeading>  
                  <AccordionItemButton>  
                    <span>Can Robalgos develop a custom solution to fit my unique business needs?</span>  
                  </AccordionItemButton>  
                </AccordionItemHeading>  
                <AccordionItemPanel>  
                  <p>  
                    Absolutely! We specialize in creating custom solutions tailored to meet the specific goals and requirements of your business. Our team will work closely with you to understand your needs and design a solution that fits seamlessly into your existing workflows and processes.  
                  </p>  
                </AccordionItemPanel>  
              </AccordionItem>  

              <AccordionItem uuid="d">  
                <AccordionItemHeading>  
                  <AccordionItemButton>  
                    <span>How long does a typical project take to complete?</span>  
                  </AccordionItemButton>  
                </AccordionItemHeading>  
                <AccordionItemPanel>  
                  <p>  
                    Project timelines vary depending on the scope and complexity of each project. After an initial discovery and planning phase, we’ll provide a detailed timeline with milestones to keep you informed of progress. On average, projects can range from a few weeks for smaller tasks to several months for more complex solutions.  
                  </p>  
                </AccordionItemPanel>  
              </AccordionItem>  

              <AccordionItem uuid="e">  
                <AccordionItemHeading>  
                  <AccordionItemButton>  
                    <span>Does Robalgos provide ongoing support and maintenance after project completion?</span>  
                  </AccordionItemButton>  
                </AccordionItemHeading>  
                <AccordionItemPanel>  
                  <p>  
                    Yes, we offer ongoing support and maintenance to ensure your solution remains efficient, up-to-date, and adaptable to your evolving business needs. Our team is available to handle bug fixes, updates, and feature enhancements to keep your software running smoothly.  
                  </p>  
                </AccordionItemPanel>  
              </AccordionItem>  

              <AccordionItem uuid="f">  
                <AccordionItemHeading>  
                  <AccordionItemButton>  
                    <span>What industries does Robalgos serve?</span>  
                  </AccordionItemButton>  
                </AccordionItemHeading>  
                <AccordionItemPanel>  
                  <p>  
                    We serve a wide range of industries, including healthcare, finance, retail, technology, and more. Our solutions are designed to be versatile, adaptable, and capable of meeting the unique challenges of any sector.  
                  </p>  
                </AccordionItemPanel>  
              </AccordionItem>  

              <AccordionItem uuid="g">  
                <AccordionItemHeading>  
                  <AccordionItemButton>  
                    <span>How secure are the solutions provided by Robalgos?</span>  
                  </AccordionItemButton>  
                </AccordionItemHeading>  
                <AccordionItemPanel>  
                  <p>  
                    Security is a top priority for us. We implement strict security protocols and practices to protect your data and applications from potential threats. Our solutions are designed to meet industry security standards and include features like data encryption, access controls, and regular security updates.  
                  </p>  
                </AccordionItemPanel>  
              </AccordionItem>  

              <AccordionItem uuid="h">  
                <AccordionItemHeading>  
                  <AccordionItemButton>  
                    <span>How can I get started with Robalgos?</span>  
                  </AccordionItemButton>  
                </AccordionItemHeading>  
                <AccordionItemPanel>  
                  <p>  
                    Starting with Robalgos is easy! You can reach out to us via our website, schedule a call, or send us a message. Our team will discuss your needs, answer any questions, and guide you through the next steps toward building a solution that meets your goals.  
                  </p>  
                </AccordionItemPanel>  
              </AccordionItem>  

              <AccordionItem uuid="i">  
                <AccordionItemHeading>  
                  <AccordionItemButton>  
                    <span>What makes Robalgos different from other software development companies?</span>  
                  </AccordionItemButton>  
                </AccordionItemHeading>  
                <AccordionItemPanel>  
                  <p>  
                    At Robalgos, we pride ourselves on our top-tier talent, innovative approach, and deep commitment to quality. With a team that includes ICPC champions and seasoned professionals, we bring a unique level of expertise and insight to each project, ensuring that we deliver not just a solution but an optimized, future-ready platform for your business.  
                  </p>  
                </AccordionItemPanel>  
              </AccordionItem>  
            </Accordion>  
          </div>  

          {/* ContactForm */}  
          {/* <ContactForm />   */}
        </div>  
      </div>  
    </>  
  );  
};  

export default FaqContent;