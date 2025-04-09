'use client'

import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const Header = () => {
    const [hideMenu, setHideMenu] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isSticky, setIsSticky] = useState(false);

    const navLinks = [
        { path: "/", name: "Home" },
        { path: "/aboutus", name: "About Us" },
        { path: "/ourservices", name: "Our Services" },
        { path: "/contactus", name: "Contact Us" },
    ];


    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50); 
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);    

    return (
        <div>
            {/* Header Section */}
            <div className={`lg:flex justify-between items-center background w-full overflow-hidden pr-7 z-50 mx-auto ${isSticky ? "fixed top-0 z-50 rounded-none h-28 shadow-md" : "max-w-xl md:max-w-3xl lg:max-w-5xl top-4 left-4 right-4 self-center mx-auto lg:absolute lg:rounded-full h-36 md:h-24"}`}>
                <div className="lg:flex h-full w-full max-w-7xl mx-auto">
                        <div className={`lg:rounded-s-full flex h-full px-4 justify-between items-center w-full md:w-4/5 mx-auto lg:max-w-7xl`}>
                            <Image
                                src={"/images/logo/Logoremoved.png"}
                                alt={`Lansel Logo`}
                                width={300}
                                height={100}
                                className="w-44 h-full object-cover"
                                priority
                            />
                            <RxHamburgerMenu 
                                className="text-3xl cursor-pointer lg:hidden" 
                                onClick={() => setHideMenu(true)} 
                            />
                        </div>
                </div>

                {/* Overlay when the menu is open */}
                {hideMenu && (
                    <div 
                        className="fixed top-0 left-0 w-full h-full secondaryBg opacity-80 z-40 lg:hidden"
                        onClick={() => setHideMenu(false)} 
                    />
                )}

                {/* Navigation */}
                <nav 
                    className={`fixed background top-0 left-0 bottom-0 w-full sm:w-80 flex flex-col justify-center lg:items-center text-xl heading font-medium p-8 transform transition-transform duration-500 z-50 lg:z-0 ${
                        hideMenu ? "translate-x-0" : "-translate-x-full"
                    } lg:relative lg:flex-row lg:justify-end lg:gap-7 lg:translate-x-0 lg:w-auto`}
                >
                    <MdOutlineClose  
                        className="absolute text-5xl para top-2 right-2 cursor-pointer border rounded-full p-2 para lg:hidden" 
                        onClick={() => setHideMenu(false)}
                    />
                    {navLinks.map(({ path, name }) => (
                        <Link 
                            key={path} 
                            href={`${path}`} 
                            className={`navLink py-5 border-b border-gray-200 lg:border-0 lg:py-0 text-nowrap ${
                                activeSection === path ? "activeLink" : ""
                            }`}
                            onClick={() => {
                                setActiveSection(path); 
                                setHideMenu(false);  
                            }}
                        >
                            {name}
                        </Link>
                    ))}
                    <Link href={"#contact"} className={`hidden w-40 lg:block text-base text-center font-medium border px-5 py-3 btn text-white ${isSticky ? "lg:hidden" : "lg:block"}`}>Get In Touch</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;
