"use client";
import React from "react";
import { FeatureCard } from "./FeatureCardItem";
const Features = () => {
  return (
    <section className="w-full h-[900px] bg-gradient-to-r from-[#180147] via-[#44016E] to-[#87018C] flex justify-center px-15 py-10">
      <div className="flex flex-col">
        <div>
          <h1 className="text-4xl font-semibold mb-4 text-center text-white mt-10">
            Discover Our Game-Changing Features!
          </h1>
        </div>

        <div className="mt-10 flex flex-row space-x-5">
          <FeatureCard
            title={"Member Contribution Tracking & Rewards"}
            description="Effortlessly monitor and reward contributions within your DAO. Our system tracks member activities and rewards them proportionally based on their input, ensuring fair recognition and incentivization for active participation."
       
          />
          <FeatureCard
            title={
              "AI-Powered Collaborative Governance "
            }
            description="Leverage AI to score and align goals across different DAOs. Our tool helps identify common interests and create customized governance templates that facilitate smooth collaboration and shared decision-making."
    
          />
          <FeatureCard
            title={"Gamified Collaborative DAO Engagement"}
            description="Engage members through a gamified platform that rewards collaboration and skill-sharing. Boost interaction and productivity by offering performance ratings and unlocking perks based on community involvement and problem-solving."
      
          />
        </div>
        <div className="mt-10 flex flex-row space-x-5 ">
          <FeatureCard
            title={"Collaborative Investments & Finance"}
            description="Enable DAOs to pool resources and invest in joint projects. Our platform supports collaborative loan pooling and shared investment opportunities, providing flexible and community-backed financial solutions."
       
          />
          <FeatureCard
            title={"Creativity and Innovation Hub"}
            description="Foster creativity and innovation with an AI-driven idea hub. Explore new inspirations and propose innovative solutions, overcoming rigid frameworks and enhancing your DAO's capacity to experiment and evolve."

          />
          <FeatureCard
            title={"Dynamic DAO Collaboration Dashboard"}
            description="Stay informed and in control with a dynamic dashboard that provides real-time insights into cross-DAO collaborations. Track activities, monitor progress, and manage engagements all in one central location."
            
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
