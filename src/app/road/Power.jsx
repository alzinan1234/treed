import React from 'react';

const Power = () => {
    return (
        <div>
            <div className='w-11/12 md:w-9/12 mx-auto flex flex-col md:flex-row justify-evenly items-center gap-2 md:gap-2 py-10'>
                <div className='w-full flex flex-col justify-start'>
                    <h1 className="w-5/6 mb-5 text-2xl md:text-6xl font-bold text-left lg:text-center">
                        Earn Up to $30/Hour — If You Qualify
                    </h1>
                    <p className="mb-5 lg:w-2/3 text-[#D9D9D9] text-base md:text-lg lg:text-center md:text-left">
                        Road Data Collection is serious work. If you’re approved but fail to follow instructions, you’ll be removed immediately — the data is too sensitive to risk mistakes. But if you’re accepted and do the job right, you’ll earn up to $30 per hour — or more. Check if your city is listed below and apply now. Spots are very limited.
                    </p>
                </div>
                <div className='w-full '>
                    <img src="/assets/glass.png" alt="Glass Icon" className="w-full max-w-sm md:max-w-full" />
                </div>
            </div>
            <div className="border border-[#404040] w-full my-20"></div>
        </div>
    );
};

export default Power;
