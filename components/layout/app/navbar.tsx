"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/favicon-48x48.png";
import { MdOutlineFileDownload } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";

interface NavItemInterface {
    name: string;
    href: string;
}

const NavItems: NavItemInterface[] = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Contact", href: "/#contact" },
];

function Navbar(): React.JSX.Element {
    const [active, setActive] = useState<number>(0);
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setMobileOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-[var(--bg)]/80 backdrop-blur-xl shadow-lg shadow-[var(--shadow)]"
                    : "bg-transparent backdrop-blur-md"
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
                {/* Logo */}
                <Link href="/#home" className="flex items-center gap-3">
                    <Image
                        src={logo}
                        alt={'My Name shortform "AK" as a Logo'}
                        height={32}
                        width={32}
                        draggable={false}
                    />
                    <span className="text-(--text) text-xl font-semibold lg:text-2xl">
                        Ashutosh Kumar
                    </span>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex items-center gap-1">
                    {NavItems.map((item, i) => (
                        <Link
                            key={i}
                            href={item.href}
                            className={`px-4 py-2 rounded-lg relative group overflow-hidden transition-colors duration-300 text-sm font-medium ${
                                i === active
                                    ? "text-(--primary)"
                                    : "text-(--text-secondary) hover:text-(--text)"
                            }`}
                            onClick={() => setActive(i)}
                        >
                            {item.name}
                            <span
                                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-(--primary) transition-all duration-300 ${
                                    i === active ? "w-6" : "w-0 group-hover:w-6"
                                }`}
                            />
                        </Link>
                    ))}
                </div>

                {/* Desktop Right Section */}
                <div className="hidden lg:flex items-center gap-4">
                    <a
                        href="#"
                        className="text-(--text) flex items-center gap-2 py-2.5 px-5 bg-(--primary) hover:bg-(--primary-hover) hover:scale-105 transition-all duration-300 rounded-xl font-medium text-sm"
                    >
                        Resume
                        <MdOutlineFileDownload className="text-lg" />
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="lg:hidden flex items-center justify-center h-10 w-10 rounded-xl border border-(--border) bg-(--card) text-(--text) transition-all duration-300"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? (
                        <HiX className="text-xl" />
                    ) : (
                        <HiMenuAlt3 className="text-xl" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                    mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="mx-6 mb-6 rounded-2xl border border-(--border) bg-(--card)/95 backdrop-blur-xl p-6">
                    <div className="flex flex-col gap-1">
                        {NavItems.map((item, i) => (
                            <Link
                                key={i}
                                href={item.href}
                                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                                    i === active
                                        ? "text-(--primary) bg-(--primary)/10"
                                        : "text-(--text-secondary) hover:text-(--text) hover:bg-white/5"
                                }`}
                                onClick={() => {
                                    setActive(i);
                                    setMobileOpen(false);
                                }}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-(--border)">
                        <a
                            href="#"
                            className="text-(--text) flex items-center justify-center gap-2 py-3 px-5 bg-(--primary) hover:bg-(--primary-hover) transition-all duration-300 rounded-xl font-medium text-sm w-full"
                        >
                            Resume
                            <MdOutlineFileDownload className="text-lg" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export { Navbar };