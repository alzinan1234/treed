import React from 'react';
import { FaLink } from 'react-icons/fa6';

const Move = () => {
    return (
        <div className="w-full px-4 md:px-8 lg:px-16 flex flex-col items-center justify-center min-h-screen py-10">
            {/* Header */}
            <div className="flex flex-col items-center text-center mb-8">
                <h1 className="mb-4 text-3xl sm:text-4xl md:text-6xl font-bold">
                    Don’t worry
                </h1>
                <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#B0B0B0]">
                    Once our Road Data Collection project is complete and we’ve mapped all of Canada for TreediMap, we’ll introduce another ultra-creative solution so you can keep moving at the same low price forever.
                </p>
            </div>
            <div className="border border-[#404040] w-full my-20"></div>
            <div className="flex flex-col items-center my-5 text-white">
                <h1 className="lg:w-2/3 mb-5 text-lg md:text-5xl font-bold text-center">
                    How Can You Move for Almost Nothing?
                </h1>
                <p className="mb-5 max-w-2xl text-[#B0B0B0] text-center text-base md:text-xl">
                    Thanks to TreediMap — a fully Canadian, next-gen
                    mapping service launching in 2028.
                </p>
            </div>

            {/* Content Block */}
            <div className="flex flex-col md:flex-row gap-10 justify-center items-center w-full max-w-7xl">
                {/* Image Section */}
                <div className="relative w-full md:w-1/2 flex justify-center">
                    <img
                        src="/assets/iPhone.png"
                        alt="iPhone"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0D0D0D] to-[#0d0d0d25]"></div>
                </div>

                {/* Cards Section */}
                <div className="w-full flex gap-2 items-center md:w-1/2 space-y-6">
                    <div className="flex flex-col items-center h-80 w-12 relative mx-auto">
                        {/* Top circle */}
                        <div className="w-6 h-6 rounded-full bg-purple-500 z-10"></div>

                        {/* Vertical gradient line */}
                        <div className="w-1 h-full bg-gradient-to-b from-purple-500 via-gray-700 to-gray-900"></div>

                        {/* Bottom circle */}
                        <div className="w-6 h-6 rounded-full border-2 border-gray-500 bg-transparent z-10 mt-[-0.75rem]"></div>
                    </div>
                    <div>
                        <div className="border border-[#404040] bg-[#161616] rounded-2xl p-5 mb-8">
                            <FaLink className="text-[#9155F7] mb-4 mt-2 text-[30px]" />
                            <h3 className="font-semibold text-2xl mb-2">TreediMap 2028 Begins</h3>
                            <p className="text-[#B0B0B0] text-base md:text-lg">
                                Starting fall 2025, we begin building TreediMap — Canada’s own futuristic mapping system, with thousands of Road Data Collectors gathering real-world data using fully in-house technology and zero third-party reliance.
                            </p>
                        </div>
                        <div className="border border-[#404040] bg-[#161616] rounded-2xl p-5">
                            <FaLink className="text-[#9155F7] mb-4 mt-2 text-[30px]" />
                            <h3 className="font-semibold text-2xl mb-2">Move for Less, Thanks to TreediMap</h3>
                            <p className="text-[#B0B0B0] text-base md:text-lg">
                                Since Road Data Collectors are already on the road following GPS routes for TreediMap, you can join their car if they’re heading your way. You’ll only cover gas and car expenses — a creative way to move without paying more than necessary.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-[#404040] w-full my-20"></div>
        </div>
    );
};

export default Move;
