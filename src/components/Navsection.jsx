import React from 'react'
import logo from '../assets/images/png/logo.png'
import { useState } from 'react';
import plane from '../assets/images/png/plane.png'

function Navsec() {
    const [set, setshow] = useState(true);
    function menu() {
        setshow(!set);
    }
    return (
        <div>
            <nav className="max-w-[1140px] px-3 mx-auto pb-5">
                <div className="flex justify-between py-3">
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <img src={logo} alt="logo" />
                        <h2 className='text-white font-Montserrat "text-sm/[22px] font-extrabold leading-7'>FT PLANE</h2>
                    </div>
                    <ul
                        className={`flex items-center gap-12 duration-700 mobileView ${set ? "right-[-100%]" : "right-0"
                            }`}
                    >
                        <li><a href=""
                            className="text-white hover:text-[#313EF7] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#313EF7]  text-base font-semibold font-Montserrat" >  All Flight
                        </a>
                        </li>
                        <li><a href="" className="text-white hover:text-[#313EF7] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#313EF7]  text-base font-semibold font-Montserrat"  >  Schedule
                        </a>
                        </li>
                        <li><a
                            href=""
                            className="text-white hover:text-[#313EF7] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#313EF7] text-base font-semibold font-Montserrat"
                        > Passengers
                        </a>
                        </li>
                        <li>
                            <a
                                href=""
                                className="text-white hover:text-[#313EF7] relative after:absolute after:w-0 after:h-[2px] hover:after:absolute after:bottom-[-7px] hover:after:w-full after:left-[50%] transition-all duration-500 after:hover:left-0 after:transition-all after:duration-500 hover:after:bg-[#313EF7]  text-base font-semibold font-Montserrat"
                            >
                                Your Orders
                            </a>
                        </li>
                        <li>
                            <button className="py-[10px] px-10 rounded-[49px] text-white text-base font-semibold border-solid border border-white font-Montserrat hover:bg-[#fff] hover:text-[#000]">
                                Let’s Fly
                            </button>
                        </li>
                    </ul>
                    <label className="flex flex-col lg:hidden  z-20 " onClick={menu}>
                        <span className="w-8 h-[2px] bg-white rounded-full mt-2 flex"></span>
                        <span className="w-8 h-[4px] bg-white rounded-full mt-2 flex"></span>
                        <span className="w-8 h-[2px] bg-white rounded-full mt-2 flex"></span>
                    </label>

                </div>
            </nav>
            <div className="max-w-[1140px] px-3 mx-auto pb-5 ">
                <img src={plane} alt="plane" className='pt-3' data-aos="fade-up" />
                <h2 className='text-white font-Montserrat text-[28px] sm:text-5xl font-bold text-center pt-5 capitalize'>Travel around the world</h2>
                <p className='text-[#B8B8C5] font-Inter text-xs font-normal text-center pt-2 pb-5'>One of the advantages of being disorganized is that one is always having surprising discoveries</p>
            </div>
        </div >
    )
}
export default Navsec