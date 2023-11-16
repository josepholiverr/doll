
'use client'
import Hero from "@/components/hero"
import { useEffect } from 'react'
import Features01 from "@/components/features-01"
import Features02 from "@/components/features-02"
import Features03 from "@/components/features-03"
import Testimonials from "@/components/testimonials"
import Cta from "@/components/cta"
import {Carousel} from "@/components/Carousel"
import {Carousel2} from "@/components/Carousel2"

import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 1000,
      easing: 'ease-out-cubic',
    });
  });

  return (
    <>
      <Hero />
      <Carousel/>
      <Features01 />
      <Carousel2/>
      <Features03 />
      <Testimonials />
      <Cta />
    </>
  )
}


