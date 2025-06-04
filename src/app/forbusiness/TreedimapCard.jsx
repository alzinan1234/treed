import { IoNavigateOutline } from "react-icons/io5";
import { LuFuel } from "react-icons/lu";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaLink } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const TreedimapCard = () => {
    return (
        <div>
            <div className=" text-white min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
                <div className="text-center w-full sm:w-3/4 md:w-2/3 lg:w-2/5">
                    <h1 className="text-xl lg:text-4xl font-bold mb-2">
                        The True Power of Treedi's APIs Lies in Their Full Adaptability.
                    </h1>
                    <p className="text-base text-[#B0B0B0] sm:text-lg mb-4 sm:mb-6">
                        Thanks to our elite, realistic 3D map—covering every square meter of Canada with live, contextual data—we're able to help your company become a fully tailored solution.
                    </p>
                </div>
                <div className="w-full sm:w-3/4 md:w-2/3 lg:w-2/5 flex items-center justify-center rounded-2xl p-4 sm:p-6 bg-[#161616] border border-[#404040]">
                    <div className="text-center">
                        <h2 className="font-medium text-lg sm:text-xl mb-2">YOUR REQUIREMENT</h2>
                        <p className="text-sm sm:text-base text-[#B0B0B0] mb-4">
                            A real estate agency wants to generate detailed 3D animations for every property address, showing the neighborhood, safety risks, nearby amenities, schools, and the area's potential.
                        </p>
                    </div>
                </div>
                <div className="w-full sm:w-3/4 md:w-2/3 lg:w-2/5 mt-4 sm:mt-6 rounded-2xl">
                    <img src="/assets/map1.png" alt="TreediMap 3D Illustration" className="w-full h-auto rounded-lg" />
                </div>
                <div className="w-full sm:w-3/4 md:w-2/3 lg:w-2/5 text-center mt-4 sm:mt-6">
                    <h2 className="text-lg sm:text-xl font-bold mb-2">OUR SOLUTION</h2>
                    <p className="text-sm sm:text-base text-[#B0B0B0] mb-4">
                        With TreediMap's ultra-realistic 3D map of all of Canada and detailed data on every location, we can instantly create a full video explaining everything about the property and its surroundings.
                    </p>
                </div>
                <div className="flex gap-2 mt-4">
                    <div className="bg-[#9155F7] px-6 sm:px-8 py-1 rounded-2xl"></div>
                    <div className="bg-[#5F5F5F] px-2 py-1 rounded-2xl"></div>
                    <div className="bg-[#5F5F5F] px-2 py-1 rounded-2xl"></div>
                    <div className="bg-[#5F5F5F] px-2 py-1 rounded-2xl"></div>
                </div>
                <div className="border border-[#404040] w-full my-20"></div>









                
                <div className="w-full sm:w-3/4 md:w-2/3 lg:w-3/5 text-center mt-4 sm:mt-6">
                    <h2 className="text-lg lg:text-5xl font-bold mb-2">Treedimap Is More Than Just APIs.</h2>
                    <p className="text-sm sm:text-base text-[#B0B0B0] mb-4 lg:w-1/2 mx-auto my-4">
                        With Treedimap, you’re not just getting powerful APIs — you’re getting a full team ready to build advanced tech solutions tailored to your needs.
                    </p>
                </div>
            </div>


            <div className="w-full sm:w-11/12 lg:w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-0">
                {/* Feature 1 */}
                <div className="border border-[#404040] rounded-lg p-4 sm:p-6">
                    <IoNavigateOutline className="text-[#9155F7] mb-6 sm:mb-9 mt-3 sm:mt-4 text-2xl sm:text-[30px]" />
                    <h3 className="font-semibold text-xl sm:text-2xl mb-2">Adding Custom Elements to the Map</h3>
                    <p className="text-[#B0B0B0] text-sm sm:text-lg mb-4 sm:mb-6">
                        You must follow the exact GPS route at all times. Taking another road—even a shortcut—breaks the tracking system and corrupts the data we collect.
                    </p>
                </div>
                {/* Feature 2 */}
                <div className="border border-[#404040] rounded-lg p-4 sm:p-6">
                    <LuFuel className="text-[#9155F7] mb-6 sm:mb-9 mt-3 sm:mt-4 text-2xl sm:text-[30px]" />
                    <h3 className="font-semibold text-xl sm:text-2xl mb-2">Developing New Technologies Specific to Your Industry</h3>
                    <p className="text-[#B0B0B0] text-sm sm:text-lg mb-4 sm:mb-6">
                        You cannot wait more than 10 seconds for anyone. The system is designed for live, uninterrupted movement.
                    </p>
                </div>
                {/* Feature 3 */}
                <div className="border border-[#404040] rounded-lg p-4 sm:p-6">
                    <RiDiscountPercentFill className="text-[#9155F7] mb-6 sm:mb-9 mt-3 sm:mt-4 text-2xl sm:text-[30px]" />
                    <h3 className="font-semibold text-xl sm:text-2xl mb-2">Creating Ultra-Smart Algorithms</h3>
                    <p className="text-[#B0B0B0] text-sm sm:text-lg mb-4 sm:mb-6">
                        You’re not a taxi. Asking for more than gas and wear compensation is illegal and will result in an immediate and permanent ban from the platform.
                    </p>
                </div>
                {/* Feature 4 */}
                <div className="border border-[#404040] rounded-lg p-4 sm:p-6">
                    <FaLink className="text-[#9155F7] mb-6 sm:mb-9 mt-3 sm:mt-4 text-2xl sm:text-[30px]" />
                    <h3 className="font-semibold text-xl sm:text-2xl mb-2">Improving the Way Your Systems Interact with Our APIs</h3>
                    <p className="text-[#B0B0B0] text-sm sm:text-lg mb-4 sm:mb-6">
                        You’re not a taxi. Asking for more than gas and wear compensation is illegal and will result in an immediate and permanent ban from the platform.
                    </p>
                </div>
            </div>
            <h2 className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto text-center text-lg sm:text-xl font-medium my-10 sm:my-16 lg:my-20 px-4">
                Our developers are here to help you deliver a next-generation experience to your users. TreediMap is built to power the future — with you.
            </h2>
        </div>

    );
};

export default TreedimapCard;