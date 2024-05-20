import Image from 'next/image'
import React from 'react'
import { IoStar } from "react-icons/io5";

const Hero = () => {
    return (
        <section className='hero_section'>
            <div className='hero_image-container'>
                <Image className='hero_image' src='/images/BG2.jpg' alt='Saw Background' layout='fill' quality={100} />
            </div>
            <div className='hero_text-container'>
                <h3 className='main_heading h3-first'>EXACT CUTS</h3>
                <h3 className='main_heading h3-second'>EXCEPTIONAL OUTCOMES</h3>
                <p className='para'>Concreting, Cutting, Coring Excavation & Plumbing around Melbourne</p>
                <div className='hero_reviews'>
                    <Image src='/images/People.svg' alt='people' height={80} width={120} />
                    <div className='hero_reviews-score'>
                        <p className='para'>hipages</p>
                        <IoStar className='star_icon' />
                        <IoStar className='star_icon' />
                        <IoStar className='star_icon' />
                        <IoStar className='star_icon' />
                        <IoStar className='star_icon' />
                    </div>
                </div>
                <div className='hero_buttons-container'>
                    <a className='para' href="tel:+61409534949">CALL US</a>
                    <a className='para' href='#quote'>REQUEST A QUOTE</a>
                </div>
            </div>
        </section>
    )
}

export default Hero
