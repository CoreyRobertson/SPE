import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { LuQuote } from "react-icons/lu";
import { IoIosStar } from "react-icons/io";

const Carousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // This ensures there's no auto-scrolling.
        arrows: false,
    };

    return (
        <Slider {...settings} className='slider'>
            <div className='review_card'>
                <div className='card_content'>
                    <LuQuote className='quote_icon' style={{ fontSize: '64px', opacity: '0.2', color: '#4685BA' }} />
                    <p className='para'>
                        Joe did a great job with our concrete excavation and digging trenches for our plumbing. He was easy to deal with, fair in price and always communicated with us. I would highly recommend him for the job. Thanks Joe!
                    </p>

                    <div className='reviewer_container'>
                        <IoIosStar style={{ color: '#F2A05F' }} />
                        <IoIosStar style={{ color: '#F2A05F' }} />
                        <IoIosStar style={{ color: '#F2A05F' }} />
                        <IoIosStar style={{ color: '#F2A05F' }} />
                        <IoIosStar style={{ color: '#F2A05F' }} />
                        <p className='heading'>
                            Anne Q.
                        </p>
                        <p className='heading'>
                            Albanvale, VIC.
                        </p>
                    </div>
                </div>
            </div>
            <div className='review_card'>
                <div className='card_content'>
                    <LuQuote className='quote_icon' style={{ fontSize: '64px', opacity: '0.2', color: '#4685BA' }} />
                    <p className='para'>
                        Joe was prompt, reliable and polite. He did a very good job at a good price. I would recommend him.
                    </p>

                    <div className='reviewer_container'>
                        <IoIosStar style={{ color: '#F2A05F' }} />
                        <IoIosStar style={{ color: '#F2A05F' }} />
                        <IoIosStar style={{ color: '#F2A05F' }} />
                        <IoIosStar style={{ color: '#F2A05F' }} />
                        <IoIosStar style={{ color: '#F2A05F' }} />
                        <p className='heading'>
                            Valerie P.
                        </p>
                        <p className='heading'>
                            Hampton, VIC.
                        </p>
                    </div>
                </div>
            </div>
            <div className='review_card'>
                <div className='card_content'>
                    <LuQuote className='quote_icon' style={{ fontSize: '64px', opacity: '0.2', color: '#4685BA' }} />
                    <p className='para'>
                        Joe did a great job. He was punctual, friendly and diligent. Would happily recommend and engage again.
                    </p>

                    <div className='reviewer_container'>
                        <IoIosStar style={{ color: '#F2A05F' }} />
                        <IoIosStar style={{ color: '#F2A05F' }} />
                        <IoIosStar style={{ color: '#F2A05F' }} />
                        <IoIosStar style={{ color: '#F2A05F' }} />
                        <IoIosStar style={{ color: '#F2A05F' }} />
                        <p className='heading'>
                            Vaughan M.
                        </p>
                        <p className='heading'>
                            Malvern East, VIC.
                        </p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}

export default Carousel