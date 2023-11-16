"use client"

import { useEffect } from "react"
import Image from "next/image"

import Client01 from "@/components/images/client-01.svg"
import Client02 from "@/components/images/client-02.svg"
import Client03 from "@/components/images/client-03.svg"
import Client04 from "@/components/images/client-04.svg"
import Client05 from "@/components/images/client-05.svg"
import Client06 from "@/components/images/client-06.svg"
import Client07 from "@/components/images/client-07.svg"
import Client08 from "@/components/images/client-08.svg"
import Client09 from "@/components/images/client-09.svg"


// Import Swiper
import Swiper, { Autoplay } from 'swiper'
import 'swiper/swiper.min.css'
Swiper.use([Autoplay])

export function Carousel2() {
  useEffect(() => {
    const carousel = new Swiper(".clients-carousel", {
      slidesPerView: "auto",
      spaceBetween: 64,
      centeredSlides: true,
      loop: true,
      speed: 5000,
      noSwiping: true,
      noSwipingClass: "swiper-slide",
      autoplay: {
        delay: 0,
        disableOnInteraction: true
      }
    })
  }, [])

  return (
    <section className=" text-center relative bg-zinc-50" >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full bg-zinc-50   p-1.5">
  <div className="h-1.5 w-8 rounded-lg bg-zinc-50"></div>
</div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
       
    

        <div className="py-6 md:py-8">
          <div className="overflow-hidden">
            {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
            {/* * Custom styles in src/css/additional-styles/theme.scss */}
            <div className="clients-carousel swiper-container relative before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none bg-zinc-50 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-zinc-50">
              <div className="swiper-wrapper !ease-linear select-none items-center">
                {/* Carousel items */}
                <div className="swiper-slide !w-auto">
                  <Image
                    src={Client01}
                    className="mt-0.5"
                    alt="Client 01"
                    width={130}
                    height={35}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    src={Client02}
                    alt="Client 02"
                    width={121}
                    height={35}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    className="mt-1"
                    src={Client03}
                    alt="Client 03"
                    width={150}
                    height={33}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    src={Client04}
                    alt="Client 04"
                    width={120}
                    height={36}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    src={Client05}
                    alt="Client 05"
                    width={150}
                    height={35}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    src={Client06}
                    alt="Client 06"
                    width={130}
                    height={34}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    src={Client07}
                    alt="Client 07"
                    width={110}
                    height={34}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  
                  <Image
                    src={Client08}
                    alt="Client 08"
                    width={110}
                    height={34}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    className="mt-2"
                    src={Client09}
                    alt="Client 09"
                    width={120}
                    height={37}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
