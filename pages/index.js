import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import About from '@/components/About'
import Featured from '@/components/Featured'
import Reviews from '@/components/Reviews'
import Quote from '@/components/Quote'

import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Sofra Plumbing & Excavation</title>
        <meta name="description" content="Sofra Plumbing & Excavation provides top-tier concrete cutting, plumbing, and excavation services across Melbourne. Discover precision and efficiency with our experienced team, equipped to handle projects of any size. Contact us today for tailored solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Concrete Cutting, Plumbing, Excavation, Melbourne, Core Drilling, Trench Digging, Backfilling, Earth Removal" />
        <meta property="og:title" content="Sofra Plumbing & Excavation | Melbourne’s Concrete Cutting Experts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Intro />
        <About />
        <Featured />
        <Reviews />
        <Quote />

      </main>
    </>
  )
}
