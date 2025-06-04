import React from 'react';

const Offers = () => {
    return (
        <div>
            <div className="w-10/12 my-10 sm:my-16 lg:my-40 mx-auto sm:px-6 lg:px-8">
                <div>
                    <h1 className="mb-4 sm:mb-5 text-3xl sm:text-4xl md:text-5xl font-bold w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto text-center">
                        Why Will Treedi Offer Unbeatable Prices Everywhere?
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-2 mx-auto my-4 sm:my-6">
                    <div className="p-3 sm:p-4 bg-[#161616] border-[1px] border-[#404040] rounded-2xl my-3 sm:my-4">
                        <figure className="">
                            <img
                                src="/assets/Frame1.png"
                                alt="Shoes"
                                className="rounded-xl w-full h-48 sm:h-56 object-cover" />
                        </figure>
                        <div className="">
                            <h2 className="text-xl sm:text-2xl font-semibold my-2 sm:my-4">No Investors, No Public Offering</h2>
                            <p className="text-base sm:text-lg">We will never take outside investors or go public.</p>
                        </div>
                    </div>
                    <div className="p-3 sm:p-4 bg-[#161616] border-[1px] border-[#404040] rounded-2xl my-3 sm:my-4">
                        <figure className="">
                            <img
                                src="/assets/Frame1.png"
                                alt="Shoes"
                                className="rounded-xl w-full h-48 sm:h-56 object-cover" />
                        </figure>
                        <div className="">
                            <h2 className="text-xl sm:text-2xl font-semibold my-2 sm:my-4">Building Our Own Technologies</h2>
                            <p className="text-base sm:text-lg">Treedi will develop its own platforms instead of relying on third parties.</p>
                        </div>
                    </div>
                    <div className="p-3 sm:p-4 bg-[#161616] border-[1px] border-[#404040] rounded-2xl my-3 sm:my-4">
                        <figure className="">
                            <img
                                src="/assets/Frame1.png"
                                alt="Shoes"
                                className="rounded-xl w-full h-48 sm:h-56 object-cover" />
                        </figure>
                        <div className="">
                            <h2 className="text-xl sm:text-2xl font-semibold my-2 sm:my-4">Non-Profit & Low-Profit Services</h2>
                            <p className="text-base sm:text-lg">Almost all Treedi features will be non-profit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border border-[#404040] w-full my-20"></div>
        </div>
    );
};

export default Offers;