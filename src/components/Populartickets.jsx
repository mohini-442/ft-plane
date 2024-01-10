import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import earth from "../assets/images/png/earth.png";
import card from "../assets/images/png/card.png";
import layer from "../assets/images/png/layer.png";
import dootedline from '../assets/images/png/dootedline.png'

const Populartickets = () => {
    const first = React.useRef(null);
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: false,
                },
            },
        ],
    };
    return (
        <div className="bg-[#010223] overflow-hidden mt-16">
            <div className=" max-w-[1040px] mx-auto px-3 py-[50px] text-center lg:text-start">
                <div className=" flex flex-wrap flex-row -mx-3 py-8">
                    <div className="lg:w-1/2 md:w-1/2 w-full px-3 d-flex items-center justify-center" data-aos="fade-up">
                        <h2 className=" text-white sm:text-[40px] text-2xl font-bold sm:leading-[60px] leading-[30px] tracking-[0.6px] capitalize lg:max-w-[496px] font-Monstserrat">
                            Book Popular Flight Tickets
                        </h2>
                        <p className="text-[#A6A7B2]  text-base font-normal leading-[24px] lg:max-w-[463px] font-Montserrat">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's
                        </p>
                        <img
                            src={earth}
                            alt="worldairplane"
                            className=" flex justify-center w-full max-w-[315px] h-[315px]"
                        />
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 w-full px-3 relative text-center relaive" data-aos="fade-up">
                        <Slider {...settings} ref={first}>
                            <div className="flex justify-center items-center w-100 mx-auto">
                                <img
                                    src={card}
                                    alt="card"
                                    className="xl:w-full lg:w-[65%]  w-full sm:max-w-[390px] h-[505px]"
                                />
                            </div>
                            <div className="flex justify-center items-center w-full">
                                <img
                                    src={card}
                                    alt="card"
                                    className="xl:w-full lg:w-[65%]  w-full sm:max-w-[390px] h-[505px]"
                                />
                            </div>
                            <div className="flex justify-center items-center w-full">
                                <img
                                    src={card}
                                    alt="card"
                                    className="xl:w-full lg:w-[65%]  w-full sm:max-w-[390px] h-[505px]"
                                />
                            </div>
                            <div className="flex justify-center items-center w-full">
                                <img
                                    src={card}
                                    alt="card"
                                    className="xl:w-full lg:w-[65%]  w-full sm:max-w-[390px] h-[505px]"
                                />
                            </div>
                            <div className="flex justify-center items-center w-full">
                                <img
                                    src={card}
                                    alt="card"
                                    className="xl:w-full lg:w-[65%]  w-full sm:max-w-[390px] h-[505px]"
                                />
                            </div>
                            <div className="flex justify-center items-center w-full">
                                <img
                                    src={card}
                                    alt="card"
                                    className="xl:w-full lg:w-[65%]  w-full sm:max-w-[390px] h-[505px]"
                                />
                            </div>
                        </Slider>
                        <img src={dootedline} alt="dootedline" className="absolute right-[-7%] top-[48%]"/>
                        <div className="sm:block flex gap-[11px] absolute xl:right-[-12%] right-[1%] bottom-[0%] align-items-center flex-col text-end justify-content-end">
                            <button
                                className=" hidden sm:block bg-[#1A1B39] hover:bg-[#313EF7] duration-300 hover:shadow-[0_10px_14px_0px_#0B0F50;]  py-[12px] px-[16px] mb-3 rounded-full"
                                onClick={() => first?.current?.slickPrev()}
                            >
                                <svg
                                    width="11"
                                    height="18"
                                    viewBox="0 0 11 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10 1L2 9L10 17" stroke="white" stroke-width="2" />
                                </svg>
                            </button>
                            <button
                                className=" hidden sm:block bg-[#1A1B39] hover:bg-[#313EF7] duration-300 hover:shadow-[0_10px_14px_0px_#0B0F50;]  py-[12px] px-[16px] rounded-full"
                                onClick={() => first?.current?.slickNext()}
                            >
                                <svg
                                    width="11"
                                    height="18"
                                    viewBox="0 0 11 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1 17L9 9L1 0.999999"
                                        stroke="white"
                                        stroke-width="2"
                                    />
                                </svg>
                            </button>
                        </div>
                        <img
                            src={layer}
                            alt="cardlayer"
                            className=" hidden lg:block absolute xl:max-w-[450px] max-w-[360px]  md:max-w-[378px] lg:left-[10%] left-[33%] top-[4%] lg:top-[5%] h-[520px]"
                        />
                        <img
                            src={layer}
                            alt="cardlayer"
                            className=" hidden lg:block absolute xl:max-w-[450px] max-w-[360px]  md:max-w-[378px] lg:left-[5%] left-[33%] top-[4%] lg:top-[1%] h-[520px]"
                        />
                        <img
                            src={layer}
                            alt="cardlayer"
                            className="hidden lg:block absolute xl:max-w-[450px] max-w-[360px]  md:max-w-[378px] lg:left-[14%] left-[33%] top-[4%] lg:top-[8%] h-[520px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Populartickets;
