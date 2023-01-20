import React from 'react';
import logo from '../../assets/LettyAI.svg';
import svg4 from '../../assets/Vector (4).svg';
import svg5 from '../../assets/Vector (5).svg';
import svg6 from '../../assets/Vector (6).svg';
import svg7 from '../../assets/Vector (7).svg';


const Footer = () => {
    return (
        <footer className="px-20 bg-[#000000] py-10 text-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                
                    <div className="">
                        <img className='w-[10rem] h-[87px] rounded-xl' src={logo} alt="" />
                    </div>
               
                    <div className="py-4">
                        <ul className="space-y-2">
                            <li>
                                <p>@ 2022 Letty, Inc. All rights reserved.</p>
                            </li>
                            <li>
                                <p>Contact : hello@letty.ai</p>
                            </li>
                            <li>
                                <p className='text-[#3263E1]'>TERMS OF SERVICE</p>
                            </li>
                            <li>
                                <p className='text-[#3263E1]'>PRIVACY POLICY</p>
                            </li>
                        </ul>
                    </div>

                    <div className='ml-8 py-5 lg:ml-44'>
                        <div className='w-16 flex justify-center'>

                            <img className='w-[64px]   rounded-xl hover:bg-gradient-to-t from-[#3801cf] to-[#df72e7ef] p-2' src={svg4} alt="" />

                            <img className='w-[64px] rounded-xl hover:bg-gradient-to-t from-[#3801cf] to-[#df72e7ef] p-2' src={svg5} alt="" />

                        </div>
                        <div className='w-16 flex justify-center'>

                            <img className='w-[64px]  rounded-xl hover:bg-gradient-to-t from-[#3801cf] to-[#df72e7ef] p-2' src={svg6} alt="" />

                            <img className='w-[64px]  rounded-xl hover:bg-gradient-to-t from-[#3801cf] to-[#df72e7ef] p-2' src={svg7} alt="" />

                        </div>
                    </div>

                
            </div>
        </footer>
    );
};

export default Footer;