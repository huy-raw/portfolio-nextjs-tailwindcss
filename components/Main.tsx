// @flow
import Link from "next/link";
import * as React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs'
type Props = {};
export const Main = () => {
    return (
        <div  id="main" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
                <div>
                    <p className="uppercase text-sm tracking-widest text-gray-[600]">Let's build something together</p>
                    <h1 className="py-4 text-gray-[700]">
                        Hi, I'm <span className="text-[#5651e5]">HUY</span>
                    </h1>
                    <h1 className="py-4 text-gray-dark ">
                        A Full-stack Developer
                    </h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <div className='flex items-center justify-between max-w-[350px] m-auto  py-4'>
                        <div className="rounded-full shadow-lg shadow-gray p-5 cursor-pointer  hover:scale-125 ease-in-out duration-500">
                            <FaLinkedinIn />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray p-5 cursor-pointer  hover:scale-125 ease-in-out duration-500">
                            <FaGithub />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray p-5 cursor-pointer  hover:scale-125 ease-in-out duration-500">
                            <FaFacebook />
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray p-5 cursor-pointer  hover:scale-125 ease-in-out duration-500">
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
