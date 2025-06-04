import React from 'react';

const Power = () => {
    return (
        <div>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row justify-evenly items-center gap-8">
                <div className="w-full lg:w-1/2 flex flex-col justify-start">
                    <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold">
                        The Power of Unity Will Be Proven — You’ll Move for Up to 15¢ per km
                    </h1>
                    <p className="mb-5 text-left text-[#B0B0B0] text-sm sm:text-base md:text-lg">
                        Treedi will show what’s possible when people come together. By connecting with Road Data Collectors already heading your way, you’ll be able to move for up to 15¢ per kilometer. But this is just the beginning. We’re arriving to destroy every overpriced industry — one by one — and change the rules forever.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img src="/assets/glass.png" alt="Glass" className="max-w-full h-auto" />
                </div>
            </div>
            <div className="border border-[#404040] w-full my-20"></div>
        </div>
    );
};

export default Power;
