import React from 'react';
import AudioPlayer from './AudioPlayer';





const Story = () => {
    return (
        <div className=''>
            <div className="flex flex-col items-center gap-4 sm:gap-5 lg:gap-6 my-10 sm:my-20 lg:my-40 px-4 sm:px-6 lg:px-8 ">
            <h1 className="mb-4 sm:mb-5 text-2xl md:text-5xl font-bold w-full sm:w-3/4 md:w-2/3 lg:w-2/5 mx-auto text-center">
                The Story Behind Treedi
            </h1>
            <p className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto text-center mb-4 sm:mb-4 text-base sm:text-lg md:text-xl text-[#B0B0B0]">
                Treedi was born from one Canadian’s promise—to change lives across the country. After watching the economy collapse and seeing that over 50% of Canadians live paycheck to paycheck, he made a decision: to build something that would cut costs for every Canadian, in every industry.
            </p>
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-10/12">
                <img src="/assets/Frame2.png" alt="Story Image" className="w-full h-auto rounded-lg" />
            </div>
            <div className="border border-[#404040] w-full my-20"></div>
            <h1 className="mb-4 sm:mb-5 text-3xl sm:text-4xl md:text-5xl font-bold w-full sm:w-3/4 md:w-2/3 lg:w-2/5 mx-auto text-center lg:mt-20 ">
                A Word from the Founder
            </h1>
            <p className="w-full sm:w-3/4 md:w-2/3 lg:w-2/7 mx-auto text-center mb-4 sm:mb-4 text-base sm:text-lg md:text-xl text-[#B0B0B0]">
                This audio message comes straight from the founder’s heart. He shares his story and explains why Treedi was created to bring real change to Canada.
            </p>
            <div className=" flex items-center justify-center">
      <AudioPlayer src="/audio/ben_10_remix.mp3" /> 
    </div>
            <div className="border border-[#404040] w-full my-20"></div>
        </div> 
        </div>    
    );
};

export default Story;