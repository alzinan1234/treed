import React from 'react';
import { FaLink } from 'react-icons/fa6';

const Drive = () => {
    return (
        <div className="py-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            {/* Main Content */}
            <div className="flex flex-col items-center my-5 py-8 text-white">
                <h1 className="mb-5 text-3xl sm:text-4xl md:text-6xl font-bold text-center">
                    Don’t Drive Empty
                </h1>
                <p className="mb-5 text-[#B0B0B0] max-w-2xl text-center text-base sm:text-lg">
                    If you're already on the road, make your journey count. By simply following your GPS, you can help fellow Canadians—many living paycheck to paycheck—get where they need to go. No detours, no extra effort.
                </p>

                <div className="my-8  lg:w-2/3">
                    <img src="/assets/drive.png" alt="Drive" className="w-full h-auto" />
                </div>
                <div className="border border-[#404040] w-full my-20"></div>

                <h1 className="mb-5 text-3xl sm:text-4xl md:text-6xl font-bold text-center">
                    Help Others — But Follow the Rules
                </h1>
                <p className="mb-5 text-[#B0B0B0] max-w-2xl text-center text-base sm:text-lg">
                    You might sometimes help someone going your way, but your mission is
                    to follow the GPS precisely — we’re collecting road data for TreediMap,
                    and every move counts.
                </p>
            </div>

            {/* Info Cards */}
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((_, idx) => (
                    <div key={idx} className="border border-[#404040] rounded-lg p-6 text-white">
                        <FaLink className="text-[#9155F7] mb-6 mt-2 text-3xl" />
                        <h3 className="font-semibold text-xl sm:text-2xl mb-2">
                            Improving how your systems interact with our APIs
                        </h3>
                        <p className="text-[#B0B0B0] text-base sm:text-lg">
                            You’re not a taxi. Asking for more than gas and wear compensation is illegal and will result in an immediate and permanent ban.
                        </p>
                    </div>
                ))}
            </div>
            <p className="my-10 max-w-2xl text-center text-base sm:text-lg">
                You are a road data collector following a GPS to gather precise road data for TreediMap 2028 — not a taxi service. You're simply helping someone who’s heading the same way by offering a seat.
            </p>
            <div className="border border-[#404040] w-full my-20"></div>
        </div>
    );
};

export default Drive;
