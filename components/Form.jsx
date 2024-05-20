import React from 'react'

const Form = () => {
    return (
        <form className="contact-form" action="https://formsubmit.co/sofraplumbingandexcavation@gmail.com" method="POST">
            <label for="name" className="form-label heading">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required className="form-input para" />

            <label for="email" className="form-label heading">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required className="form-input para" />

            <label for="mobile" className="form-label heading">Mobile:</label>
            <input type="tel" id="mobile" name="mobile" placeholder="Enter your mobile number" required className="form-input para" />

            <label for="message" className="form-label heading">Message:</label>
            <textarea id="message" name="message" rows="4" placeholder="Enter your message" className="form-textarea para"></textarea>

            <button type="submit" className="submit-button para" aria-label='form submit button' >Submit</button>
        </form>

    )
}

export default Form