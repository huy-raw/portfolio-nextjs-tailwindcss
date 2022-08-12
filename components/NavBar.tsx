// @flow
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import H from '../public/assets/H.png';
export const NavBar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        }
        window.addEventListener("scroll", handleShadow)
    }, []);


    return (
        <div className={shadow ? "fixed w-full h-20 shadow-xl z-[100] " : "fixed w-full h-20 z-[100]"}>
            <div className="flex justify-between items-center h-full w-full px-2 xl:px-14 ">
                <Image src={H} alt="" width="50" height="50" />
                <div>
                    <ul className="hidden md:flex">
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase cursor-pointer  font-extrabold hover:border-b">Home</li>
                        </Link>
                        <Link href="/#about">
                            <li className="ml-10 text-sm uppercase cursor-pointer font-extrabold  hover:border-b">About</li>
                        </Link>
                        <Link href="/#skill">
                            <li className="ml-10 text-sm uppercase cursor-pointer font-extrabold hover:border-b">
                                Skills
                            </li>
                        </Link>
                        <Link href="/#project">
                            <li className="ml-10 text-sm uppercase  cursor-pointer font-extrabold hover:border-b">
                                Projects
                            </li>
                        </Link>
                        <Link href="/#contact">
                            <li className="ml-10 text-sm uppercase cursor-pointer font-extrabold  hover:border-b">
                                Contact
                            </li>
                        </Link>
                    </ul>
                    <div className="md:hidden ease-in-out" onClick={handleNav}>
                        <AiOutlineMenu size={30} />
                    </div>
                </div>
            </div>
            <div
                className={
                    nav
                        ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in-out duration-500"
                        : ""
                }
            >
                <div
                    className={
                        nav
                            ? "fixed left-0 top-0  w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10  ease-in-out duration-500 "
                            : "fixed left-[-100%] top-0 p-10  ease-in-out duration-500"
                    }
                >
                    <div className="flex w-full items-center justify-between flex-row-reverse">
                        <div
                            onClick={handleNav}
                            className="rounded-full shadow-lg shadow-gray p-3 cursor-pointer"
                        >
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className="border-b border-gray my-4">
                        <p className="w-[85%] md:w-[90%] py-4 font-semibold">
                            Let&#39;s build something legendary!!
                        </p>
                    </div>
                    <Image src={H} alt="" width="50" height="50" />
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase ml-2 font-semibold cursor-pointer">
                            <Link href="/">
                                <li className="py-4 text-sm ">Home</li>
                            </Link>
                            <Link href="/#about">
                                <li className="py-4 text-sm">About</li>
                            </Link>
                            <Link href="/#skill">
                                <li className="py-4 text-sm">Skills</li>
                            </Link>
                            <Link href="/#project">
                                <li className="py-4 text-sm">Projects</li>
                            </Link>
                            <Link href="/#contact">
                                <li className="py-4 text-sm">Contact</li>
                            </Link>
                        </ul>
                        <div className="pt-24">
                            <p className="uppercase tracking-widest text-[#5651e5] mb-3 font-semibold ">
                                Let&#39;s Connect
                            </p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <div className="rounded-full shadow-lg shadow-gray-dark p-3 cursor-pointer  hover:scale-125 ease-in-out duration-300">
                                    <a href="https://www.linkedin.com/in/huyraw/"><FaLinkedinIn /></a>
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-dark p-3 cursor-pointer  hover:scale-125 ease-in-out duration-300">
                                    <a href="https://github.com/huy-raw"> <FaGithub /></a>
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-dark p-3 cursor-pointer  hover:scale-125 ease-in-out duration-300">
                                    <a href="https://www.facebook.com/ruacon.19.9.01"><FaFacebook /></a>
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-dark p-3 cursor-pointer  hover:scale-125 ease-in-out duration-300">
                                    <a href="mailto:trieuhuy19.09@gmail.com"><AiOutlineMail /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
