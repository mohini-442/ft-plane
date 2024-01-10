import React,{useState} from 'react'
import letsfly from '../assets/images/png/letsfly.png'
import dootedline from '../assets/images/png/dootedline.png'

const Letsfly = () => {
    return (
        <>
            <div>
                <div className="max-w-[1140px] px-3 mx-auto pb-7" >
                    <div className='flex flex-wrap flex-row py-5 '>
                        <div className='md:w-2/4 w-full px-3' data-aos="fade-up">
                            <img src={letsfly} alt="letsfly" className='w-full' />
                        </div>
                        <div className='md:w-2/4 w-full px-3 pt-5' data-aos="fade-up">
                            <h1 className='text-[#313EF7] font-Monstserrat text-xl font-black relative after:w-9/12 lg:after:absolute after:top-3.5 after:left-24 after:border-[#E5E7EB] after:h-[2px] after:border-dashed after:border-t-[3px]'>Let’s Fly</h1>
                            <h2 className='text-[#030303] font-Monstserrat text-[32px] font-bold pt-2 leading-[45px]'>It’s one of the leading online flight booking platforms in the world</h2>
                            <div className='relative z-[1]'>
                                <div className='flex items-center gap-3 pt-8'>
                                    <div className='w-2.5 h-2.5 bg-[#313EF7] rounded-full'></div>
                                    <p className='text-[#030303] font-Monstserrat text-[16px] font-medium'>Contrary to popular belief, Lorem Ipsum is not simply random text</p>
                                </div>
                                <div className='flex items-center gap-3 pt-3'>
                                    <div className='w-2.5 h-2.5 bg-[#313EF7] rounded-full'></div>
                                    <p className='text-[#030303] font-Monstserrat text-[16px] font-medium'>If you are going to use a passage of Lorem Ipsum</p>
                                </div>
                                <div className='flex gap-3 pt-3 '>
                                    <div className='pt-2'>
                                        <div className='w-2.5 h-2.5 bg-[#313EF7] rounded-full'></div>
                                    </div>
                                    <p className='text-[#030303] font-Monstserrat text-[16px] font-medium'>Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                                </div>
                                <div className='flex gap-3 pt-3'>
                                    <div className='pt-2'>
                                        <div className='w-2.5 h-2.5 bg-[#313EF7] rounded-full'></div>
                                    </div>
                                    <p className='text-[#030303] font-Monstserrat text-base font-medium'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                </div>
                                <img src={dootedline} alt="dootedline" className='absolute top-[20%] left-[1%] z-[-1]' />
                            </div>
                            <div className='flex items-center pt-5'>
                                <button className='text-white font-Monstserrat font-semibold text-[16px] rounded-[56px]  bg-[#313EF7] border-0 px-11 py-3.5 mt-3 shadow-[ 0px_10px_14px_ rgba(49, 62, 247, 0.25)]'>Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Letsfly
