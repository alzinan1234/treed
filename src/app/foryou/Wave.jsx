"use client"
import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';
const Wave = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth < 640); // Tailwind sm breakpoint
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);
    return (
        <div className='py-10 flex flex-col justify-center'>
            <img src="/assets/wave.png" alt="" />
            <Marquee
                loop={0}
                gradient={!isMobile}
                gradientColor="rgb(0,0,0)"
                gradientWidth={350}
                autoFill
            >
                <h3 className='text-xl font-semibold w-2/3 text-center'>
                    I'm walking in Calgary — what's that tall glass building in front of me called?
                </h3>
                <h3 className='text-xl font-semibold w-2/3 text-center'>
                    I'm driving — find me free parking near Rebel Toronto that's available right now
                </h3>
                <h3 className='text-xl font-semibold w-2/3 text-center'>
                    Where's the closest open public washroom in downtown Québec City?
                </h3>
            </Marquee>
            <div className='flex items-center justify-center gap-2 mt-20'>
                <span className='text-center text-[#B0B0B0] '>Powerd By</span>
                <img src="/assets/voice.png" alt="" />
                <span className='text-center text-[#B0B0B0] '>Treedi Voice</span>
            </div>

            <div className="border border-[#404040] w-full my-20"></div>
        </div>
    );
};

export default Wave;