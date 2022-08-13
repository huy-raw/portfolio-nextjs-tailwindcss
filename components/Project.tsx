import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import vieShare from '../public/assets/vie-share.png'
import gameStore from '../public/assets/game-store.png'
import { ProjectItem } from './ProjectItem'
const Project = () => {
    return (
        <div id="project" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl uppercase tracking-widest text-[#5651e5]">Projects</p>
                <h2 className="py-4">What I've Built</h2>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-8">
                    <ProjectItem
                        img={vieShare}
                        technique="NestJS/NextJS"
                        link="https://github.com/vieshare-fpt"
                    />
                    <ProjectItem
                        img={gameStore}
                        technique="Java/Servlet"
                        link="https://github.com/huy-raw/game-store-web"
                    />
                </div>
            </div>
        </div>
    )
}

export default Project