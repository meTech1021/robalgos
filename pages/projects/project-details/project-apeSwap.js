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
import challenge from '@/public/images/projects/project-apeSwap/challenge.png'
import solution from '@/public/images/projects/project-apeSwap/solution.png'
import result from '@/public/images/projects/project-apeSwap/result.png'
import about from '@/public/images/projects/project-apeSwap/about.png'

const Project360App = () => {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="ApeSwap DEX Platform Case Study" />

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
                <h3>ApeSwap DEX Platform</h3>
                <p>
                ApeSwap is a decentralized exchange (DEX) and DeFi platform built on the Binance Smart Chain (BSC). The platform enables users to trade BEP-20 tokens, provide liquidity, and participate in various DeFi activities, including staking and yield farming. ApeSwap provides users with a seamless, decentralized trading experience, maintaining competitive transaction speeds and low fees.
                </p>
              </div>
            </div>
          </div>

          <div className="separate"></div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Challenges</h3>
                <p>
                To deliver a high-performance, user-friendly DEX interface that allows users to trade tokens and engage in DeFi activities on the Binance Smart Chain, with Web3.js integration to facilitate secure wallet connections and transaction signing.<br/><br/>
                React.js: Used to create the interactive and responsive front-end of the application. React enabled the development of reusable UI components, delivering a consistent user experience across the platform.<br/><br/>
                Web3.js: Employed to facilitate blockchain interactions, such as connecting with BSC-compatible wallets, retrieving blockchain data, and signing transactions.<br/><br/>
                Binance Smart Chain (BSC): The blockchain network providing fast and low-cost transactions, critical for the DEX’s user base.<br/><br/>
                Smart Contracts: BEP-20 token contracts and custom smart contracts for liquidity pools, staking, and yield farming, deployed on the Binance Smart Chain.<br/><br/>

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
          <div className="row align-items-center mb-5">
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
                Blockchain Interaction Complexity: Ensuring smooth interaction with the Binance Smart Chain required precise handling of asynchronous blockchain transactions. Web3.js was crucial for this, allowing secure transaction signing and wallet integration.<br/><br/>
User Experience Optimization: Creating a DeFi platform can be overwhelming for new users. The React.js interface was carefully designed with intuitive navigation and tooltips to help users understand staking, farming, and token swaps.<br/><br/>
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 features-details">
              <div className="features-details-desc">
                <h3>Results</h3>
                <p>
                ApeSwap achieved a highly responsive and reliable DEX interface that offers users a variety of DeFi tools. User engagement increased due to the seamless UX and low transaction fees.<br/><br/>
                The project successfully provided a decentralized financial ecosystem on BSC, enabling ApeSwap to grow its user base, particularly in markets where Binance Smart Chain has strong adoption.<br/>

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
