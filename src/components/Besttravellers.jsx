import React from 'react'
import place1 from '../assets/images/png/place1.png'
import place2 from '../assets/images/png/place2.png'
import place3 from '../assets/images/png/place3.png'
import place4 from '../assets/images/png/place4.png'
import traveller1 from '../assets/images/png/traveller1.png'
import traveller2 from '../assets/images/png/traveller2.png'
import traveller3 from '../assets/images/png/traveller3.png'
import traveller4 from '../assets/images/png/traveller4.png'


const Besttravellers = () => {
    return (
        <>
            <div>
                <div className="max-w-[1140px] px-3 mx-auto py-5">
                    <h2 className='text-[#011736] font-montserrat text-[40px] tracking-[0.6px] pb-[40px] font-bold leading-[150%] capitalize text-center pt-[50px] '>Best travelars of this month</h2>
                    <div className="flex flex-row flex-wrap -mx-3 justify-center">
                        <div className=" w-full sm:w-6/12 md:w-4/12 mt-[20px] lg:w-3/12 px-3 max-sm:flex items-center justify-center" data-aos="zoom-in-up">
                            <div className=" max-sm:max-w-[282px] relative rounded-[213px] bg-white shadow-[0px_100px_200px_0px_rgba(1,23,54,0.05)] flex flex-col items-center justify-center">
                                <img className='w-full' src={place1} alt="big-img1" />
                                <img className=' absolute  md:top-[52%] top-[56%]' src={traveller1} alt="short1" />
                                <p className='text-[#011736] text-center pt-[68px] text-[24px] font-Montserrat font-semibold leading-[150%] self-stretch'>Raju Mullah</p>
                                <p className='text-[#979797] pb-[40px] font-Montserrat text-[16px] font-medium self-stretch pt-1 text-center leading-[150%]'>@rajumulllah</p>
                            </div>
                        </div>
                        <div className=" w-full sm:w-6/12 md:w-4/12 mt-[20px] lg:w-3/12 px-3 max-sm:flex items-center justify-center" data-aos="zoom-in-up">
                            <div className=" max-sm:max-w-[282px] relative rounded-[213px] bg-white shadow-[0px_100px_200px_0px_rgba(1,23,54,0.05)] flex flex-col items-center justify-center">
                                <img className='w-full' src={place2} alt="big-img1" />
                                <img className=' absolute  md:top-[52%] top-[56%]' src={traveller2} alt="short1" />
                                <p className='text-[#011736] text-center pt-[68px] text-[24px] font-Montserrat font-semibold leading-[150%] self-stretch'>Zaire Vetrovs</p>
                                <p className='text-[#979797] pb-[40px] font-Montserrat text-[16px] font-medium self-stretch pt-1 text-center leading-[150%]'>@zairevetrovs</p>
                            </div>
                        </div>
                        <div className=" w-full sm:w-6/12 md:w-4/12 mt-[20px] lg:w-3/12 px-3 max-sm:flex items-center justify-center" data-aos="zoom-in-up">
                            <div className=" max-sm:max-w-[282px] relative rounded-[213px] bg-white shadow-[0px_100px_200px_0px_rgba(1,23,54,0.05)] flex flex-col items-center justify-center">
                                <img className='w-full' src={place3} alt="big-img1" />
                                <img className=' absolute md:top-[52%] top-[56%]' src={traveller3} alt="short1" />
                                <p className='text-[#011736] text-center pt-[68px] text-[24px] font-Montserrat font-semibold leading-[150%] self-stretch'>Marcus Dias</p>
                                <p className='text-[#979797] pb-[40px] font-Montserrat text-[16px] font-medium self-stretch pt-1 text-center leading-[150%]'>@marcusdias</p>
                            </div>
                        </div>
                        <div className=" w-full sm:w-6/12 md:w-4/12 mt-[20px] lg:w-3/12 px-3 max-sm:flex items-center justify-center" data-aos="zoom-in-up">
                            <div className=" max-sm:max-w-[282px] relative rounded-[213px] bg-white shadow-[0px_100px_200px_0px_rgba(1,23,54,0.05)] flex flex-col items-center justify-center">
                                <img className='w-full' src={place4} alt="big-img1" />
                                <img className=' absolute md:top-[52%] top-[56%]' src={traveller4} alt="short1" />
                                <p className='text-[#011736] text-center pt-[68px] text-[24px] font-Montserrat font-semibold leading-[150%] self-stretch'>Davis Schleifer</p>
                                <p className='text-[#979797] pb-[40px] font-Montserrat text-[16px] font-medium self-stretch pt-1 text-center leading-[150%]'>@davisschleifer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Besttravellers

