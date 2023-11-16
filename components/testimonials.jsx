"use client"
import Testimonial from "@/components/testimonial"
import TestimonialImg01 from "@/public/images/testimonial-01.jpg"
import TestimonialImg02 from "@/public/images/testimonial-02.jpg"
import TestimonialImg03 from "@/public/images/testimonial-03.jpg"
import TestimonialImg04 from "@/public/images/testimonial-04.jpg"
import TestimonialImg05 from "@/public/images/testimonial-05.jpg"
import TestimonialImg06 from "@/public/images/testimonial-06.jpg"
import TestimonialImg07 from "@/public/images/testimonial-07.jpg"
import TestimonialImg08 from "@/public/images/testimonial-08.jpg"

export default function Testimonials() {
  const testimonials01 = [
    {
      image: TestimonialImg01,
      name: "Grace Glen",
      user: "@gracexglen",
      link: "https://www.instagram.com/gracexglenn/",
      content:
        "Extremely thoughtful approaches to business. I highly recommend doll to anyone looking for a marketing agency."
    },
    {
      image: TestimonialImg02,
      name: "Cyber Juju",
      user: "@cyberjuju",
      link: "https://www.instagram.com/cyberjujuxo/",
      content:
        "Extremely thoughtful approaches to business. I highly recommend doll to anyone looking for a marketing agency."
    },
    {
      image: TestimonialImg03,
      name: "Maidi Bear",
      user: "@maidibear",
      link: "https://www.instagram.com/maidibear/",
      content:
      "Extremely thoughtful approaches to business. I highly recommend doll to anyone looking for a marketing agency."
    },
    {
      image: TestimonialImg04,
      name: "Alexus Sky",
      user: "@alexussky",
      link: "https://www.instagram.com/alexusxskyy/",
      content:
        "Extremely thoughtful approaches to business. I highly recommend doll to anyone looking for a marketing agency."
    }
  ]

  const testimonials02 = [
    {
      image: TestimonialImg05,
      name: "Trippi Bri",
      user: "@trippiexbri",
      link: "#0",
      content:
        "Extremely thoughtful approaches to business. I highly recommend doll to anyone looking for a marketing agency."
    },
    {
      image: TestimonialImg05,
      name: "Trippi Bri",
      user: "@trippiexbri",
      link: "https://www.instagram.com/trippie.bri/",
      content:
        "Extremely thoughtful approaches to business. I highly recommend doll to anyone looking for a marketing agency."
    },
    {
      image: TestimonialImg05,
      name: "Trippi Bri",
      user: "@trippiexbri",
      link: "https://www.instagram.com/trippie.bri/",
      content:
        "Extremely thoughtful approaches to business. I highly recommend doll to anyone looking for a marketing agency."
    },
    {
      image: TestimonialImg05,
      name: "Trippi Bri",
      user: "@trippiexbri",
      link: "https://www.instagram.com/trippie.bri/",
      content:
        "Extremely thoughtful approaches to business. I highly recommend doll to anyone looking for a marketing agency."
    }
  ]

  return (
    <section className="bg-zinc-800">
      <div className="py-12 md:py-20" data-aos="fade-down">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-200">
              Loved by thousands of creators from around the world
            </h2>
          </div>
        </div>
        <div className="max-w-[94rem] mx-auto space-y-6">
          {/* Row #1 */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_28%,_black_calc(100%-28%),transparent_100%)] group">
            <div className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll group-hover:[animation-play-state:paused]">
              {/* Items */}
              {testimonials01.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
            {/* Duplicated element for infinite scroll */}
            <div
              className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll group-hover:[animation-play-state:paused]"
              aria-hidden="true"
            >
              {/* Items */}
              {testimonials01.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
          </div>
          {/* Row #2 */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_28%,_black_calc(100%-28%),transparent_100%)] group">
            <div className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll-inverse group-hover:[animation-play-state:paused] [animation-delay:-7.5s]">
              {/* Items */}
              {testimonials02.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
            {/* Duplicated element for infinite scroll */}
            <div
              className="flex items-start justify-center md:justify-start [&>div]:mx-3 animate-infinite-scroll-inverse group-hover:[animation-play-state:paused] [animation-delay:-7.5s]"
              aria-hidden="true"
            >
              {/* Items */}
              {testimonials02.map((testimonial, index) => (
                <Testimonial key={index} testimonial={testimonial}>
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
