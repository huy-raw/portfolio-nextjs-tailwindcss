import Image from 'next/image'
import React from 'react'
import { SkillItem } from './SkillIItem'
import flutter from   '../public/assets/flutter.png'
import react from '../public/assets/react.png'
import java from '../public/assets/java.png'
import nextjs from '../public/assets/nextjs.png'
import nestjs from '../public/assets/nestjs.png'
import js from '../public/assets/js.png'
import tailwind from '../public/assets/tailwind.png'
import spring from '../public/assets/spring.png'

function Skill() {
    return (
        <div id='skill' className="w-full lg:h-screen p-4">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="uppercase text-xl tracking-widest text-[#5651e5]">Skill</p>
                <h2>What I Can Do</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8  ">
                    <SkillItem
                        name='Java'
                        img={java}
                    />
                    <SkillItem
                        name='JavaScript'
                        img={js}
                    />

                    <SkillItem
                        name='React'
                        img={react}
                    />

                    <SkillItem
                        name='NextJS'
                        img={nextjs}
                    />

                    <SkillItem
                        name='NestJS'
                        img={nestjs}
                    />

                    <SkillItem
                        name='Spring'
                        img={spring}
                    />
                    <SkillItem
                        name='Tailwind'
                        img={tailwind}
                    />
                    <SkillItem
                        name='Flutter'
                        img={flutter}
                    />
                </div>
            </div>
        </div>
    )
}

export default Skill