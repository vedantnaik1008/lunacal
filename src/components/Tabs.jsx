import { useState } from 'react';
import Qmark from '../assets/Vector.png';
import Square from '../assets/Frame 1000002250.png';

const Tabs = () => {
    const [tab, setTab] = useState('About Me');
    return (
        <div className='bg-[#363C43] shadow-[5.67px_5.67px_3.78px_#00000054] rounded-[18.8904px] pl-3 pr-8 py-6 '>
            <div className='flex gap-4 '>
                <div className='flex flex-col gap-24 flex-shrink-0'>
                    <img
                        src={Qmark}
                        alt='mark'
                        width={20}
                        height={20}
                        className='w-[20px]'
                    />
                    <img
                        src={Square}
                        alt='6square'
                        width={20}
                        height={20}
                        className='w-[20px]'
                    />
                </div>
                <div className=''>
                    <ul className='text-[#A3ADB2] flex justify-between bg-[#171717] rounded-[23px] shadow-[inset_0px_4.96001px_12.4px_2.48px_#00000040] w-full p-1'>
                        <li
                            onClick={() => setTab('About Me')}
                            className={`hover:text-white hover:rounded-2xl ${
                                tab === 'About Me' &&
                                'bg-[#28292F] rounded-2xl text-white'
                            } hover:bg-[#28292F] hover:drop-shadow-[-8.43333px_-16.8667px_50.6px_-16.8667px_#485B71,_13.4933px_16.8667px_67.4667px_8.43333px_#0A0A0A] transition-all duration-200 ease-in-out px-[24px] py-[10px]`}>
                            About Me
                        </li>
                        <li
                            onClick={() => setTab('Experiences')}
                            className={`hover:text-white hover:rounded-2xl ${
                                tab === 'Experiences' &&
                                'bg-[#28292F] rounded-2xl text-white'
                            } hover:bg-[#28292F] hover:drop-shadow-[-8.43333px_-16.8667px_50.6px_-16.8667px_#485B71,_13.4933px_16.8667px_67.4667px_8.43333px_#0A0A0A] transition-all duration-200 ease-in-out px-[24px] py-[10px]`}>
                            Experiences
                        </li>
                        <li
                            onClick={() => setTab('Recommended')}
                            className={`hover:text-white hover:rounded-2xl ${
                                tab === 'Recommended' &&
                                'bg-[#28292F] rounded-2xl text-white'
                            } hover:bg-[#28292F] hover:drop-shadow-[-8.43333px_-16.8667px_50.6px_-16.8667px_#485B71,_13.4933px_16.8667px_67.4667px_8.43333px_#0A0A0A] transition-all duration-200 ease-in-out px-[24px] py-[10px]`}>
                            Recommended
                        </li>
                    </ul>
                    {/*  overflow-y-scroll scrollbar-custom */}
                    {tab === 'About Me' && (
                        <div className='mt-6 overflow-y-auto scrollbar-custom'>
                            <p className='text-[#969696] text-[20.2px] font-normal'>
                                Hello! I’m Dave, your sales rep here from
                                Salesforce. I’ve been working at this awesome
                                company for 3 years now.
                            </p>
                            <p className='mt-6 text-[#969696] text-[20.2px] font-normal'>
                                I was born and raised in Albany, NY& have been
                                living in Santa Carla for the past 10 years my
                                wife Tiffany and my 4 year old twin daughters-
                                Emma and Ella. Both of them are just starting
                                school, so my calender is usually blocked
                                between 9-10 AM. This is a...
                            </p>
                        </div>
                    )}

                    {tab === 'Experiences' && (
                        <div className='mt-6 overflow-y-auto scrollbar-custom'>
                            <p className='text-[#969696] text-[20.2px] font-normal'>
                                Hello! I’m Dave, your sales rep here from
                                Salesforce. I’ve been working at this awesome
                                company for 3 years now.
                            </p>
                            <p className='mt-6 text-[#969696] text-[20.2px] font-normal'>
                                I was born and raised in Albany, NY& have been
                                living in Santa Carla for the past 10 years my
                                wife Tiffany and my 4 year old twin daughters-
                                Emma and Ella. Both of them are just starting
                                school, so my calender is usually blocked
                                between 9-10 AM. This is a...
                            </p>
                        </div>
                    )}

                    {tab === 'Recommended' && (
                        <div className='mt-6 overflow-y-auto scrollbar-custom'>
                            <p className='text-[#969696] text-[20.2px] font-normal'>
                                Hello! I’m Dave, your sales rep here from
                                Salesforce. I’ve been working at this awesome
                                company for 3 years now.
                            </p>
                            <p className='mt-6 text-[#969696] text-[20.2px] font-normal'>
                                I was born and raised in Albany, NY& have been
                                living in Santa Carla for the past 10 years my
                                wife Tiffany and my 4 year old twin daughters-
                                Emma and Ella. Both of them are just starting
                                school, so my calender is usually blocked
                                between 9-10 AM. This is a...
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Tabs;
