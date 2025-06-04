import React from 'react';

const Court = () => {
    return (
        <div className="my-10 py-10 px-4 sm:px-6 lg:px-8">
            <div
                className="hero min-h-[600px] sm:min-h-[700px] md:min-h-[800px] bg-cover bg-center"
                style={{
                    backgroundImage: "url('/assets/imageMan.png')",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="flex flex-col items-center px-4">
                        <h1 className="mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                            The Ball Is Now in Your Court
                        </h1>
                        <p className="mb-5 w-full sm:w-4/5 md:w-3/5 lg:w-1/2 text-[#D9D9D9] text-sm sm:text-base md:text-lg">
                            If you want real change in your life — access to services, products, and platforms at a fraction of the price — it starts with Treedi. This non-profit company is here to change the lives of millions of Canadians.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <p className="my-5 mx-auto text-center text-[#D9D9D9] text-base sm:text-lg md:text-xl lg:text-2xl font-medium w-full sm:w-4/5 md:w-2/3 lg:w-1/2">
                    Because the only way to break free from overpriced systems is to stop feeding them — and choose the one built for you.
                </p>
            </div>
            <div className="border border-[#404040] w-full my-20"></div>
        </div>
    );
};

export default Court;
