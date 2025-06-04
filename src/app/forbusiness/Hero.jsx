import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <div
            className="hero min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]"
            style={{
                backgroundImage: "url('/assets/BusBanner.png')"
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <h1 className="mb-4 sm:mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        One Map.<br />
                        Millions of Businesses Empowered.
                    </h1>
                    <p className="mb-4 sm:mb-5 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 text-base sm:text-lg md:text-xl text-center">
                        Treedimap will revolutionize how thousands — even millions — of companies grow acrossCanada. With our ultra-realistic and interactive 3D map covering the entire country.
                    </p>
                    <button className="btn bg-[#7A31F4] border-none text-white rounded-4xl px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base">
                        Download App
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Hero;