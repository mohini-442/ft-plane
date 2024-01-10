import React, { useState } from 'react'

const Tabsection = () => {
    const [active, setActiveTab] = useState("tab1")
    const handleTab1 = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div className='pt-24'>
            <div className='max-w-[1140px] px-3 mx-auto -translate-y-56 pt-5'>
                <div className='bg-[#fff] rounded-[20px_20px_0px_0px] flex lg:max-w-lg max-w-80 h-14 gap- 2 0 border-b border-[#F3F4F6] '>
                    <div onClick={() => handleTab1('tab1')} className={`${active === "tab1" ? "bg-[#313EF7] text-white" : "text-[#030522]"}  w-4/12 px-3 rounded-[20px_2px_0px_0px] flex justify-center items-center after:h-11  relative  after:w-px after:top-[-6] after:bg-[#F3F4F6] after:right-0 after:absolute  `}  >
                        <button className='font-semibold text-lg font-Montserrat'>Economy</button>
                    </div>
                    <div onClick={() => handleTab1('tab2')} className={`${active === "tab2" ? "bg-[#313EF7] text-white" : "text-[#030522]"}  w-4/12 px-3 flex justify-center items-center  after:h-11 after:w-px after:top-[-6] after:bg-[#F3F4F6] relative after:right-0 after:absolute `}  >
                        <button className='font-semibold text-lg font-Montserrat'>Busniness </button>
                    </div>
                    <div onClick={() => handleTab1('tab3')} className={`${active === "tab3" ? "bg-[#313EF7] text-white" : "text-[#030522]"}  w-4/12 px-3 rounded-[0px_20px_0px_0px] flex justify-center items-center`}  >
                        <button className='font-semibold text-lg font-Montserrat'>First</button>
                    </div>
                </div>
                {active === "tab1" ?
                    <div className='rounded-[0px_20px_20px_20px] bg-[#fff] shadow-[0px_100px_200px_0px_#0117361A] justify-center '>
                        <div className='flex flex-wrap flex-row py-5 justify-center'>
                            <div className='lg:w-3/12 md:w-4/12 sm:w-2/4 w-full px-3 pt-4 pt-sm-0 flex justify-lg-center lg:pl-9'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-14 h-14  rounded-[56px] bg-[#f5f5ff] flex items-center justify-center '>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.9989 13.4314C13.722 13.4314 15.1189 12.0345 15.1189 10.3114C15.1189 8.58828 13.722 7.19141 11.9989 7.19141C10.2758 7.19141 8.87891 8.58828 8.87891 10.3114C8.87891 12.0345 10.2758 13.4314 11.9989 13.4314Z" stroke="#030522" stroke-width="1.5" />
                                            <path d="M3.62166 8.49C5.59166 -0.169998 18.4217 -0.159997 20.3817 8.5C21.5317 13.58 18.3717 17.88 15.6017 20.54C13.5917 22.48 10.4117 22.48 8.39166 20.54C5.63166 17.88 2.47166 13.57 3.62166 8.49Z" stroke="#030522" stroke-width="1.5" />
                                        </svg>

                                    </div>
                                    <div>
                                        <h2 className='text-[#030522]  font-Montserrat font-semibold text-lg '>Location</h2>
                                        <p className='text-[#AEB5BF] font-Montserrat font-normal text-base'>Where are you going?</p>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:w-3/12 md:w-4/12 sm:w-2/4 px-3 pt-4 pt-sm-0 w-full flex justify-lg-center'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-14 h-14  rounded-[56px] bg-[#f5f5ff] flex items-center justify-center '>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.6786 3.96C13.1586 4.67 13.4386 5.52 13.4386 6.44C13.4286 8.84 11.5386 10.79 9.15859 10.87C9.05859 10.86 8.93859 10.86 8.82859 10.87C6.44859 10.79 4.55859 8.84 4.55859 6.44C4.55859 3.99 6.53859 2 8.99859 2" stroke="#030522" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16.4112 4C18.3512 4 19.9112 5.57 19.9112 7.5C19.9112 9.39 18.4113 10.93 16.5413 11C16.4613 10.99 16.3713 10.99 16.2812 11" stroke="#030522" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M4.15875 14.56C1.73875 16.18 1.73875 18.82 4.15875 20.43C6.90875 22.27 11.4188 22.27 14.1688 20.43C16.5888 18.81 16.5888 16.17 14.1688 14.56C11.4288 12.73 6.91875 12.73 4.15875 14.56Z" stroke="#030522" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14" stroke="#030522" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                    <div>
                                        <h2 className='text-[#030522]  font-Montserrat font-semibold text-lg '>Travelers</h2>
                                        <p className='text-[#AEB5BF] font-Montserrat font-normal text-base'>Add guest</p>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:w-3/12 md:w-4/12 sm:w-2/4 px-3 w-full pt-4 pt-lg-0 flex justify-lg-center'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-14 h-14  rounded-[56px] bg-[#f5f5ff] flex items-center justify-center '>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 2V5" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16 2V5" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3.5 9.08984H20.5" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3 13.01V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.9941 13.6992H12.0031" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8.29492 13.6992H8.3039" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8.29492 16.6992H8.3039" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>


                                    </div>
                                    <div>
                                        <h2 className='text-[#030522]  font-Montserrat font-semibold text-lg '>Check-in</h2>
                                        <p className='text-[#AEB5BF] font-Montserrat font-normal text-base'>Add date</p>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:w-3/12 md:w-4/12 sm:w-2/4 px-3 w-full pt-4 pt-lg-0 flex justify-lg-center'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-14 h-14  rounded-[56px] bg-[#f5f5ff] flex items-center justify-center '>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 2V5" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16 2V5" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3.5 9.08984H20.5" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3 13.01V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.9941 13.6992H12.0031" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8.29492 13.6992H8.3039" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8.29492 16.6992H8.3039" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>


                                    </div>
                                    <div>
                                        <h2 className='text-[#030522]  font-Montserrat font-semibold text-lg '>Check-out</h2>
                                        <p className='text-[#AEB5BF] font-Montserrat font-normal text-base'>Add date</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center  justify-center py-5'>
                            <button className='text-white font-Montserrat font-semibold text-base rounded-[56px]  bg-[#313EF7] border-0 px-11 py-3.5 mt-3 shadow-[0px_10px_14px_0px_#313EF740]'>Book Now</button>
                        </div>
                    </div>
                    : ""}
                {active === "tab2" ?
                    <div className='rounded-[0px_20px_20px_20px] bg-[#fff] shadow-[0px_100px_200px_0px_#0117361A] justify-center '>
                        <div className='flex flex-wrap flex-row py-5 justify-center '>
                            <div className='lg:w-3/12 md:w-4/12 sm:w-2/4 w-full px-3 pt-4 pt-sm-0 flex justify-lg-center lg:pl-9'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-14 h-14  rounded-[56px] bg-[#f5f5ff] flex items-center justify-center '>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.9989 13.4314C13.722 13.4314 15.1189 12.0345 15.1189 10.3114C15.1189 8.58828 13.722 7.19141 11.9989 7.19141C10.2758 7.19141 8.87891 8.58828 8.87891 10.3114C8.87891 12.0345 10.2758 13.4314 11.9989 13.4314Z" stroke="#030522" stroke-width="1.5" />
                                            <path d="M3.62166 8.49C5.59166 -0.169998 18.4217 -0.159997 20.3817 8.5C21.5317 13.58 18.3717 17.88 15.6017 20.54C13.5917 22.48 10.4117 22.48 8.39166 20.54C5.63166 17.88 2.47166 13.57 3.62166 8.49Z" stroke="#030522" stroke-width="1.5" />
                                        </svg>

                                    </div>
                                    <div>
                                        <h2 className='text-[#030522]  font-Montserrat font-semibold text-lg '>Location</h2>
                                        <p className='text-[#AEB5BF] font-Montserrat font-normal text-base'>Where are you going?</p>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:w-3/12 md:w-4/12 sm:w-2/4 px-3 pt-4 pt-sm-0 w-full flex justify-lg-center'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-14 h-14  rounded-[56px] bg-[#f5f5ff] flex items-center justify-center '>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 2V5" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16 2V5" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3.5 9.08984H20.5" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3 13.01V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.9941 13.6992H12.0031" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8.29492 13.6992H8.3039" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8.29492 16.6992H8.3039" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>


                                    </div>
                                    <div>
                                        <h2 className='text-[#030522]  font-Montserrat font-semibold text-lg '>Check-out</h2>
                                        <p className='text-[#AEB5BF] font-Montserrat font-normal text-base'>Add date</p>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:w-3/12 md:w-4/12 sm:w-2/4 px-3 w-full pt-4 pt-lg-0 flex justify-lg-center'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-14 h-14  rounded-[56px] bg-[#f5f5ff] flex items-center justify-center '>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 2V5" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16 2V5" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3.5 9.08984H20.5" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3 13.01V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.9941 13.6992H12.0031" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8.29492 13.6992H8.3039" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8.29492 16.6992H8.3039" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>


                                    </div>
                                    <div>
                                        <h2 className='text-[#030522]  font-Montserrat font-semibold text-lg '>Check-in</h2>
                                        <p className='text-[#AEB5BF] font-Montserrat font-normal text-base'>Add date</p>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:w-3/12 md:w-4/12 sm:w-2/4 px-3 w-full pt-4 pt-lg-0 flex justify-lg-center'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-14 h-14  rounded-[56px] bg-[#f5f5ff] flex items-center justify-center '>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.6786 3.96C13.1586 4.67 13.4386 5.52 13.4386 6.44C13.4286 8.84 11.5386 10.79 9.15859 10.87C9.05859 10.86 8.93859 10.86 8.82859 10.87C6.44859 10.79 4.55859 8.84 4.55859 6.44C4.55859 3.99 6.53859 2 8.99859 2" stroke="#030522" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16.4112 4C18.3512 4 19.9112 5.57 19.9112 7.5C19.9112 9.39 18.4113 10.93 16.5413 11C16.4613 10.99 16.3713 10.99 16.2812 11" stroke="#030522" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M4.15875 14.56C1.73875 16.18 1.73875 18.82 4.15875 20.43C6.90875 22.27 11.4188 22.27 14.1688 20.43C16.5888 18.81 16.5888 16.17 14.1688 14.56C11.4288 12.73 6.91875 12.73 4.15875 14.56Z" stroke="#030522" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14" stroke="#030522" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                    <div>
                                        <h2 className='text-[#030522]  font-Montserrat font-semibold text-lg '>Travelers</h2>
                                        <p className='text-[#AEB5BF] font-Montserrat font-normal text-base'>Add guest</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center  justify-center py-5'>
                                <button className='text-white font-Montserrat font-semibold text-base rounded-[56px] bg-[#313EF7] border-0 px-11 py-3.5 mt-3 shadow-[0px_10px_14px_0px_#313EF740]'>Book Now</button>
                            </div>
                        </div>
                    </div>
                    : ""}
                {active === "tab3" ?
                    <div className='rounded-[0px_20px_20px_20px] bg-[#fff] shadow-[0px_100px_200px_0px_#0117361A] justify-center'>
                        <div className='flex flex-wrap flex-row py-5 justify-center'>
                            <div className='lg:w-3/12 md:w-4/12 sm:w-2/4 w-full px-3 pt-4 pt-sm-0 flex justify-lg-center lg:pl-9'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-14 h-14  rounded-[56px] bg-[#f5f5ff] flex items-center justify-center '>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.6786 3.96C13.1586 4.67 13.4386 5.52 13.4386 6.44C13.4286 8.84 11.5386 10.79 9.15859 10.87C9.05859 10.86 8.93859 10.86 8.82859 10.87C6.44859 10.79 4.55859 8.84 4.55859 6.44C4.55859 3.99 6.53859 2 8.99859 2" stroke="#030522" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16.4112 4C18.3512 4 19.9112 5.57 19.9112 7.5C19.9112 9.39 18.4113 10.93 16.5413 11C16.4613 10.99 16.3713 10.99 16.2812 11" stroke="#030522" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M4.15875 14.56C1.73875 16.18 1.73875 18.82 4.15875 20.43C6.90875 22.27 11.4188 22.27 14.1688 20.43C16.5888 18.81 16.5888 16.17 14.1688 14.56C11.4288 12.73 6.91875 12.73 4.15875 14.56Z" stroke="#030522" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14" stroke="#030522" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </div>
                                    <div>
                                        <h2 className='text-[#030522]  font-Montserrat font-semibold text-lg '>Travelers</h2>
                                        <p className='text-[#AEB5BF] font-Montserrat font-normal text-base'>Add guest</p>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:w-3/12 md:w-4/12 sm:w-2/4 px-3 pt-4 pt-sm-0 w-full flex justify-lg-center'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-14 h-14  rounded-[56px] bg-[#f5f5ff] flex items-center justify-center '>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 2V5" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16 2V5" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3.5 9.08984H20.5" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3 13.01V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.9941 13.6992H12.0031" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8.29492 13.6992H8.3039" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8.29492 16.6992H8.3039" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>


                                    </div>
                                    <div>
                                        <h2 className='text-[#030522]  font-Montserrat font-semibold text-lg '>Check-in</h2>
                                        <p className='text-[#AEB5BF] font-Montserrat font-normal text-base'>Add date</p>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:w-3/12 md:w-4/12 sm:w-2/4 px-3 w-full pt-4 pt-lg-0 flex justify-lg-center'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-14 h-14  rounded-[56px] bg-[#f5f5ff] flex items-center justify-center '>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.9989 13.4314C13.722 13.4314 15.1189 12.0345 15.1189 10.3114C15.1189 8.58828 13.722 7.19141 11.9989 7.19141C10.2758 7.19141 8.87891 8.58828 8.87891 10.3114C8.87891 12.0345 10.2758 13.4314 11.9989 13.4314Z" stroke="#030522" stroke-width="1.5" />
                                            <path d="M3.62166 8.49C5.59166 -0.169998 18.4217 -0.159997 20.3817 8.5C21.5317 13.58 18.3717 17.88 15.6017 20.54C13.5917 22.48 10.4117 22.48 8.39166 20.54C5.63166 17.88 2.47166 13.57 3.62166 8.49Z" stroke="#030522" stroke-width="1.5" />
                                        </svg>

                                    </div>
                                    <div>
                                        <h2 className='text-[#030522]  font-Montserrat font-semibold text-lg '>Location</h2>
                                        <p className='text-[#AEB5BF] font-Montserrat font-normal text-base'>Where are you going?</p>
                                    </div>
                                </div>
                            </div>
                            <div className='lg:w-3/12 md:w-4/12 sm:w-2/4 px-3 w-full pt-4 pt-lg-0 flex justify-lg-center'>
                                <div className='flex items-center gap-3'>
                                    <div className='w-14 h-14  rounded-[56px] bg-[#f5f5ff] flex items-center justify-center '>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 2V5" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16 2V5" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3.5 9.08984H20.5" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M3 13.01V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17" stroke="#030522" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.9941 13.6992H12.0031" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8.29492 13.6992H8.3039" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M8.29492 16.6992H8.3039" stroke="#030522" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h2 className='text-[#030522]  font-Montserrat font-semibold text-lg '>Check-out</h2>
                                        <p className='text-[#AEB5BF] font-Montserrat font-normal text-base'>Add date</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center  justify-center py-5'>
                                <button className='text-white font-Montserrat font-semibold text-base rounded-[56px]  bg-[#313EF7] border-0 px-11 py-3.5 mt-3 shadow-[0px_10px_14px_0px_#313EF740]'>Book Now</button>
                            </div>
                        </div>
                    </div>
                    : ""}
            </div>
        </div>
    )
}

export default Tabsection