import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { FaTiktok, FaInstagram } from "react-icons/fa";



const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className='footer_body'>
                <div className='footer_primary'>
                    <div className='footer_logo-container'>
                        <Image src='images/logo2.svg' alt='logo' width={120} height={70} />
                        <Image src='/images/LogoTP.png' alt='LogoTP' width={120} height={70} />
                    </div>
                    <p className='para'>Sofra Plumbing and Excavation</p>
                    <a className='para'>sofraplumbingandexcavation@gmail.com</a>
                    <a className='para'>Joe Sofra | 0409 534 949</a>
                    <p className='para'>Melbourne Metro, AUS</p>
                    <p className='para'>ABN 21 672 331 029</p>
                </div>
                <div className='footer_column'>
                    <h4 className='heading'>Main</h4>
                    <Link href='/' className='para footer_link'>Home</Link>
                    <Link href='/#about' className='para footer_link'>About</Link>
                    <Link href='/#testimonials' className='para footer_link'>Testimonials</Link>
                    <Link href='/#quote' className='para footer_link'>Quote</Link>
                </div>
                <div className='footer_column'>
                    <h4 className='heading'>Services</h4>
                    <Link href='/Cutting' className='para footer_link'>Cutting</Link>
                    <Link href='/Excavation' className='para footer_link'>Excavation</Link>
                    <Link href='/Coring' className='para footer_link'>Coring</Link>
                    <Link href='/' className='para footer_link'>Plumbing</Link>
                </div>
                <div className='footer_column'>
                    <h4 className='heading'>Follow Us</h4>
                    <Link aria-label='Follow us on TikTok' href='https://www.tiktok.com/@sofraplumbingexcavation?is_from_webapp=1&sender_device=pc' className='para footer_link'><FaTiktok style={{ fontSize: '42px', color: '#FFFEFD', }} /></Link>
                    <Link aria-label='Follow us on Instagram' href='https://www.instagram.com/sofra_plumbingexcavation?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' className='para footer_link'><FaInstagram style={{ fontSize: '42px', color: '#FFFEFD', }} /></Link>
                </div>
            </div>
            <hr />
            <p className='para footer_legal'>&copy; {currentYear} Sofra Plumbing and Excavation. All rights reserved. | Web design by Southshore Digital</p>
        </footer>
    )
}

export default Footer