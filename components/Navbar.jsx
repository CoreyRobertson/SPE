import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosMenu } from "react-icons/io";
import Overlay from './Overlay'; // Assuming Overlay is in the same directory

const Navbar = () => {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const toggleOverlay = () => {
        setIsOverlayVisible(!isOverlayVisible);
    };

    const closeOverlay = () => {
        setIsOverlayVisible(false);
    };

    return (
        <>
            <nav>
                <div className='nav_container'>
                    <Link href='/'>
                        <Image src='/images/logo2.svg' alt='logo' width={150} height={80} />
                    </Link>
                    <div className='nav_links'>
                        <Link href='/' className='para'>
                            Home
                        </Link>
                        <Link href='/#about' className='para'>
                            Services
                        </Link>
                        <Link href='/#quote' className='para'>
                            Contact
                        </Link>
                    </div>

                    <Image className='nav_logo-2' src='/images/LogoTP.png' alt='logo' width={128} height={65} />
                    <IoIosMenu className='burger' onClick={toggleOverlay} />
                </div>
                <hr className='nav_line' />
            </nav>
            {isOverlayVisible && <Overlay onClose={closeOverlay} />}
        </>
    );
}

export default Navbar;
