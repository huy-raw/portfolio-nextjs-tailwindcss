import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import vieShare from '../public/assets/vie-share.png'
import gameStore from '../public/assets/game-store.png'
const Project = () => {
    return (
        <div id="project" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl uppercase tracking-widest text-[#5651e5]">Projects</p>
                <h2 className="py-4">What I've Built</h2>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8">
                    <div className="relative flex items-center justify-center h-auto  rounded-xl w-full shadow-xl mb-5  shadow-gray p-4  group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                        <Image src={vieShare} alt="" className="rounded-xl group-hover:opacity-10" />
                        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                            <h3 className="text-white tracking-widest text-2xl text-center font-bold">Property Finder</h3>
                            <p className="pd-4 pt-2 text-white text-center font-bold">NextJS</p>
                            <p className="pd-4 pt-2 text-white text-center font-bold">NestJS</p>
                            <p className="pd-4 pt-2 text-white text-center font-bold">MySQL</p>
                            <Link href="/property">
                                <p className="text-center py-3 rounded-lg bg-white text-gray-dark font-bold text-lg cursor-pointer m-3">More Info</p>
                            </Link>
                        </div>
                    </div>
                    <div className="relative flex items-center justify-center h-auto  rounded-xl w-full shadow-xl mb-5 shadow-gray p-4  group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                        <Image src={gameStore} alt="" className="rounded-xl group-hover:opacity-10" />
                        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                            <h3 className="text-white tracking-widest text-2xl text-center font-bold">Property Finder</h3>
                            <p className="pd-4 pt-2 text-white text-center font-bold">Java/Servlet</p>
                            <Link href="https://github.com/huy-raw/game-store-web">
                                <p className="text-center py-3 rounded-lg bg-white text-gray-dark font-bold text-lg cursor-pointer m-3">More Info</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project