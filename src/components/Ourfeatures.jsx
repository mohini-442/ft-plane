import React from "react";
import aeroplane from '../assets/images/svg/aeroplane.svg'
import discount from '../assets/images/svg/discount.svg'
import headphone from '../assets/images/svg/headphone.svg'
import lock from '../assets/images/svg/lock.svg'
import arrow from "../assets/images/svg/arrow.svg";
const featurescard = [
    {
        svg: aeroplane,
        heading: "Best Guide",
        para: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.",
        circle: arrow
    },
    {
        svg: discount,
        heading: "More Discount",
        para: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.",
        circle: arrow
    },
    {
        svg: lock,
        heading: "Private",
        para: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.",
        circle: arrow
    },
    {
        svg: headphone,
        heading: "Online Support",
        para: "Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.",
        circle: arrow
    },
];
const Ourfeatures = () => {
    const list = featurescard.map((featurescard) => (
        <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 w-full flex justify-center px-4 pt-4 pt-lg-0">
            <div className="rounded-[185px] max-w-[281.63px] bg-white py-[42px] px-[21px] shadow-[0px_100px_200px_0px_#0117361A] flex justify-center flex-col items-center hover:scale-105 duration-[2s]">
                <div className="w-[70px] h-[70px] rounded-full bg-[#313EF70D] flex justify-center items-center">
                    {" "}
                    <img src={featurescard.svg} alt="img-1" />
                </div>
                <div>
                    <p className=" text-center font-Monstserrat text-2xl font-extrabold leading-[150%] text-[#030522] pb-2.5 pt-4">
                        {featurescard.heading}
                    </p>
                    <div className=" font-Monstserrat text-[#030522A6] text-base leading-[150%] font-normal text-center max-w-[239.63px] pb-8">
                        {featurescard.para}
                    </div>
                </div>
                <div className="w-[50px] h-[50px] rounded-full bg-[#030522] flex justify-center items-center cursor-pointer">
                    {" "}
                    <img src={featurescard.circle} alt="img-2"/>
                </div>
            </div>
        </div>
    ));
    return (
        <div>
            <div className="max-w-[1140px] mx-auto px-3 py-12 mt-[-14%]" data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <h2 className=" font-Monstserrat text-[40px] text-[#030522] font-bold text-center ">Our Features</h2>
                <div className="flex flex-wrap flex-row py-5 justify-center">
                    {list}
                </div>
            </div>
        </div>
    );
};

export default Ourfeatures;