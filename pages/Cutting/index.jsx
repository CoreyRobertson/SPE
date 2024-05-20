import Image from 'next/image'
import React from 'react'
import { IoStar } from 'react-icons/io5'
import Quote from '../../components/Quote'
import CuttingContent from '../../components/CuttingContent'

const index = () => {
    return (
        <page>
            <section className='hero_section'>
                <div className='hero_image-container'>
                    <Image className='hero_image' src='/images/BG2.svg' alt='Hero' layout='fill' quality={20} />
                </div>
                <div className='hero_text-container'>
                    <div className='page_logo-container'>
                        <Image src='/images/LogoTP.png' alt='LogoTP' layout='fill' style={{ paddingBottom: '1rem' }} />
                    </div>
                    <h3 className='main_heading h3-first'>CONCRETE CUTTING</h3>
                    <h3 className='main_heading h3-second'>& SAWING</h3>

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
                        <a className='para' href="tel:+1234567890">CALL US</a>
                        <a className='para' href='#quote'>REQUEST A QUOTE</a>
                    </div>
                </div>
            </section >
            <CuttingContent />
            <Quote />
        </page>
    )
}

export default index