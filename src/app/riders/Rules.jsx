"use client";
import React, { useState } from 'react';
import { IoNavigateOutline } from "react-icons/io5";
import { LuFuel } from "react-icons/lu";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaLink, FaCalendarAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const features = [
    {
        icon: <IoNavigateOutline className="text-[#9155F7] mb-6 mt-2 text-[30px]" />,
        title: 'Real 3D Environment, Not Flat Graphics',
        description:
            'You’ll navigate inside a true-to-life 3D world with real buildings, textures, and environments — not flat lines or abstract icons.',
    },
    {
        icon: <LuFuel className="text-[#9155F7] mb-6 mt-2 text-[30px]" />,
        title: 'Everything You See Is Actionable',
        description:
            'Tap any object on the map — a store, a traffic light, a gas station sign — and get instant options to interact, book, or get info.',
    },
    {
        icon: <RiDiscountPercentFill className="text-[#9155F7] mb-6 mt-2 text-[30px]" />,
        title: 'Business Data Comes Directly from the Source',
        description:
            'TreediMap connects directly with verified businesses — you’ll see official menus, stock, services, and even live availability.',
    },
    {
        icon: <FaLink className="text-[#9155F7] mb-6 mt-2 text-[30px]" />,
        title: 'You’ll Know What’s Ahead Before You Even Ask',
        description:
            'From road conditions to crowd levels, the system proactively shows what’s happening before it affects you — no need to search.',
    },
    {
        icon: <FaCalendarAlt className="text-[#9155F7] mb-6 mt-2 text-[30px]" />,
        title: 'Integrated Smart Planning Based on Context',
        description:
            'TreediMap knows if you’re late, in traffic, or nearing a stop — and adjusts your route, alerts people you’re meeting, or recommends better options.',
    },
];

const Rules = () => {
    const [current, setCurrent] = useState(0);

    const handlePrev = () => {
        setCurrent((prev) => (prev === 0 ? features.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrent((prev) => (prev === features.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="my-40 px-4">
            <div className="flex flex-col lg:items-center  my-5 text-white">
                <h1 className="mb-5 text-2xl md:text-6xl font-bold lg:text-center">
                    Important Rules You Must Know
                </h1>
                <p className="mb-5 max-w-2xl lg:text-center text-left text-lg md:text-xl">
                    This is not a transport service. The people you're moving with are Road Data Collectors following strict GPS routes to collect data for TreediMap 2028.
                </p>
            </div>

            {/* Desktop layout */}
            <div className="hidden md:block relative">
                <div className="relative z-10 overflow-hidden">
                    <div className="w-full ml-52 flex justify-center gap-4 z-20">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`bg-[#0D0D0D] border border-[#404040] rounded-2xl p-4 text-white transition-all duration-300 ${current === index ? 'ring-2 ring-[#9155F7]' : ''
                                    }`}
                            >
                                {feature.icon}
                                <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                                <p className="text-[#B0B0B0] text-base">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="absolute flex justify-center mt-10 gap-6 z-30 ml-52">
                    <button
                        onClick={handlePrev}
                        className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full"
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>

            {/* Mobile layout: cards in grid-cols-1 */}
            <div className=" md:hidden text-white grid grid-cols-1 gap-6">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-[#0D0D0D] border border-[#404040] rounded-2xl p-6"
                    >
                        {feature.icon}
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-[#B0B0B0] text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rules;
