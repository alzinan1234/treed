"use client"
import React, { useState } from "react";

const TreediAPIs = () => {
  const [activeTab, setActiveTab] = useState(0); // Track active tab index

  const apiTabs = [
    {
      label: "3D MAP API",
      content: {
        description:
          "This isn’t just a map — it’s a full 3D replica of Canada, built to give you total control over visuals, data, and interaction.",
        features: [
          "View Canada in ultra-realistic 3D, including moving vehicles, trees, roads, and sidewalks",
          "Tap on buildings to access business info, owner data, or rental/sale listings",
          "Enter stores virtually and preview real-time product inventory",
          "Live GPS tracking with vehicle rendering, police visibility, and incidents",
          "The entire country rendered like a video game, fully developed by Treedi",
          "And much more...",
        ],
        image: "/assets/location.png",
      },
    },
    {
      label: "Route Optimization API",
      content: {
        description:
          "Optimize routes with real-time data, ensuring the fastest and safest paths for any journey.",
        features: [
          "Real-time traffic updates and route adjustments",
          "Predictive analytics for travel time and delays",
          "Multi-stop route planning with dynamic reordering",
          "Integration with live weather and road conditions",
          "Customizable routing preferences (e.g., avoid tolls, fastest route)",
          "And more...",
        ],
        image: "/assets/route.png",
      },
    },
    {
      label: "Search API",
      content: {
        description:
          "Powerful search capabilities to find locations, businesses, and points of interest with precision.",
        features: [
          "Search by address, business name, or category",
          "Geocoding and reverse geocoding support",
          "Autocomplete suggestions for faster searches",
          "Filter results by distance, ratings, or availability",
          "Access detailed metadata for each search result",
          "And more...",
        ],
        image: "/assets/search.png",
      },
    },
    {
      label: "Voice API",
      content: {
        description:
          "Seamless voice integration for hands-free navigation and interaction with TreediMap.",
        features: [
          "Voice-activated navigation and search",
          "Real-time voice alerts for traffic and incidents",
          "Multilingual support for diverse users",
          "Custom voice commands for specific actions",
          "Integration with in-car systems for a seamless experience",
          "And more...",
        ],
        image: "/assets/voice.png",
      },
    },
  ];

  return (
    <div className="py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-sans">
            Only 4 Treedi APIs <br className="md:hidden" />
            —But Stronger Than 30
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#B0B0B0] max-w-3xl mx-auto font-sans">
            Unlike billion-dollar companies that split features across dozens of separate APIs to charge more, Treedi delivers everything businesses truly need with just 4 powerful APIs.
          </p>
        </div>

        {/* Tabs Section */}
        <div className="tabs-border flex flex-col items-center justify-center">
          {/* Tab Buttons */}
          <div className="flex flex-row flex-wrap md:flex-nowrap overflow-x-auto gap-2 sm:gap-4 mb-6 pb-2 md:pb-0 scrollbar-hide">
            {apiTabs.map((tab, index) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(index)}
                className={`px-3 sm:px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl font-medium transition-colors duration-200 font-sans whitespace-nowrap ${activeTab === index
                    ? "text-[#9155F7] border-b-2 border-[#9155F7]"
                    : "text-white hover:text-[#B0B0B0]"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="w-full">
            <div className="border border-[#404040] w-full my-3"></div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 p-4 sm:p-6">
              {/* Text and Features */}
              <div className="w-full md:w-2/3">
                <p className="text-[#8D9094] mb-4 text-sm sm:text-base md:text-lg font-sans">
                  {apiTabs[activeTab].content.description}
                </p>
                <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                  {apiTabs[activeTab].content.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 mr-2 sm:mr-3">
                        <img src="/assets/list.svg" alt="List icon" className="w-4 sm:w-5 h-auto" />
                      </div>
                      <span className="text-white text-sm sm:text-base font-sans">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Image */}
              <div className="w-full md:w-1/3 mt-4 md:mt-0 max-w-xs sm:max-w-sm md:max-w-none">
                <img
                  src={apiTabs[activeTab].content.image}
                  alt={`${apiTabs[activeTab].label} illustration`}
                  className="w-full h-auto object-contain max-h-60 sm:max-h-72 md:max-h-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-[#404040] lg:w-8/12 mx-auto my-20"></div>
    </div>
  );
};

export default TreediAPIs;