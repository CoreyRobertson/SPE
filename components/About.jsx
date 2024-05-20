import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const About = () => {
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
        <section className='about_section' id='about'>
            <div className='about_text-section'>
                <h4 className='main_heading'>Sculpt Your Space with <span> Melbourne’s Concrete Cutting Experts</span></h4>
                <p className='para'>At Sofra Plumbing and Excavation, our decade of experience in the Melbourne construction industry equip us to skillfully navigate the complexities of both residential and commercial projects. With our state-of-the-art equipment and highly skilled operators, we deliver cutting, plumbing and excavation services around Melbourne metro. We recognize that no two projects are alike, and we are committed to providing bespoke solutions tailored to meet the specific requirements of each project, ensuring optimal outcomes.</p>
                <div className='hero_buttons-container'>
                    <a className='para' href='#quote'>REQUEST A QUOTE</a>
                </div>
            </div>
            <div className='about_image'>
                {/* Conditional layout based on isMobile state */}
                <Image src='/images/Joe2.jpg' alt='Joe2' height={500} width={400} layout={isMobile ? 'responsive' : 'fixed'} />
            </div>
        </section>
    );
}

export default About;
