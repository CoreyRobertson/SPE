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
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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