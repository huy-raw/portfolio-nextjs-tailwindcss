import React from 'react'
import Image from 'next/image'

export interface ISkillItem {
    img: string | any;
    name: string;
}


export const SkillItem = ({ img, name }: ISkillItem) => {
    return (
        <>
            <div className="p-8  shadow-xl shadow-gray-dark/25 rounded-xl  hover:scale-105 ease-in-out  duration-300">
                <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                    <div className="m-auto ">
                        <Image
                            src={img}
                            width='64px'
                            height="64px"
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>{name}</h3>
                    </div>
                </div>
            </div>
        </>
    );
}