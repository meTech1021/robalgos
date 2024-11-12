import React from "react";
import MainBanner from "@/components/DigitalAgencyPortfolio/MainBanner";

import Features from "@/components/ITStartup/Features";
import OurFeatures from "@/components/ITStartup/OurFeatures";
import ServicesArea from "@/components/ITStartup/ServicesArea";
import Team from "@/components/Common/Team";
import FunFactsArea from "@/components/Common/FunFactsArea";
import RecentWorks from "@/components/Common/RecentWorks";
import PricingStyleOne from "@/components/PricingPlans/PricingStyleOne";
import Feedback from "@/components/BigdataAnalytics/Feedback";
import Partner from "@/components/Common/Partner";
import BlogPost from "@/components/BigdataAnalytics/BlogPost";
import Footer from "@/components/_App/Footer";
import NavbarStyleFour from "@/components/_App/NavbarStyleFour";
import WhatWeDo from "@/components/BigdataAnalytics/WhatWeDo";
import DiscoverArea from "@/components/BigdataAnalytics/DiscoverArea";
import Services from "@/components/BigdataAnalytics/Services";
import BigdataFunFacts from "@/components/BigdataAnalytics/BigdataFunFacts";
import IndustriesWeServe from "@/components/BigdataAnalytics/IndustriesWeServe";
import Newsletter from "@/components/Common/Newsletter";
import NavbarStyleSix from "@/components/_App/NavbarStyleSix";

const Index = () => {
  return (
    <>
      <NavbarStyleFour />

      <MainBanner />


      {/* <DiscoverArea/> */}

      <Services/>
      <WhatWeDo/>

      <Team/>

      <BigdataFunFacts/>

      {/* <Feedback/> */}

      {/* <IndustriesWeServe/> */}

      <BlogPost/>

      {/* <Newsletter/> */}
      
      <Footer />
    </>
  );
};

export default Index;
