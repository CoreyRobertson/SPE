'use client'

import Image from 'next/image'
import React from 'react'
import Carousel from './Carousel'


const Reviews = () => {
    return (
        <section className='reviews_section' id='testimonials'>
            <div className='intro_background-container'>
                <Image src='/images/Hero.jpg' alt='Hero Background' layout='fill' className='intro_background' quality={100} />
            </div>
            <div className='reviews_text-section'>
                <h4 className='main_heading'>What do our clients have to say <span> about us and our services</span></h4>
                <p className='para'>Our clients praise the precision and efficiency provided by our experienced team. Specialising in concrete core drilling, saw cutting, and excavation, Sofra Plumbing and Excavation delivers exceptional outcomes tailored to the unique needs of both residential and commercial projects.
                    <br />
                    <br />
                    Hear from our satisfied customers who commend our ability to tackle complex challenges with professionalism and meticulous attention to detail..</p>
            </div>
            <Carousel />
        </section >
    )
}

export default Reviews