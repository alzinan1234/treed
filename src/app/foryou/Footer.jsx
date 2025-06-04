import React from 'react';
import Image from "next/image";
import { FaDiscord, FaFacebook, FaInstagram, FaTelegram, FaTiktok, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className=''>
            <section className=" min-h-screen lg:pt-52 bg-[radial-gradient(circle,_#8B5CF6_0%,_#0D0D0D_70%)] flex flex-col items-center justify-center">
                <div className="absolute z-50 -mt-200 lg:-mt-250 mx-auto">
                    <div className='mt-52 lg:mt-0'>
                        <h2 className="text-4xl text-center md:text-5xl font-bold my-10">
                            Coming in 2028
                        </h2>
                        <p className="w-2/3 mx-auto text-lg text-center mb-6 text-[#B0B0B0]">
                            TreediMap will be available to the public in 2028. But Treedi is already
                        transforming the lives of millions of Canadians
                        </p>
                    </div>

                    {/* Store Buttons */}
                    <div className="flex justify-center gap-4 mb-6 flex-wrap">
                        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/assets/app.png"
                                alt="Download on the App Store"
                                width={150}
                                height={50}
                            />
                        </a>
                        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/assets/google.png"
                                alt="Get it on Google Play"
                                width={150}
                                height={50}
                            />
                        </a>
                    </div>

                    {/* QR Prompt */}
                    <div className='hidden lg:block'>
                        <p className="mb-4 text-lg w-1/2 text-center mx-auto">
                            Scan the QR code below and sign up now to become a Road Data Collector!
                        </p>
                        {/* QR Code */}
                        <div className="flex justify-center ">
                            <Image
                                src="/assets/qr.png"
                                alt="QR Code"
                                width={100}
                                height={100}
                            />
                        </div>
                    </div>
                </div>

                {/* Phones Image */}
                <div className="relative z-20 flex justify-center lg:mt-[600px] mt-[12rem]">
                    <img
                        src="/assets/AppStore.png"
                        alt="Treedi Mobile UI"
                        className="w-1/2"
                    />
                    <img
                        src="/assets/android.png"
                        alt="Treedi Mobile UI"
                        className="w-1/2"
                    />
                </div>
            </section>
            <footer className="lg:h-screen relative z-30 bg-[#161616] text-white px-6 -mt-70 lg:-mt-100">
                <div className="  max-w-7xl flex flex-col lg:flex-row justify-between mx-auto py-10">
                    {/* Logo and Social */}
                    <div className="space-y-6 ">
                        <img src="/assets/logo.png" alt="mapbox" className="w-28" />
                        <div className='hidden lg:block'>
                            <p className="font-medium mb-2">Social</p>
                            <div className="flex text-xl gap-1 space-x-4">
                                <a href="#"><FaTwitter /></a>
                                <a href="#"> <FaFacebook /> </a>
                                <a href="#"><FaInstagram /></a>
                                <a href="#"><FaTelegram /></a>
                                <a href="#"><FaWhatsapp /></a>
                                <a href="#"><FaDiscord /></a>
                                <a href="#"><FaYoutube /></a>
                                <a href="#"><FaTiktok /></a>
                            </div>
                        </div>
                        <div className='my-8'>
                            <p className="font-medium">Language</p>
                            <select className="bg-[#0D0D0DE5] w-1/2 border-none my-1 px-2 py-2 rounded">
                                <option>English</option>
                                <option>Spanish</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-start justify-between gap-6'>
                        {/* Column 1 */}
                        <div className='hidden lg:block'>
                            <p className="text-gray-400 font-medium mb-3">Company</p>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">About</a></li>
                                <li><a href="#" className="hover:underline">Blog</a></li>
                                <li><a href="#" className="hover:underline">Careers</a></li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <p className="text-gray-400 font-medium mb-3">Resources</p>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                                <li><a href="#" className="hover:underline">Terms Of Use</a></li>
                                <li><a href="#" className="hover:underline hidden lg:block">Regulatory Info</a></li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <p className="text-gray-400 font-medium mb-3">Help</p>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:underline hidden lg:block">FAQ</a></li>
                                <li><a href="#" className="hover:underline">Contact</a></li>
                            </ul>
                        </div>
                        <div className=' lg:hidden'>
                            <p className="font-medium my-2">Social</p>
                            <div className="flex text-xl gap-1  space-x-4">
                                <a href="#"><FaTwitter /> </a>
                                <a href="#"> <FaFacebook /> </a>
                                <a href="#"><FaInstagram /></a>
                                <a href="#"><FaTelegram /></a>
                                <a href="#"><FaWhatsapp /></a>
                                <a href="#"><FaDiscord /></a>
                                <a href="#"><FaYoutube /></a>
                                <a href="#"><FaTiktok /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="lg:text-[340px] text-7xl text-center text-[#8E8D94] font-bold mt-0">
                        Treedi
                    </h1>
                </div>
            </footer>
        </div>
    );
};

export default Footer;


