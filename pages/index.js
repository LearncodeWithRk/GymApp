import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Service from '@/components/Service'
import Diet from '@/components/Diet'
import Brand from '@/components/Brand'

import Trainer from '@/components/Trainer'
import Videogym from '@/components/Videogym'
import Callaction from '@/components/Callaction'
import Testimonials from '@/components/Testimonials'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <Hero />
   <Brand />
   <About />
   <Service />
   <Diet />
   <Trainer />
  <Videogym />
  <Testimonials />
  <Callaction />

   </>

  )
}
