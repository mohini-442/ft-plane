import React, { useState } from 'react'
import up from '../assets/images/png/up.png'

const Backtotop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling animation
        });
    };

    // Event listener to show/hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    });
    return (
        <div>
            <button className={`back-to-top ${isVisible ? 'visible' : ''} fixed bottom-[20px] right-[20px] z-[9]`}
                onClick={scrollToTop}
                style={{ display: isVisible ? 'block' : 'none', }} >
                   <img src={up} alt="top" className='w-full' />
            </button>
        </div>
    )
}

export default Backtotop