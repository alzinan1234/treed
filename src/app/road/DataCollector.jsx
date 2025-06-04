'use client';
import React, { useState } from 'react';
import { IoNavigateOutline } from "react-icons/io5";
import { LuFuel } from "react-icons/lu";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaLink, FaCalendarAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const features = [
    {
        icon: <IoNavigateOutline className='text-[#9155F7] mb-6 mt-2 text-[30px]' />,
        title: 'Real 3D Environment, Not Flat Graphics',
        description: 'You’ll navigate inside a true-to-life 3D world with real buildings, textures, and environments — not flat lines or abstract icons.',
    },
    {
        icon: <LuFuel className='text-[#9155F7] mb-6 mt-2 text-[30px]' />,
        title: 'Everything You See Is Actionable',
        description: 'Tap any object on the map — a store, a traffic light, a gas station sign — and get instant options to interact, book, or get info.',
    },
    {
        icon: <RiDiscountPercentFill className='text-[#9155F7] mb-6 mt-2 text-[30px]' />,
        title: 'Business Data Comes Directly from the Source',
        description: 'TreediMap connects directly with verified businesses — you’ll see official menus, stock, services, and even live availability.',
    },
    {
        icon: <FaLink className='text-[#9155F7] mb-6 mt-2 text-[30px]' />,
        title: 'You’ll Know What’s Ahead Before You Even Ask',
        description: 'From road conditions to crowd levels, the system proactively shows what’s happening before it affects you — no need to search.',
    },
    {
        icon: <FaCalendarAlt className='text-[#9155F7] mb-6 mt-2 text-[30px]' />,
        title: 'Integrated Smart Planning Based on Context',
        description: 'TreediMap knows if you’re late, in traffic, or nearing a stop — and adjusts your route, alerts people you’re meeting, or recommends better options.',
    },
];

const DataCollector = () => {
    const [current, setCurrent] = useState(0);

    const handlePrev = () => {
        setCurrent(prev => (prev === 0 ? features.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrent(prev => (prev === features.length - 1 ? 0 : prev + 1));
    };

    return (
        <div>
            <div className='w-10/12 min-h-screen mx-auto overflow-hidden'>
                <div className="flex flex-col items-start my-5 py-8 lg:ml-42">
                    <h1 className="mb-5 max-w-xl text-left text-4xl md:text-6xl font-bold">
                        Verified Data Collectors.
                        Trusted Roads.
                    </h1>
                    <p className="mb-5 text-[#B0B0B0] max-w-2xl text-left text-lg">
                        TreediMap is a national tech project rebuilding Canada’s mapping system from the ground up. To protect the accuracy of our data, every road data collector and vehicle must be fully verified before participating.
                    </p>
                </div>

                <div className='flex items-start flex-col gap-10 lg:ml-42'>
                    {/* Desktop view: all cards inline */}
                    <div className="hidden md:flex justify-center gap-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`w-[517px] h-auto text-left bg-[#161616] border border-[#404040] rounded-3xl p-9 text-white transition-all duration-300 ${current === index ? 'ring-2 ring-[#9155F7]' : ''
                                    }`}
                            >
                                {feature.icon}
                                <h3 className="font-semibold text-xl mb-2 ">{feature.title}</h3>
                                <p className="text-[#B0B0B0] text-base mb-8">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Mobile view: one card at a time with arrows */}
                    <div className="md:hidden ">
                        <div className="w-full bg-[#0D0D0D] border border-[#404040] rounded-2xl p-5 text-white text-ledt">
                            {features[current].icon}
                            <h3 className="font-semibold text-xl mb-2">{features[current].title}</h3>
                            <p className="text-[#B0B0B0] text-base">{features[current].description}</p>
                        </div>

                    </div>
                    <div className=" flex justify-center gap-6">
                        <button
                            onClick={handlePrev}
                            className="bg-[#161616] bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full"
                        >
                            <FaChevronLeft />
                        </button>
                        <button
                            onClick={handleNext}
                            className="bg-[#161616] bg-opacity-70 hover:bg-opacity-90 text-white p-3 rounded-full"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </div>
            <div className="border border-[#404040] w-full my-20"></div>
        </div>
    );
};

export default DataCollector;
