"use client";
import { useState } from 'react';
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

export default function TreediCarouselSection() {
    const [current, setCurrent] = useState(0);

    const handlePrev = () => {
        setCurrent(prev => (prev === 0 ? features.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrent(prev => (prev === features.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className='py-10 w-11/12 mx-auto'>
            <div className="h-96 mx-auto sm:h-[600px] lg:h-[800px] w-full bg-[#161616] my-10 sm:my-8 lg:my-10 text-center ml-0 flex items-center justify-center">
                <p className='lg:text-5xl lg:font-bold'> Waiting for title</p>
            </div>
            {/* Header Section */}
            <div className="flex flex-col items-center p-4 sm:p-8">
                <h1 className="mb-4 text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center w-full sm:w-5/6 lg:w-2/3">
                    TreediMap Will Replace Every Navigation App
                </h1>
                <p className="mb-6 text-sm sm:text-base lg:text-lg text-center w-full sm:w-5/6 lg:w-2/3 xl:w-1/2 text-[#B0B0B0]">
                    In 2028, TreediMap will become the most realistic 3D map of Canada ever built. You will be able to explore the entire country as if you were truly there—street by street, city by city.
                </p>
            </div>

            <div className="w-full flex justify-center">
                <img
                    src="/assets/ipad.png"
                    className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto object-contain"
                    alt="iPad"
                />
            </div>

            <div className=" hidden md:block lg:flex lg:flex-col lg:items-start">
                <div className=" z-10 overflow-hidden">
                    <div className=" w-full ml-52 flex justify-center gap-4 z-20 mt-10">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`bg-[#0D0D0D] border border-[#404040] rounded-3xl p-4 text-white transition-all duration-300 ${current === index ? 'ring-2 ring-[#9155F7]' : ''
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
                <div className=" flex justify-center gap-6 z-30 ml-52 mt-8">
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

            {/* Mobile Carousel View */}
            <div className="md:hidden px-4 mt-10">
                <div className="relative w-full flex flex-col items-start text-ledt">
                    <div className="bg-[#0D0D0D] border border-[#404040] rounded-2xl p-6 text-white transition-all duration-300">
                        {features[current].icon}
                        <h3 className="font-semibold text-xl mb-2">{features[current].title}</h3>
                        <p className="text-[#B0B0B0] text-base">{features[current].description}</p>
                    </div>

                    {/* Mobile Buttons */}
                    <div className="flex justify-center mt-6 gap-6 z-30">
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
            </div>
            <div className="border border-[#404040] w-full my-20"></div>

            {/* Footer Text Section */}
            <div className='pt-20 text-center max-w-4xl mx-auto px-4'>
                <h1 className="mb-5 text-3xl sm:text-6xl font-bold">
                    Treedivoice Is So Futuristic, It Feels Impossible.
                </h1>
                <p className="text-base text-[#8D9094] sm:text-lg">
                    Powered by our next-gen map, Treedivoice can answer absolutely anything you ask — no matter how specific — with instant, detailed, and accurate responses every time.
                </p>
            </div>
        </div>
    );
}
