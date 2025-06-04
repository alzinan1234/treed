import React from 'react';

const Slash = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <h2 className="text-2xl lg::text-4xl md:text-5xl font-semibold lg:mb-15 mb-8">
                Slashing Costs Like Never Before
            </h2>

            {/* Image */}
            <div className="w-full max-w-4xl mb-6">
                <img
                    src="/assets/iPad.png"
                    className="w-full h-auto object-contain mx-auto"
                    alt="iPad"
                />

            </div>

            {/* Description Text */}
            <p className="mb-10 w-full sm:w-4/5 md:w-3/4 lg:w-1/2 text-[#B0B0B0] text-sm sm:text-base md:text-lg">
                Treedi will show what’s possible when people come together. By connecting with Road Data Collectors already heading your way, you’ll be able to move for up to 15¢ per kilometer. But this is just the beginning. We’re arriving to destroy every overpriced industry — one by one — and change the rules forever.
            </p>

            {/* Divider */}
            <div className="border border-[#404040] w-full my-12 sm:my-16 lg:my-20"></div>

            {/* Hero Section */}
            <div
                className="hero min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] w-full bg-cover bg-center"
                style={{
                    backgroundImage: "url('/assets/image1.png')",
                }}
            >
                <div className="hero-overlay" />
                <div className="hero-content text-neutral-content text-center px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center">
                        <h1 className="mb-4 sm:mb-6 text-2xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Treedi Is Opening Its Doors
                        </h1>
                        <p className="mb-4 sm:mb-6 w-full sm:w-4/5 md:w-2/3 lg:w-1/2 text-sm md:text-lg lg:text-xl">
                            Treedi is launching its own physical stores and brand for everything you can imagine—food, clothes, electronics, home goods, and way more. Every product will be our own, made better
                            and sold cheaper. Why? Because we’re cutting profits to the minimum so you can get top quality at prices no one else can match.
                        </p>
                    </div>
                </div>
            </div>
            {/* Divider */}
            <div className="border-[1px] border-[#404040] w-full my-12 sm:my-16 lg:my-20"></div>
        </div>
    );
};

export default Slash;
