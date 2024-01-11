import React from 'react'

const Formsection = () => {
    return (
        <>
            <div className='bg-[#f5f5ff] pt-24 pb-20'>
                <div className='max-w-[1140px] px-3 mx-auto' data-aos="fade-up"
                    data-aos-duration="3000">
                    <h2 className='text-[#011736] font-Monstserrat font-bold text-[40px] text-center max-w-[516px] mx-auto capitalize'>Subscribe Newsletter &  get letest news</h2>
                    <div className='p-[11px_11px_11px_20px] bg-[#fff] rounded-[150px] shadow-[0px 100px 200px 0px #0117361A] mx-auto max-w-[493px] flex justify-between items-center mt-5  '>
                        <input type="text" placeholder='Enter your email address' className='text-[#AEB5BF] font-Rubik font-normal text-[16px] sm:text-[20px] outline-0' />
                        <button className='text-white font-Montserrat font-semibold sm:text-[16px] text-[14px] rounded-[56px]  bg-[#313EF7] border-0 sm:px-11 px-3 py-3.5  shadow-[ 0px_10px_14px  rgba(49, 62, 247, 0.25)]  hover:scale-105 duration-[0.5s]'>Subscribe</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Formsection