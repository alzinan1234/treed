"use client";
import React, { useState } from "react";
import { FaArrowDown, FaBriefcase, FaCaretDown, FaMap, FaUser } from "react-icons/fa6";
import { GiSteeringWheel } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

    // Toggle dropdown and ensure only one is open
    const handleDropdownToggle = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    return (
        <div className="p-4 bg-[#0D0D0D] shadow-sm w-full relative z-50">
            <div className="mx-auto flex items-center justify-between max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <a href="/">
                        <img src="/assets/logo.png" alt="TreediMap Logo" className="h-8 sm:h-10" />
                    </a>
                </div>

                {/* Hamburger Menu */}
                <div className="lg:hidden">
                    <button
                        className="text-white focus:outline-none"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <img src="/assets/menu.png" alt="" />
                    </button>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center">
                    <ul className="menu menu-horizontal px-1 text-white text-base">
                        <li>
                            <a href="/" className="px-3 py-2 hover:bg-[#1A1A1A] rounded">
                                Home
                            </a>
                        </li>
                        <li className="relative">
                            <button
                                className="px-3 py-2 hover:bg-[#1A1A1A] rounded"
                                onClick={() => handleDropdownToggle("treedimap")}
                            >
                                Treedimap 2028
                                <FaCaretDown />
                            </button>
                            {openDropdown === "treedimap" && (
                                <ul className="absolute py-2 w-full bg-[#161616] mt-10 rounded-box mr-10">
                                    <li className="mb-2 ">
                                        <a
                                            href="/forbusiness"
                                            className="flex items-center  text-sm hover:bg-[#1A1A1A]"
                                        >
                                            <FaBriefcase className="mr-2" /> For Business
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/foryou"
                                            className="flex items-center text-sm hover:bg-[#1A1A1A]"
                                        >
                                            <FaUser className="mr-2" /> For You
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li className="relative">
                            <button
                                className="px-3 py-2 hover:bg-[#1A1A1A] rounded"
                                onClick={() => handleDropdownToggle("ride")}
                            >
                                Ride with Collectors
                                <FaCaretDown />
                            </button>
                            {openDropdown === "ride" && (
                                <ul className="absolute py-2 w-full bg-[#161616] mt-10 rounded-box mr-10">

                                    <li>
                                        <a
                                            href="/riders"
                                            className="flex items-center py-2 text-sm hover:bg-[#1A1A1A]"
                                        >
                                            <FaMap className="mr-2" /> Riders
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/road"
                                            className="flex items-center py-2 text-sm hover:bg-[#1A1A1A]"
                                        >
                                            <GiSteeringWheel className="mr-2" /> Road Data Collectors
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </div>
            </div>

            {/* Mobile Sidebar */}
            {sidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
                    <div className="fixed top-0 right-0 h-full w-72 bg-[#0D0D0D] shadow-lg p-5 overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <img src="/assets/logo.png" alt="Logo" className="h-8" />
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="text-white text-2xl"
                            >
                                <IoClose />
                            </button>
                        </div>
                        <ul className="space-y-4 text-white">
                            <li>
                                <a href="/" className="block py-2">
                                    Home
                                </a>
                            </li>
                            <li>
                                <button
                                    className="block py-2 w-full text-left"
                                    onClick={() => handleDropdownToggle("treedimap")}
                                ><div className="flex items-center gap-2">
                                        <p> Treedimap 2028</p>
                                        <FaCaretDown />
                                    </div>
                                </button>
                                {openDropdown === "treedimap" && (
                                    <ul className="ml-4 mt-2 text-sm">
                                        <li>
                                            <a
                                                href="/forbusiness"
                                                className="flex items-center gap-2 py-1"
                                            >
                                                <FaBriefcase /> For Business
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/foryou"
                                                className="flex items-center gap-2 py-1 mt-2"
                                            >
                                                <FaUser /> For You
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <button
                                    className="block py-2 w-full text-left"
                                    onClick={() => handleDropdownToggle("ride")}
                                ><div className="flex items-center gap-2">
                                        <p> Ride with Collectors</p>
                                        <FaCaretDown />
                                    </div>
                                </button>
                                {openDropdown === "ride" && (
                                    <ul className="ml-4 mt-2 text-sm">
                                        <li>
                                            <a
                                                href="/riders"
                                                className="flex items-center gap-2 py-1"
                                            >
                                                <FaMap /> Riders
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/road"
                                                className="flex items-center gap-2 py-1 mt-2"
                                            >
                                                <GiSteeringWheel /> Road Data Collectors
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;