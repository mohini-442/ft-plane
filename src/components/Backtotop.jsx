// import React, { useState } from 'react'
// import up from '../assets/images/png/up.png'

// const Backtotop = () => {
//     const [isVisible, setIsVisible] = useState(false);

//     // Function to scroll to the top of the page
//     const scrollToTop = () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth' // Smooth scrolling animation
//         });
//     };

//     // Event listener to show/hide the button based on scroll position
//     window.addEventListener('scroll', () => {
//         if (window.scrollY > 300) {
//             setIsVisible(true);
//         } else {
//             setIsVisible(false);
//         }
//     });
//     return (
//         <div>
//             <button className={`back-to-top ${isVisible ? 'visible' : ''} fixed bottom-[20px] right-[20px] z-[9]`}
//                 onClick={scrollToTop}
//                 style={{ display: isVisible ? 'block' : 'none', }} >
//                    <img src={up} alt="top" className='w-full' />
//             </button>
//         </div>
//     )
// }

// export default Backtotop


import React from 'react'
import up from '../assets/images/png/up.png'

const Backtotop = () => {
    const [position, setPosition] = React.useState({ top: 0, left: 0 })
    React.useEffect(() => {
        window.scroll({
            top: position.top,
            left: position.left,
            behavior: 'smooth'
        })
    })
    const scrollTop = React.useRef()
    React.useEffect(() => {
        window.addEventListener('scroll', (e) => {
            window.scrollY > 200
                ? scrollTop.current.style.display = 'inline-block'
                : scrollTop.current.style.display = 'none'
        })
    })
    return (
        <>
            <div className='container mx-auto px-3 max-w-[1150px]'>
                <div onClick={() => setPosition({ ...position, position: { top: 0, left: 0 } })} className="fixed hidden bottom-[1%] right-[1%] z-30 translate-y-[0%] animate-bounce"
                    ref={scrollTop}
                ><div className=' cursor-pointer scroll-smooth transform-[all] transform-[.3s] transform-[linear] shadow-[0px_10px_14px0px#313EF740]'>
                       <img src={up} alt="up" />
                    </div>
                </div>
            </div>


        </>

    )
}

export default Backtotop