import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { FaCheckCircle } from "react-icons/fa";

const Intro = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);  // Set threshold to 768px for mobile devices
        };

        // Set initial value
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className='intro_section'>
            <div className='intro_background-container'>
                <Image className='intro_background' src='/images/BG.svg' layout='fill' alt='intro background' />
            </div>
            <div className='intro_body'>
                {/* Conditional layout based on isMobile state */}
                <Image className='joe1' src='/images/Joe1.svg' height={500} width={400} layout={isMobile ? 'responsive' : 'fixed'} alt='Joe' quality={20} />
                <div className='intro_text-section'>
                    <h4 className='main_heading'>Sculpt Your Space with <span> Melbourne’s Concrete Cutting Experts</span></h4>
                    <p className='para'>Leveraging advanced techniques and innovative practices, we set the standard for concrete cutting and excavation services in Melbourne. Our team is continually trained in the latest concrete cutting and excavation practices to ensure superior results in every project, from simple cuttings to complex demolitions. With Sofra Plumbing and Excavation, you gain access to cutting-edge solutions that keep your project moving smoothly and efficiently.</p>
                    <div className='intro_grid'>
                        <p className='para'><FaCheckCircle style={{ color: '#F2A05F', fontSize: 22 }} />Small Demolition</p>
                        <p className='para'><FaCheckCircle style={{ color: '#F2A05F', fontSize: 22 }} />Augering</p>
                        <p className='para'><FaCheckCircle style={{ color: '#F2A05F', fontSize: 22 }} />Plumbing</p>
                        <p className='para'><FaCheckCircle style={{ color: '#F2A05F', fontSize: 22 }} />Vertical Cutting</p>
                        <p className='para'><FaCheckCircle style={{ color: '#F2A05F', fontSize: 22 }} />Concreting</p>
                        <p className='para'><FaCheckCircle style={{ color: '#F2A05F', fontSize: 22 }} />Road Sawing</p>
                        <p className='para'><FaCheckCircle style={{ color: '#F2A05F', fontSize: 22 }} />Excavation</p>
                        <p className='para'><FaCheckCircle style={{ color: '#F2A05F', fontSize: 22 }} />Core Holes</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Intro

