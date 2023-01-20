import React from 'react';
import people from '../../assets/Vector.svg';
import svg1 from '../../assets/Vector (1).svg';
import svg2 from '../../assets/Vector (2).svg';
import svg3 from '../../assets/Vector (3).svg';


const Features = () => {
    return (
        <section className="m-4 md:m-8 text-gray-100">
        <div className="flex justify-end items-center p-4 my-6 space-y-2 text-center">
            <h2 className="text-4xl font-nunito mr-6 md:mr-96">FEATURES</h2>
           <div className='lg:ml-32 p-1 border rounded-full hover:bg-gradient-to-t from-[#3801cf] to-[#df72e7ef] ' >
           <img className='w-[3rem] h-[45px]  rounded-xl' src={people} alt="" />
           </div>

        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">

            <div className="flex flex-col items-center p-4 bg-[#191919] my-10 rounded-xl">
            <img className='w-[110px] h-[110px] my-6  rounded-xl hover:bg-gradient-to-t from-[#3801cf] to-[#df72e7ef] p-2' src={svg1} alt="" />
                <div className="mt-2 leading-tight">
                    <p className='text-3xl p-2 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
            </div>

            <div className="flex flex-col items-center p-4 bg-[#191919] my-10 rounded-xl">
            <img className='w-[110px] h-[110px] my-6 rounded-xl hover:bg-gradient-to-t from-[#3801cf] to-[#df72e7ef] p-2' src={svg2} alt="" />
                <div className="mt-2 leading-tight">
                <p className='text-3xl p-2 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
            </div>

            <div className="flex flex-col items-center p-4 bg-[#191919] my-10 rounded-xl">
            <img className='w-[110px] h-[110px] my-6 rounded-xl hover:bg-gradient-to-t from-[#3801cf] to-[#df72e7ef] p-2' src={svg3} alt="" />
                <div className="mt-2 leading-tight">
                <p className='text-3xl p-2 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                </div>
            </div>
           
        </div>
    </section>
    );
};

export default Features;