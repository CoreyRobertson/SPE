import React from 'react'

import Head from 'next/head'

const CoringContent = () => {
    return (
        <>
            <Head>
                <title>Core Drilling Services | Sofra Plumbing & Excavation</title>
                <meta name="description" content="Discover precise core drilling services by Sofra Plumbing & Excavation. Our diamond-tipped drill bits offer minimal disruption and maintain structural integrity for utility installations in Melbourne." />
                <meta name="keywords" content="Core Drilling, Plumbing, Electrical Installation, Diamond Drill, Melbourne" />
                <meta property="og:title" content="Expert Core Drilling Services | Sofra Plumbing & Excavation" />
                <meta property="og:description" content="Utilize our core drilling services for precise cuts and minimal disruption in Melbourne. Contact us to integrate essential utilities without compromising structure." />
                <meta property="og:type" content="website" />
            </Head>
            <section className='page_content-section'>
                <div className='page_content-main'>
                    <div className='page_content-container'>
                        <h4 className='main_heading'>What is Core Drilling?</h4>
                        <p className='para'>Core drilling in construction is an indispensable service for creating essential pathways for utilities in reinforced concrete and other tough materials. Utilizing diamond-tipped drill bits for unmatched precision, our core drilling services allow seamless integration of plumbing and electrical systems without compromising the structural integrity of your property.
                            <br />
                            <br />
                            This method ensures a meticulous approach to modifying and enhancing commercial and residential buildings. Contact Sofra Plumbing and Excavation today to find out more about our Core Drilling services.</p>
                    </div>
                    <div className='page_content-container'>
                        <h4 className='main_heading'>What are the benefits of Core Drilling?</h4>
                        <p className='para'>Opt for core drilling to guarantee minimal disruption and maximum precision for your project. Our core drilling methods produce impeccably clean cuts, ensuring structural integrity and reducing the need for subsequent cosmetic repairs. The process is significantly quieter than conventional methods, making it suitable for operations in occupied spaces without causing disturbance.
                            <br />
                            <br />
                            Our dust-controlled drilling not only keeps the site clean but also protects the health of onsite personnel, all while optimizing costs and timeline efficiencies.</p>
                    </div>

                </div>
                <a href="mailto:sofraplumbingandexcavation@gmail.com?subject=Booking%20Inquiry&body=Hi%20Sofra%20Plumbing%20and%20Excavation,%0D%0A%0D%0AI%20am%20interested%20in%20your%20services%20and%20would%20like%20to%20discuss%20booking%20details.%20Please%20let%20me%20know%20a%20suitable%20time%20to%20call%20or%20if%20I%20need%20to%20provide%20further%20information.%0D%0A%0D%0AThank%20you!"
                    style={{ width: '15rem', marginTop: '1rem', padding: '1rem', textAlign: 'center', display: 'inline-block', backgroundColor: '#4685BA', color: 'white', textDecoration: 'none' }}
                    className="submit-button para">
                    Book Now
                </a>

            </section>
        </>

    )
}

export default CoringContent