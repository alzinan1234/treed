"use client";
import React, { useState } from "react";
import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const apiTabs = [
    {
        label: "3D Buildings – Every Structure in Canada Comes Alive",
        content: {
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
        label: "Businesses – Reserve, Book, and Enter in 1 Tap",
        content: {
            features: [
                "Instant reservations for restaurants, services, or events with one tap",
                "Book appointments or tickets directly through the map",
                "Virtual entry to stores with real-time inventory previews",
                "Access verified business data like menus, hours, and availability",
                "Seamless integration with payment systems for quick bookings",
                "And more...",
            ],
            image: "/assets/location.png",
        },
    },
    {
        label: "Search – Find Anything, Anywhere, Instantly",
        content: {
            features: [
                "Search by address, business name, or category",
                "Geocoding and reverse geocoding support",
                "Autocomplete suggestions for faster searches",
                "Filter results by distance, ratings, or availability",
                "Access detailed metadata for each search result",
                "And more...",
            ],
            image: "/assets/location.png",
        },
    },
];

const SeeGo = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const scrollAmount = 500;
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const [activeCard, setActiveCard] = useState(0); // Track the active card index

    const handleCardClick = (index) => {
        setActiveCard(index);
    };

    return (
        <div className="min-h-screen overflow-hidden mx-auto flex flex-col items-start justify-start lg:items-start py-6 sm:py-8 px-4 sm:px-6 lg:px-8 lg:ml-56">
            {/* Header Section */}
            <div className="flex flex-col my-4 sm:my-5 w-full md:w-2/3 lg:w-1/2 lg:ml-20">
                <h1 className="mb-4 sm:mb-5 w-full text-left text-xl md:text-4xl lg:text-5xl font-semibold text-white">
                    See and Understand Everything Without Going There.
                </h1>
                <p className="mb-4 sm:mb-5 text-[#B0B0B0] max-w-2xl text-left text-base sm:text-lg">
                    TreediMap gives you instant access to everything you want to know about any place —without ever stepping foot there.
                </p>
            </div>
            {/* Cards Section */}
            <div className="w-full sm:w-11/12 ">
                {/* Mobile view: show only one card at a time */}
                <div className="block sm:hidden">
                    {apiTabs.map((tab, index) => (
                        activeCard === index && (
                            <div
                                key={index}
                                className="bg-[#0D0D0D] border border-[#404040] rounded-2xl text-white transition-all duration-300 "
                            >
                                <img
                                    src={tab.content.image}
                                    alt={`${tab.label} illustration`}
                                    className="w-full  object-cover rounded-lg mb-3"
                                />
                                <h3 className="font-semibold text-lg p-3 mb-2">{tab.label}</h3>
                                <ul className="space-y-2">
                                    {tab.content.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start  px-3 mb-3">
                                            <img src="/assets/list.svg" alt="List icon" className="w-4 h-auto mt-1 mr-2" />
                                            <span className="text-[#B0B0B0] text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    ))}
                    
                </div>

                {/* Desktop view: show all cards */}
                <div className="overflow-hidden hidden w-full sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {apiTabs.map((tab, index) => (
                        <div
                            key={index}
                            className={`w-full ml-20 overflow-hidden bg-[#0D0D0D] border border-[#404040] rounded-2xl text-white cursor-pointer transition-all duration-300 ${activeCard === index ? "ring-2" : ""}`}
                            onClick={() => handleCardClick(index)}
                        >
                            <img
                                src={tab.content.image}
                                alt={`${tab.label} illustration`}
                                className="w-full object-cover rounded-t-2xl mb-3 sm:mb-4"
                            />
                            <h3 className="font-semibold text-lg p-3 sm:text-xl mb-2">{tab.label}</h3>
                            <ul className="space-y-2 p-2">
                                {tab.content.features.map((feature, idx) => (
                                    <li key={idx} className="flex px-3 items-start">
                                        <img src="/assets/list.svg" alt="List icon" className="w-4 sm:w-5 h-auto mt-1 mr-2 sm:mr-3" />
                                        <span className="text-[#B0B0B0] text-sm sm:text-base">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center lg:ml-16 mt-6 sm:mt-8 gap-4 sm:gap-6 z-30">
                <button
                    onClick={() => handleCardClick(activeCard === 0 ? apiTabs.length - 1 : activeCard - 1)}
                    className="bg-[#161616] hover:bg-opacity-90 text-white p-2 sm:p-3 rounded-full"
                >
                    <FaChevronLeft className="text-base sm:text-lg" />
                </button>
                <button
                    onClick={() => handleCardClick(activeCard === apiTabs.length - 1 ? 0 : activeCard + 1)}
                    className="bg-[#161616] hover:bg-opacity-90 text-white p-2 sm:p-3 rounded-full"
                >
                    <FaChevronRight className="text-base sm:text-lg" />
                </button>
            </div>
            {/* Placeholder Section */}           
        </div>
    );
};

export default SeeGo;