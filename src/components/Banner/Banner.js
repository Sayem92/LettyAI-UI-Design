import React from 'react';
import banner from '../../assets/illustration 1.svg'

const Banner = () => {
    return (
        <section className="bg-[#000000] text-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex  flex-col justify-center font-nunito p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <p className="text-3xl  md:text-4xl">At
                        <span className="text-transparent bg-clip-text bg-gradient-to-t from-[#F00088] to-[#931CC6] "> LettyAI,</span>
                    </p>
                    <p className="text-4xl ">We're changing the way
                        <br />
                        the world works,
                        <br />
                        and it's just the beginning.
                       
                    </p>
                      <p className='mb-10 mt-5 text-gray-300 text-3xl font-nunito'>Join us on our journey!</p>
                
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <p  className="px-8 py-3 text-lg font-semibold rounded bg-[#6E3FF2] text-[#FFFFFF]">GET STARTED</p>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={banner} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    );
};

export default Banner;