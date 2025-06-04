import React from 'react';

const ApiCard = () => {
    return (
        <div className="pb-6 sm:pb-8 lg:pb-10">
            <div className="hero-content mx-auto text-neutral-content text-center px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center">
                    <h1 className="mb-4 sm:mb-5 text-xl lg:text-5xl md:text-6xl font-bold">
                        Need a Custom Map? <br />We’ve Got You.
                    </h1>
                    <p className="mb-4 sm:mb-5 w-full sm:w-2/3 md:w-1/2 text-center text-base sm:text-lg md:text-xl">
                        If you don’t need everything included in the full TreediMap 3D API, you can request a custom version with only the features you want. Just contact our support team—we’ll adjust your API and lower the cost accordingly.
                    </p>
                </div>
            </div>
            <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 my-6 sm:my-8 lg:my-10 w-full sm:w-11/12 lg:w-10/12 mx-auto overflow-x-auto sm:overflow-visible px-4">
                {/* 1st */}
                <div className="card min-w-[90%] sm:min-w-0 flex-shrink-0 bg-[#161616] shadow-xl border border-[#404040] py-4 sm:py-5">
                    <div className="card-body">
                        <h2 className="card-title text-xl sm:text-2xl font-bold mb-3 sm:mb-4">TreediMap 3D API</h2>
                        <ul className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 text-base sm:text-lg font-medium">
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-2 sm:mr-3">
                                    <img src="/assets/list.svg" alt="List icon" className="w-4 sm:w-5 h-auto" />
                                </div>
                                <p className="text-white">Smart route planning</p>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-2 sm:mr-3">
                                    <img src="/assets/list.svg" alt="List icon" className="w-4 sm:w-5 h-auto" />
                                </div>
                                <p className="text-white">Live travel time estimates</p>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-2 sm:mr-3">
                                    <img src="/assets/list.svg" alt="List icon" className="w-4 sm:w-5 h-auto" />
                                </div>
                                <p className="text-white">Real-time slowdowns and road conditions</p>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-2 sm:mr-3">
                                    <img src="/assets/list.svg" alt="List icon" className="w-4 sm:w-5 h-auto" />
                                </div>
                                <p className="text-white">Dynamic re-routing based on current movement data</p>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-2 sm:mr-3">
                                    <img src="/assets/list.svg" alt="List icon" className="w-4 sm:w-5 h-auto" />
                                </div>
                                <p className="text-white">Hour-by-hour traffic patterns</p>
                            </li>
                        </ul>
                        <div className="divider"></div>
                        <div className="flex justify-between mb-3 sm:mb-4">
                            <fieldset className="fieldset w-2/5">
                                <legend className="fieldset-legend text-[#B0B0B0] text-xl sm:text-2xl">TREEDIMAP 3D API</legend>
                                <input type="number" className="input w-full bg-black rounded-xl text-right text-base sm:text-lg" placeholder="1000" />
                            </fieldset>
                            <div className="text-right">
                                <h2 className="font-medium text-4xl sm:text-5xl">$0</h2>
                                <p className="text-lg text-[#B0B0B0]">per month (estimate)</p>
                            </div>
                        </div>
                        <div className="w-full px-4 py-6 ">
                            <div className="relative w-full h-2 rounded-full bg-gray-700">
                                {/* Progress line */}
                                <div className="absolute top-0 left-0 h-2 bg-[#8B4CFC] rounded-full" style={{ width: '25%' }}></div>

                                {/* Step indicator */}
                                <div className="absolute top-1/2 left-[25%] -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center">
                                    <div className="w-3 h-3 rounded-full bg-[#8B4CFC]"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between text-[#8E8D94] text-base sm:text-lg font-medium mt-2">
                            <span>0</span>
                            <span>100m</span>
                        </div>
                    </div>
                </div>
                {/* 2nd */}
                <div className="card min-w-[90%] sm:min-w-0 flex-shrink-0 bg-[#161616] shadow-xl border border-[#404040] py-4 sm:py-5">
                    <div className="card-body">
                        <h2 className="card-title text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Treedi Traffic API</h2>
                        <ul className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 text-base sm:text-lg font-medium">
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-2 sm:mr-3">
                                    <img src="/assets/list.svg" alt="List icon" className="w-4 sm:w-5 h-auto" />
                                </div>
                                <p className="text-white">Real-time slowdowns and road conditions</p>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-2 sm:mr-3">
                                    <img src="/assets/list.svg" alt="List icon" className="w-4 sm:w-5 h-auto" />
                                </div>
                                <p className="text-white">Live travel time estimates</p>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-2 sm:mr-3">
                                    <img src="/assets/list.svg" alt="List icon" className="w-4 sm:w-5 h-auto" />
                                </div>
                                <p className="text-white">Dynamic re-routing based on current movement data</p>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-2 sm:mr-3">
                                    <img src="/assets/list.svg" alt="List icon" className="w-4 sm:w-5 h-auto" />
                                </div>
                                <p className="text-white">Smart route planning</p>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-2 sm:mr-3">
                                    <img src="/assets/list.svg" alt="List icon" className="w-4 sm:w-5 h-auto" />
                                </div>
                                <p className="text-white">Hour-by-hour traffic patterns</p>
                            </li>
                        </ul>
                        <div className="divider"></div>
                        <div className="flex justify-between mb-3 sm:mb-4">
                            <fieldset className="fieldset w-2/5">
                                <legend className="fieldset-legend text-[#B0B0B0] text-xl sm:text-2xl">TREEDI TRAFFIC API</legend>
                                <input type="number" className="input w-full bg-black rounded-xl text-right text-base sm:text-lg" placeholder="1000" />
                            </fieldset>
                            <div className="text-right">
                                <h2 className="font-medium text-4xl sm:text-5xl">$0</h2>
                                <p className="text-lg text-[#B0B0B0]">per month (estimate)</p>
                            </div>
                        </div>
                        <div className="w-full px-4 py-6 ">
                            <div className="relative w-full h-2 rounded-full bg-gray-700">
                                {/* Progress line */}
                                <div className="absolute top-0 left-0 h-2 bg-[#8B4CFC] rounded-full" style={{ width: '25%' }}></div>

                                {/* Step indicator */}
                                <div className="absolute top-1/2 left-[25%] -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center">
                                    <div className="w-3 h-3 rounded-full bg-[#8B4CFC]"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between text-[#8E8D94] text-base sm:text-lg font-medium mt-2">
                            <span>0</span>
                            <span>100m</span>
                        </div>
                    </div>
                </div>
                {/* 3rd */}
                <div className="card min-w-[90%] sm:min-w-0 flex-shrink-0 bg-[#161616] shadow-xl border border-[#404040] py-4 sm:py-5">
                    <div className="card-body">
                        <h2 className="card-title text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Treedi Search API</h2>
                        <ul className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 text-base sm:text-lg font-medium">
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-2 sm:mr-3">
                                    <img src="/assets/list.svg" alt="List icon" className="w-4 sm:w-5 h-auto" />
                                </div>
                                <p className="text-white">Real-time slowdowns and road conditions</p>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-2 sm:mr-3">
                                    <img src="/assets/list.svg" alt="List icon" className="w-4 sm:w-5 h-auto" />
                                </div>
                                <p className="text-white">Live travel time estimates</p>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-2 sm:mr-3">
                                    <img src="/assets/list.svg" alt="List icon" className="w-4 sm:w-5 h-auto" />
                                </div>
                                <p className="text-white">Dynamic re-routing based on current movement data</p>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-2 sm:mr-3">
                                    <img src="/assets/list.svg" alt="List icon" className="w-4 sm:w-5 h-auto" />
                                </div>
                                <p className="text-white">Smart route planning</p>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-2 sm:mr-3">
                                    <img src="/assets/list.svg" alt="List icon" className="w-4 sm:w-5 h-auto" />
                                </div>
                                <p className="text-white">Hour-by-hour traffic patterns</p>
                            </li>
                        </ul>
                        <div className="divider"></div>
                        <div className="flex justify-between mb-3 sm:mb-4">
                            <fieldset className="fieldset w-2/5">
                                <legend className="fieldset-legend text-[#B0B0B0] text-xl sm:text-2xl">TREEDI SEARCH API</legend>
                                <input type="number" className="input w-full bg-black rounded-xl text-right text-base sm:text-lg" placeholder="1000" />
                            </fieldset>
                            <div className="text-right">
                                <h2 className="font-medium text-4xl sm:text-5xl">$0</h2>
                                <p className="text-lg text-[#B0B0B0]">per month (estimate)</p>
                            </div>
                        </div>
                        <div className="w-full px-4 py-6 ">
                            <div className="relative w-full h-2 rounded-full bg-gray-700">
                                {/* Progress line */}
                                <div className="absolute top-0 left-0 h-2 bg-[#8B4CFC] rounded-full" style={{ width: '25%' }}></div>

                                {/* Step indicator */}
                                <div className="absolute top-1/2 left-[25%] -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center">
                                    <div className="w-3 h-3 rounded-full bg-[#8B4CFC]"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between text-[#8E8D94] text-base sm:text-lg font-medium mt-2">
                            <span>0</span>
                            <span>100m</span>
                        </div>
                    </div>
                </div>
                {/* 4th */}
                <div className="card min-w-[90%] sm:min-w-0 flex-shrink-0 bg-[#161616] shadow-xl border border-[#404040] py-4 sm:py-5">
                    <div className="card-body">
                        <h2 className="card-title text-xl sm:text-2xl font-bold mb-3 sm:mb-4">TreediVoice API</h2>
                        <ul className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 text-base sm:text-lg font-medium">
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-2 sm:mr-3">
                                    <img src="/assets/list.svg" alt="List icon" className="w-4 sm:w-5 h-auto" />
                                </div>
                                <p className="text-white">Real-time slowdowns and road conditions</p>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-2 sm:mr-3">
                                    <img src="/assets/list.svg" alt="List icon" className="w-4 sm:w-5 h-auto" />
                                </div>
                                <p className="text-white">Live travel time estimates</p>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-2 sm:mr-3">
                                    <img src="/assets/list.svg" alt="List icon" className="w-4 sm:w-5 h-auto" />
                                </div>
                                <p className="text-white">Dynamic re-routing based on current movement data</p>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-2 sm:mr-3">
                                    <img src="/assets/list.svg" alt="List icon" className="w-4 sm:w-5 h-auto" />
                                </div>
                                <p className="text-white">Smart route planning</p>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-2 sm:mr-3">
                                    <img src="/assets/list.svg" alt="List icon" className="w-4 sm:w-5 h-auto" />
                                </div>
                                <p className="text-white">Hour-by-hour traffic patterns</p>
                            </li>
                        </ul>
                        <div className="divider"></div>
                        <div className="flex justify-between mb-3 sm:mb-4">
                            <fieldset className="fieldset w-2/5">
                                <legend className="fieldset-legend text-[#B0B0B0] text-xl sm:text-2xl">TREEDIVOICE API</legend>
                                <input type="number" className="input w-full bg-black rounded-xl text-right text-base sm:text-lg" placeholder="1000" />
                            </fieldset>
                            <div className="text-right">
                                <h2 className="font-medium text-4xl sm:text-5xl">$0</h2>
                                <p className="text-lg text-[#B0B0B0]">per month (estimate)</p>
                            </div>
                        </div>
                        <div className="w-full px-4 py-6 ">
                            <div className="relative w-full h-2 rounded-full bg-gray-700">
                                {/* Progress line */}
                                <div className="absolute top-0 left-0 h-2 bg-[#8B4CFC] rounded-full" style={{ width: '25%' }}></div>

                                {/* Step indicator */}
                                <div className="absolute top-1/2 left-[25%] -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center">
                                    <div className="w-3 h-3 rounded-full bg-[#8B4CFC]"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between text-[#8E8D94] text-base sm:text-lg font-medium mt-2">
                            <span>0</span>
                            <span>100m</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApiCard;