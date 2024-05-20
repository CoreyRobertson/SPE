import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Featured = () => {
    return (
        <section>
            <div className='featured_container'>
                <div className='featured_card'>
                    <Image src='/images/Cutting.svg' alt='Cutting' layout='fill' quality={20} />
                    <Link className='main_heading' href='/Cutting'>CUTTING</Link>
                </div>
                <div className='featured_card'>
                    <Image src='/images/Excavation.svg' alt='Excavation' layout='fill' quality={20} />
                    <Link className='main_heading' href='/Excavation'>EXCAVATION</Link>
                </div>
                <div className='featured_card'>
                    <Image src='/images/Hole.svg' alt='Hole' layout='fill' quality={20} />
                    <Link className='main_heading' href='/Coring'>CORING</Link>
                </div>
                {/* <div className='featured_card'>
                    <Image src='/images/Hole.svg' alt='Hole' layout='fill' />
                    <Link className='main_heading' href='/'>CORING</Link>

                </div> */}
            </div>
        </section>
    )
}

export default Featured