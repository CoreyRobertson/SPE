import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { IoIosClose } from "react-icons/io";
import Image from 'next/image';
import { gsap } from 'gsap';

const Overlay = ({ onClose }) => {
    const overlayRef = useRef(null);

    useEffect(() => {
        // Animate the overlay to slide in from the left
        gsap.to(overlayRef.current, { x: 0, autoAlpha: 1, duration: 0.5 });

        return () => {
            // Animate the overlay to slide out to the left on unmount
            gsap.to(overlayRef.current, { x: '-100%', autoAlpha: 0, duration: 0.5 });
        }
    }, []);

    return (
        <div className='overlay' ref={overlayRef}>
            <div className='overlay_content'>
                <button className='overlay_close' onClick={onClose}>
                    <IoIosClose className='close_icon' />
                </button>
                <Link href='/' className='overlay_link heading' onClick={onClose}>Home</Link>
                <Link href='/#featured' className='overlay_link heading' onClick={onClose}>Services</Link>
                <Link href='/#quote' className='overlay_link heading' onClick={onClose}>Contact</Link>
                <a className='para overlay_button' href="tel:+61409534949">CALL US</a>
                <Image src='/images/logo2.svg' alt='logo' width={180} height={100} />

            </div>

        </div>
    );
};

export default Overlay;
