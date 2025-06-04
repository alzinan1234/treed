import Link from 'next/link';
import { IoNavigateOutline } from "react-icons/io5";
import { LuFuel } from "react-icons/lu";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaArrowRight, FaLink } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
const TreediCarpooling = () => {
    return (
        <div className="my-6 sm:my-8 lg:my-10 mx-auto pb-4 sm:pb-6 flex flex-col items-center px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <h1 className="lg:text-3xl text-xl md:text-5xl text-center font-semibold lg:font-bold mb-2 w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
                Treedi Carpooling Launches July 1st!
            </h1>
            <p className="w-full text-[#B0B0B0] sm:w-3/4 md:w-2/3 lg:w-1/2 text-center mb-4 text-sm sm:text-base md:text-lg">
                On July 1st, Treedi launches its first service urban carpooling. You'll move around at an extremely low cost because you'll be picked up by route data collectors—not paid drivers.
            </p>
            <button className="btn btn-ghost px-4  sm:px-6 py-2 sm:py-3 border-white rounded-4xl text-sm sm:text-base">
                Learn More About Carpooling <FaArrowRight className='ml-2 mt-1' />

            </button>

            {/* Video/Animation Section */}
            <h2 className="text-lg sm:text-xl md:text-2xl text-center  font-bold p-5 sm:p-6 bg-[#161616] rounded-2xl my-6 sm:my-8 lg:my-10 video-placeholder h-[400px] lg:w-[1058px] w-full">
                Video / Animation
            </h2>
            <section className="lg:w-10/12 mx-auto mb-6 sm:mb-8 ">
                <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-5">
                    {/* Feature 1 */}
                    <div className="border border-[#404040] rounded-2xl p-5 sm:p-6">
                        <IoNavigateOutline className="text-[#9155F7] mb-4 sm:mb-6 mt-2 sm:mt-4 text-2xl sm:text-3xl" />
                        <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">Same Direction</h3>
                        <p className="text-[#B0B0B0] text-sm sm:text-base mb-4 sm:mb-6">They're already heading where you are.</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="border border-[#404040] rounded-2xl p-5 sm:p-6">
                        <LuFuel className="text-[#9155F7] mb-4 sm:mb-6 mt-2 sm:mt-4 text-2xl sm:text-3xl" />
                        <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">Only Gas & Expenses</h3>
                        <p className="text-[#B0B0B0] text-sm sm:text-base mb-4 sm:mb-6">You just cover the cost to help out.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="border border-[#404040] rounded-2xl p-5 sm:p-6">
                        <RiDiscountPercentFill className="text-[#9155F7] mb-4 sm:mb-6 mt-2 sm:mt-4 text-2xl sm:text-3xl" />
                        <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">Up To 90% Cheaper</h3>
                        <p className="text-[#B0B0B0] text-sm sm:text-base mb-4 sm:mb-6">Compared to regular transport services.</p>
                    </div>

                    {/* Feature 4 */}
                    <div className="border border-[#404040] rounded-2xl p-5 sm:p-6">
                        <FaLink className="text-[#9155F7] mb-4 sm:mb-6 mt-2 sm:mt-4 text-2xl sm:text-3xl" />
                        <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">Support TreediMap 2028</h3>
                        <p className="text-[#B0B0B0] text-sm sm:text-base mb-4 sm:mb-6">Every match helps build Canada's next-gen map.</p>
                        <a href="/" className="text-[#9155F7] text-sm sm:text-base">Learn About Treedimap 2028</a>
                    </div>

                    {/* Feature 5 */}
                    <div className="border border-[#404040] rounded-2xl p-5 sm:p-6">
                        <FaCalendarAlt className="text-[#9155F7] mb-4 sm:mb-6 mt-2 sm:mt-4 text-2xl sm:text-3xl" />
                        <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-2">12-Month Program Only</h3>
                        <p className="text-[#B0B0B0] text-sm sm:text-base mb-4 sm:mb-6">This program will run for just 12 months while we complete our traffic API.</p>
                    </div>
                </div>
            </section>
            <div className="border border-[#404040] my-20 w-full"></div>
        </div>
    );
};

export default TreediCarpooling;