// @flow 
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface IProjectProps {
    img?: string | any;
    technique: string[];
    link?: string | any;
    children: JSX.Element | JSX.Element[];
};
export const ProjectItem = ({ img, technique, link, children }: IProjectProps) => {
    return (
        <div className="relative flex items-center justify-center h-auto  rounded-xl w-full shadow-xl mb-5 shadow-gray p-4  group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
            <Image src={img} alt="" className="rounded-xl group-hover:opacity-10" />
            {/* <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-white tracking-widest text-2xl text-center font-bold">Property Finder</h3>
                {
                    technique?.map((item, index) => {
                        <div key={index}>
                            <p className="pd-4 pt-2 text-white text-center font-bold" >{item}</p>
                        </div>
                    })
                }
                <Link href={link}>
                    <p className="text-center py-3 rounded-lg bg-white text-gray-dark font-bold text-lg cursor-pointer m-3">More Info</p>
                </Link>
            </div> */}
        </div>

    );
};