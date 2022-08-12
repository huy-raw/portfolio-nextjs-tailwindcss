// @flow 
import * as React from 'react';

export const About = () => {
    return (
        <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto md:grid  grid-cols-3 gap-8 ">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#5651e5]">About</p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2 text-gray-dark text-lg font-semibold">I am a fresher.</p>
                    <p className="py-2 text-gray-dark">Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                    <p className="py-2 text-gray-dark">Lorem Ipsum is simply dummy text of the printing
                        and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer
                        took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets
                        containing Lorem Ipsum passages, and more recently with desktop
                        publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.
                    </p>
                    <p className="py-2 text-gray-dark underline cursor-pointer">Check out some of my projects.</p>
                </div>
                <div className='w-full h-auto  m-auto  shadow-xl shadow-gray rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in-out duration-500'>
                    <img  className="rounded-xl" src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/278551377_512947766895302_1636545080371275886_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=OXcpGo45ndoAX8UyyJb&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT8ZbTkuLzJeo0V-O3BRexS8YbBlnL2BBSYc1sSyHW0WmQ&oe=62FB0907" alt="" />
                </div>
            </div>
        </div>
    );
};