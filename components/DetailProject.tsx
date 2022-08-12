import React from 'react'
import Image from 'next/image';

export interface IProperties {
  img: string;
  name: string;
  technologies: string[];
  urlDemo?: string;
  urlCode: string;
}

const DetailProject = ({ img, name, technologies, urlDemo, urlCode}: IProperties) => {


  return (
    <div className="w-full">
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-gray z-10'>
          <Image src={img} alt="" layout='fill' objectFit='cover' className='absolute z-1' />
          <div className='absolute top-[70%]  max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] ml-5'>
            <h2 className='py-2'>Property Finder</h2>
            <h3>NestJS / NextJS / MySQL</h3>
          </div>
        </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8'>
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <button  className="px-8 py-2 mt-4 mr-5 hover:scale-105 ease-in-out duration-300">Demo</button>
            <button  className="px-8 py-2 mt-4 hover:scale-105 ease-in-out duration-300">Code</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailProject