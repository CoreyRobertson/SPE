import React from 'react'
import Form from './Form'
import { AiOutlineMail } from "react-icons/ai";
import { IoPhonePortraitOutline } from "react-icons/io5";

const Quote = () => {
    return (
        <section className='quote_section' id='quote'>
            <div className='quote_text-container'>
                <h4 className='main_heading'>Your vision, our expertise, <span> get a free quote today</span></h4>
                <p className='para'>At Sofra Plumbing and Excavation, we transform your ideas into concrete results. Reach out now for a free quote, and let's discuss how our specialised services can contribute to the success of your project.
                    <br />
                    <br />
                    Whether it's for residential or commercial needs, we're here to support you every step of the way.</p>
                <div className='icon_text'>
                    <div className='icon_container'>
                        <AiOutlineMail style={{ fontSize: '20px', color: '#FFFEFD' }} />
                    </div>
                    <a className='para'>sofraplumbingandexcavation@gmail.com</a>
                </div>
                <div className='icon_text'>
                    <div className='icon_container'>
                        <IoPhonePortraitOutline style={{ fontSize: '20px', color: '#FFFEFD' }} />
                    </div>
                    <a className='para'>0409 534 949</a>
                </div>
            </div>
            <Form />
        </section>
    )
}

export default Quote