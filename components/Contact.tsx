import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa'



const Contact = () => {
    return (
        <div id="contact" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl uppercase tracking-widest text-[#5651e5]">Contact</p>
                <h2 className="py-4">Get In Touch</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* left */}
                    <div className="col-span-3  lg:col-span-2 w-full h-full shadow-xl shadow-gray rounded-xl p-4">
                        <div className='lg:p-4 h-full rounded-xl'>
                            <div>
                                <img 
                                className="rounded-xl hover:scale-105 ease-in-out duration-300 shadow-xl shadow-gray-dark/10 " 
                                alt="" 
                                    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                            </div>
                            <div className="py-4">
                                <h2 className='py-2'>Trieu Quang Huy</h2>
                                <p className="font-semibold p-2">Fresher Developer</p>
                                <p className="p-2">I am a student of FPT university. I am available for internship or fresher developer. Contact me and let's talk.</p>
                            </div>
                            <p className="p-2 font-semibold">Connect With Me</p>
                            <div className="flex items-center justify-around py-4">
                                <div className="rounded-full shadow-lg shadow-gray-dark p-5 cursor-pointer  hover:scale-105 ease-in-out duration-300">
                                    <FaLinkedinIn />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-dark p-5 cursor-pointer  hover:scale-105 ease-in-out duration-300">
                                    <FaGithub />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-dark p-5 cursor-pointer  hover:scale-105 ease-in-out duration-300">
                                    <FaFacebook />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-dark p-5 cursor-pointer  hover:scale-105 ease-in-out duration-300">
                                    <AiOutlineMail />
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* right */}
                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray rounded-xl  lg:p-4">
                        <div className="p-4">
                            <form
                                action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                                method='POST'
                                encType='multipart/form-data'
                            >
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input
                                            className='border-2 rounded-lg p-3 flex border-gray-300'
                                            type='text'
                                            name='name'
                                        />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-2'>
                                            Phone Number
                                        </label>
                                        <input
                                            className='border-2 rounded-lg p-3 flex border-gray-300'
                                            type='text'
                                            name='phone'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type='email'
                                        name='email'
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input
                                        className='border-2 rounded-lg p-3 flex border-gray-300'
                                        type='text'
                                        name='subject'
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea
                                        className='border-2 rounded-lg p-3 border-gray-300'
                                        rows={10}
                                        name='message'
                                    ></textarea>
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-4'>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact