import React from 'react';
import man from '../../assets/Rectangle 14.svg'



const ProfileSection = () => {
    return (
        <section className=" text-gray-100">
            <div className="flex flex-col lg:flex-row ">
                <div className="flex items-center justify-center py-6 pr-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-[550px] lg:w-[550px] ">
                    
                    <img src={man} alt="" className="bg-gradient-to-r from-[#402c77] to-[#1E1E1E] rounded-xl object-contain pl-5 h-72 sm:h-80 lg:h-96  " />
                  
                </div>
                <div className="flex flex-col justify-center p-6 text-center rounded-sm md:mr-32 md:ml-20 lg:text-left">
                    <h1 className="text-2xl font-bold sm:text-6xl">lorem ispum
                    </h1>
                    <p className="mt-6 mb-8 text-lg font-nunito sm:mb-12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>

                </div>
            </div>
        </section>
    );
};

export default ProfileSection;