import React from 'react';

const Mapping = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center my-6 sm:my-8 lg:my-10 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-xl md:text-5xl font-bold mb-4">
                        Prepare Your Clients for a Mapping <br />
                        Experience Like Never Before
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-[#B0B0B0] max-w-3xl mx-auto">
                        TreediMap is set to deliver a client experience unlike anything the world has seen. Starting in 2028, we are ready to support a wide range of industries with the most advanced, independent 3D mapping system ever built in Canada.
                    </p>
                </div>
                <div className="w-full sm:w-3/4 md:w-2/3 lg:w-9/12">
                    <img src="/assets/map.png" alt="TreediMap Illustration" className="w-full h-auto rounded-lg" />
                </div>
                <div className="border border-[#404040] w-full my-20"></div>
                <div className="p-6 sm:p-8 lg:p-10 bg-[#161616] rounded-2xl my-10 sm:my-16 lg:my-20 w-full sm:w-11/12 lg:w-10/12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 lg:mb-14 text-center sm:text-left">
                        Here’s How Your Company Will
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        <div className="bg-[#0D0D0D] rounded-2xl">
                            <img src="/assets/real.png" className="rounded-t-2xl w-full h-48 sm:h-56 object-cover" alt="Real Estate API" />
                            <div className="p-4 sm:p-5">
                                <h2 className="text-xl sm:text-2xl font-semibold">Revolutionize Real Estate Platforms with TreediMap API’s</h2>
                                <p className="text-[#B0B0B0] my-3 sm:my-4 pb-4 sm:pb-6 text-sm sm:text-base">
                                    TreediMap API transforms any real estate platform—like Realtor.ca—into a fully interactive, intelligent discovery system. Let your users explore not just a property, but the entire lifestyle around it.
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#0D0D0D] rounded-2xl">
                            <img src="/assets/real.png" className="rounded-t-2xl w-full h-48 sm:h-56 object-cover" alt="Real Estate API" />
                            <div className="p-4 sm:p-5">
                                <h2 className="text-xl sm:text-2xl font-semibold">Revolutionize Real Estate Platforms with TreediMap API’s</h2>
                                <p className="text-[#B0B0B0] my-3 sm:my-4 pb-4 sm:pb-6 text-sm sm:text-base">
                                    TreediMap API transforms any real estate platform—like Realtor.ca—into a fully interactive, intelligent discovery system. Let your users explore not just a property, but the entire lifestyle around it.
                                </p>
                            </div>
                        </div>
                        <div className="bg-[#0D0D0D] rounded-2xl">
                            <img src="/assets/real.png" className="rounded-t-2xl w-full h-48 sm:h-56 object-cover" alt="Real Estate API" />
                            <div className="p-4 sm:p-5">
                                <h2 className="text-xl sm:text-2xl font-semibold">Revolutionize Real Estate Platforms with TreediMap API’s</h2>
                                <p className="text-[#B0B0B0] my-3 sm:my-4 pb-4 sm:pb-6 text-sm sm:text-base">
                                    TreediMap API transforms any real estate platform—like Realtor.ca—into a fully interactive, intelligent discovery system. Let your users explore not just a property, but the entire lifestyle around it.
                                </p>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-2xl w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto text-center font-medium mt-8 sm:mt-10 lg:mt-14 mb-0">
                        With all of Canada on one map, TreediMap is ready to deliver custom solutions for thousands of industries.
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Mapping;