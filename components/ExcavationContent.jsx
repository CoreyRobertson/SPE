import React from 'react'
import Head from 'next/head'

const ExcavationContent = () => {
    return (
        <>
            <Head>
                <title>Excavation Services | Sofra Plumbing & Excavation</title>
                <meta name="description" content="Leading excavation services in Melbourne, offering everything from trench digging to site preparation and demolition. Discover Sofra Plumbing & Excavation's high-efficiency and safety-focused excavation solutions." />
                <meta name="keywords" content="Excavation, Trench Digging, Augering, Backfilling, Earth Removal, Demolition, Melbourne" />
                <meta property="og:title" content="Professional Excavation Services | Sofra Plumbing & Excavation" />
                <meta property="og:description" content="Sofra Plumbing & Excavation provides comprehensive excavation services in Melbourne, ensuring precise site preparation with minimal environmental impact. Learn more about our advanced techniques and services." />
                <meta property="og:type" content="website" />
            </Head>
            <section className='page_content-section'>
                <div className='page_content-main'>
                    <div className='page_content-container'>
                        <h4 className='main_heading'>What is Excavation?</h4>
                        <p className='para'>Excavation is a fundamental construction process that involves the removal of earth to form an access cavity or trench. At Sofra Plumbing and Excavation, we specialize in this crucial service, using state-of-the-art equipment and techniques to safely and efficiently prepare sites for construction and infrastructural development.
                            <br />
                            <br />
                            Our excavation services are designed to meet the needs of both residential and commercial projects, ensuring that every job is executed with precision and care to maintain the structural integrity of the surrounding environment.</p>
                    </div>
                    <div className='page_content-container'>
                        <h4 className='main_heading'>What Excavation services do we provide?</h4>
                        <p className='para'>At Sofra Plumbing and Excavation, we provide a comprehensive range of tailored excavation services. Our experienced team efficiently handles tasks from trench digging for pipelines or drainage with minimal disruption, to precise augering for various post or piling depths. Our backfilling services restore and stabilize sites post-excavation, while our earth removal adheres to environmental standards to prepare sites for the next construction phase. We also conduct demolition with the highest safety and strategic planning for both small and large structures.
                            <br />
                            <br />
                            Dedicated to delivering top-quality services safely and efficiently, we are ready to support your next project.</p>
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

// Trench digging, augering, backfilling, earth removal, demolition

export default ExcavationContent