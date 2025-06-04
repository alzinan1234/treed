import React from 'react';

const TreediTogether = () => {
    const steps = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
            ),
            title: "Choose Your Time Block",
            description:
                "Log into the app and select your available time block: 2 hours, 3 hours, or 4 hours.",
            number: 1,
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            ),
            title: "Follow The GPS",
            description:
                "Once your block begins, follow the GPS directions. The GPS will guide you along your route.",
            number: 2,
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01" />
                </svg>
            ),
            title: "Answer Simple Questions",
            description:
                "As you drive, TreediMap will prompt you with questions to gather real-world data.",
            number: 3,
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
                </svg>
            ),
            title: "End Of Your Time Block",
            description:
                "As your time block ends, the GPS will automatically guide you back home or to your starting point.",
            number: 4,
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
            ),
            title: "Automatic Offline Status",
            description:
                "Once you arrive at your destination, the system will automatically go offline for you.",
            number: 5,
        },
    ];

    return (
        <div className="py-10 px-4">
            <div className='flex flex-col items-center justify-center'>
                <h1 className="lg:w-2/8 text-3xl lg:text-5xl md:text-5xl font-bold text-center">
                    Mapping Canada,
                    One Street at a Time
                </h1>
                <p className="lg:w-3/9 mt-4 text-base sm:text-lg text-center text-[#B0B0B0]">
                    TreediMap is a revolutionary mapping system being built from scratch. As we begin its development, one of the first major steps is creating our own traffic data for a custom Traffic API.
                </p>
            </div>
            <div className="border border-[#404040] w-full my-20"></div>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center md:items-start gap-10">
                {/* Left Section */}
                <div className="text-white flex flex-col items-center md:items-start w-full md:w-1/2">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center md:text-left">
                        Building TreediMap Together
                    </h1>
                    <p className="mt-4 text-base sm:text-lg text-center md:text-left">
                        TreediMap is a cutting-edge mapping system being built from scratch. To create the most accurate and intelligent map, we need real, street-level data directly from the road. Here’s how you can be part of it.
                    </p>
                    <div className="relative flex justify-center md:justify-start w-full max-w-sm sm:max-w-md mt-6">
                        <img src="/assets/iPhone.png" alt="iPhone" className="w-full h-auto z-10" />
                        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0dce] to-transparent pointer-events-none rounded" />
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 lg:mt-20">
                    <div className="space-y-6 flex flex-col items-center">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="w-full sm:w-4/5 bg-[#161616] border border-[#404040] rounded-lg p-5 flex items-center justify-between shadow-xl backdrop-blur-sm"
                            >
                                <div className="flex items-start gap-4 p-2">
                                    <div className="text-white">{step.icon}</div>
                                    <div className="text-white">
                                        <h3 className="font-bold text-base sm:text-lg">{step.title}</h3>
                                        <p className="text-gray-400 text-sm mt-1">{step.description}</p>
                                    </div>
                                </div>
                                <div className="shrink-0">
                                    <span className="text-9xl font-extrabold bg-gradient-to-b from-white/20 to-white/10 bg-clip-text text-transparent">
                                        {step.number}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="border border-[#404040] w-full my-20"></div>
        </div>
    );
};

export default TreediTogether;
