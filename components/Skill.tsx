import Image from 'next/image'
import React from 'react'
import { SkillItem } from './SkillIItem'

function Skill() {
    return (
        <div id='skill' className="w-full lg:h-screen p-4">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="uppercase text-xl tracking-widest text-[#5651e5]">Skill</p>
                <h2>What I Can Do</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8  ">
                    <SkillItem
                        name='Java'
                        img="/../public/assets/java.png"
                    />
                    <SkillItem
                        name='JavaScript'
                        img="/../public/assets/js.png"
                    />

                    <SkillItem
                        name='React'
                        img="/../public/assets/react.png"
                    />

                    <SkillItem
                        name='NextJS'
                        img="/../public/assets/nextjs.png"
                    />

                    <SkillItem
                        name='NestJS'
                        img="/../public/assets/nestjs.png"
                    />

                    <SkillItem
                        name='Spring'
                        img="/../public/assets/spring.png"
                    />
                    <SkillItem
                        name='Tailwind'
                        img="/../public/assets/tailwind.png"
                    />
                    <SkillItem
                        name='Flutter'
                        img="/../public/assets/flutter.png"
                    />
                </div>
            </div>
        </div>
    )
}

export default Skill