import React from 'react'
import image1 from '../assets/images/png/image1.png'
import image2 from '../assets/images/png/image2.png'
import image3 from '../assets/images/png/image3.png'
import image4 from '../assets/images/png/image4.png'

const Makememories = () => {
    return (
        <>
            <div className=' max-w-[1040px] mx-auto px-3 py-5'>
                <h2 className=' font-Monstserrat text-[40px] font-bold py-4 text-[#011736] text-center leading-[60px] capitalize'>Make memories with us</h2>
                <div className='flex flex-wrap flex-row py-5 justify-center'>
                    <div className='lg:w-3/12 md:w-4/12 sm:w-6/12 w-6/12 px-3' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <img src={image1} alt="image1" className='w-full'/>
                    </div>
                    <div className='lg:w-3/12 md:w-4/12 w-6/12 px-3' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <img src={image2} alt="image1" className='w-full pt-12' />
                    </div>
                    <div className='lg:w-3/12 md:w-4/12 w-6/12 px-3' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <img src={image3} alt="image1" className='w-full' />
                    </div>
                    <div className='lg:w-3/12 md:w-4/12 w-6/12 px-3' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom">
                        <img src={image4} alt="image1" className='w-full pt-12' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Makememories