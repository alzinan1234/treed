'use client';
import Marquee from 'react-fast-marquee';
import { useRouter } from 'next/navigation';

const Map = () => {
    const router = useRouter();

    const handleFocus = () => {
        router.push('/location');
    };

    return (
        <div className='py-10 px-4'>
            {/* Header Section */}
            <div className="flex flex-col items-center my-5 text-white">
                <h1 className="max-w-5xl mb-5 text-3xl md:text-6xl font-bold text-center">
                    TreediMap Is Rolling
                    <br /> Out in 85+ Cities
                </h1>
                <p className="mb-5 max-w-2xl text-center text-[#B0B0B0] text-base md:text-xl">
                    We’re launching the development of TreediMap in over 85 cities across Canada.
                    If you see your city listed below, don’t wait — join the Road Data Collectors now.
                </p>
            </div>

            {/* Map Image + Search Input */}
            <div
                className="hero min-h-[400px] md:min-h-[600px] w-full md:w-8/12 mx-auto rounded-2xl bg-cover bg-center relative"
                style={{
                    backgroundImage: "url('/assets/map2.png')",
                }}
            >
                <div className="hero-overlay"></div>

                <div className="w-full px-4 md:px-0">
                    <label className="relative w-full max-w-xl mx-auto block -mt-32 md:-mt-40">
                        <svg
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.3-4.3" />
                            </g>
                        </svg>
                        <input
                            type="search"
                            className="w-full pl-12 pr-4 py-4 bg-[#161616] bg-cover bg-center text-white rounded-full shadow-3xl placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9155F7]"
                            placeholder="Search City"
                            onFocus={handleFocus}
                        />
                    </label>
                </div>
            </div>

            {/* Marquee Section */}
            <div className="my-10">
                <Marquee
                    loop={0}
                    gradient
                    gradientColor="rgb(0,0,0)"
                    gradientWidth={100}
                    autoFill
                    className="text-white"
                >
                    {['Victoria', 'Quebec City', 'Winnipeg', 'Toronto', 'Halifax'].map((city, index) => (
                        <h2 key={index} className="text-lg md:text-xl font-bold ml-16 md:ml-28">
                            {city}
                        </h2>
                    ))}
                </Marquee>
            </div>

        </div>
    );
};

export default Map;
