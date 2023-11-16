"use client"

import { useState, useRef, useEffect } from "react"
import { Transition } from "@headlessui/react"
import Image from "next/image"
import CarouselIllustration from "@/public/images/carousel-illustration-01.jpg"
import FeatureIllustration from "@/public/images/features-illustration.png"

export default function Features03() {
  const [tab, setTab] = useState(1)

  const tabs = useRef(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement)
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section className="relative bg-zinc-800 after:absolute after:top-0 after:right-0 after:h-full after:w-96 after:pointer-events-none after:bg-gradient-to-l after:from-zinc-800 max-lg:after:hidden">
      <div className="py-12 md:py-20" data-aos="fade-down">
        {/* Carousel */}
        <div className="max-w-xl lg:max-w-6xl mx-auto px-4 sm:px-6">
          <div className="lg:flex space-y-12 lg:space-y-0 lg:space-x-12 xl:space-x-24">
            {/* Content */}
            <div className="lg:max-w-none lg:min-w-[524px]">
              <div className="mb-8">
                <div className="inline-flex text-sm font-medium text-zinc-400 px-4 py-0.5 border border-transparent [background:linear-gradient(theme(colors.zinc.800),theme(colors.zinc.800))_padding-box,linear-gradient(120deg,theme(colors.zinc.700),theme(colors.zinc.700/0),theme(colors.zinc.700))_border-box] rounded-full mb-4">
                  Join the Right Team
                </div>
                <h3 className="font-inter-tight text-3xl font-bold text-zinc-200 mb-4">
                  Why Choose Us
                </h3>
                <p className="text-lg text-zinc-500">
                  Doll is the best, obviously
                </p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0 space-y-2">
                <button
                  className={`text-left flex items-center px-6 py-4 rounded border border-transparent ${
                    tab !== 1
                      ? ""
                      : "[background:linear-gradient(#2E2E32,#2E2E32)_padding-box,linear-gradient(120deg,theme(colors.zinc.700),theme(colors.zinc.700/0),theme(colors.zinc.700))_border-box]"
                  }`}
                  onClick={e => {
                    e.preventDefault()
                    setTab(1)
                  }}
                >
            
                  <div className="ml-3">
                    <div className="font-inter-tight text-lg font-semibold text-zinc-200 mb-1">
                     Expertise Matters
                    </div>
                    <div className="text-zinc-500">
                      Our team of seasoned digital marketers and social media strategists understands the ever-evolving landscape of social platforms. We stay ahead of trends to ensure your brand remains relevant and impactful.
                    </div>
                  </div>
                </button>
                <button
                  className={`text-left flex items-center px-6 py-4 rounded border border-transparent ${
                    tab !== 2
                      ? ""
                      : "[background:linear-gradient(#2E2E32,#2E2E32)_padding-box,linear-gradient(120deg,theme(colors.zinc.700),theme(colors.zinc.700/0),theme(colors.zinc.700))_border-box]"
                  }`}
                  onClick={e => {
                    e.preventDefault()
                    setTab(2)
                  }}
                >
                  {/* <svg
                    className="shrink-0 fill-zinc-400 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path d="m16.997 19.056-1.78-.912A13.91 13.91 0 0 0 16.75 11.8c0-2.206-.526-4.38-1.533-6.344l1.78-.912A15.91 15.91 0 0 1 18.75 11.8c0 2.524-.602 5.01-1.753 7.256Zm-3.616-1.701-1.77-.93A9.944 9.944 0 0 0 12.75 11.8c0-1.611-.39-3.199-1.14-4.625l1.771-.93c.9 1.714 1.37 3.62 1.369 5.555 0 1.935-.47 3.841-1.369 5.555Zm-3.626-1.693-1.75-.968c.49-.885.746-1.881.745-2.895a5.97 5.97 0 0 0-.745-2.893l1.75-.968a7.968 7.968 0 0 1 .995 3.861 7.97 7.97 0 0 1-.995 3.863Zm-3.673-1.65-1.664-1.11c.217-.325.333-.709.332-1.103 0-.392-.115-.776-.332-1.102L6.082 9.59c.437.655.67 1.425.668 2.21a3.981 3.981 0 0 1-.668 2.212Z" />
                  </svg> */}
                  <div className="ml-3">
                    <div className="font-inter-tight text-lg font-semibold text-zinc-200 mb-1">
                      Customized Strategies
                    </div>
                    <div className="text-zinc-500">
                      One-size-fits-all does&apos;nt cut it in digital marketing. We craft unique strategies for each client, aligning with your goals, target auidence, and industry to maximize your success
                    </div>
                  </div>
                </button>
                <button
                  className={`text-left flex items-center px-6 py-4 rounded border border-transparent ${
                    tab !== 3
                      ? ""
                      : "[background:linear-gradient(#2E2E32,#2E2E32)_padding-box,linear-gradient(120deg,theme(colors.zinc.700),theme(colors.zinc.700/0),theme(colors.zinc.700))_border-box]"
                  }`}
                  onClick={e => {
                    e.preventDefault()
                    setTab(3)
                  }}
                >
                  {/* <svg
                    className="shrink-0 fill-zinc-400 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path d="m11.293 5.293 1.414 1.414-8 8-1.414-1.414 8-8Zm7-1 1.414 1.414-8 8-1.414-1.414 8-8Zm0 6 1.414 1.414-8 8-1.414-1.414 8-8Z" />
                  </svg> */}
                  <div className="ml-3">
                    <div className="font-inter-tight text-lg font-semibold text-zinc-200 mb-1 ">
                      Data-Driven Approach

                    </div>
                    <div className="text-zinc-500">
                      We don't guess; we analyze. Our data-driven methodology ensures that every decision we make is backed by real insights, resulting in better ROI and growth.
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Tabs items */}
            <div className="relative lg:max-w-none">
              <div className="relative flex flex-col" ref={tabs}>
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 -translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-4"
                  beforeEnter={() => heightFix()}
                  unmount={false}
                >
                  <div>
                    <Image
                      className="lg:max-w-none mx-auto rounded-lg shadow-2xl"
                      src={CarouselIllustration}
                      width={800}
                      height={620}
                      alt="Carousel 01"
                    />
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 -translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-4"
                  beforeEnter={() => heightFix()}
                  unmount={false}
                >
                  <div>
                    <Image
                      className="lg:max-w-none mx-auto rounded-lg shadow-2xl"
                      src={CarouselIllustration}
                      width={800}
                      height={620}
                      alt="Carousel 02"
                    />
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterFrom="opacity-0 -translate-y-4"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-4"
                  beforeEnter={() => heightFix()}
                  unmount={false}
                >
                  <div>
                    <Image
                      className="lg:max-w-none mx-auto rounded-lg shadow-2xl"
                      src={CarouselIllustration}
                      width={800}
                      height={620}
                      alt="Carousel 03"
                    />
                  </div>
                </Transition>
              </div>
              {/* Gear illustration */}
              <Image
                className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/3 mix-blend-exclusion max-lg:w-32"
                src={FeatureIllustration}
                alt="Features 02 illustration"
                width={173}
                height={167}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>

        {/* Features blocks */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-24 lg:mt-32">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
            {/* Block #1 */}
            <div>
              <div className="flex items-center mb-1">
             
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#a1a1aa" className="w-5 h-5 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
</svg>

                <h3 className="font-inter-tight font-semibold text-zinc-200">
                  Social Media Management
                </h3>
              </div>
              <p className="text-sm text-zinc-500">
               Engage, delight and grow your auidence with our social media managaement system. We&apos;ll handle content creation, posting schedules, and community management to build a loyal following.
              </p>
            </div>
            {/* Block #2 */}
            <div>
              <div className="flex items-center mb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#a1a1aa" className="w-5 h-5 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
</svg>

                <h3 className="font-inter-tight font-semibold text-zinc-200">
                  Paid Advertising
                </h3>
              </div>
              <p className="text-sm text-zinc-500">
               Unlock the full potential of paid social media advertising. Our experts will create and optimize campagins to reach the right people at the right time, ensuring every ad dollar is well-spent.
              </p>
            </div>
            {/* Block #3 */}
            <div>
              <div className="flex items-center mb-1">
         
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#a1a1aa" className="w-5 h-5 mr-2">
  <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
</svg>


                <h3 className="font-inter-tight font-semibold text-zinc-200">
                  Content Creation
                </h3>
              </div>
              <p className="text-sm text-zinc-500">
                Compelling content is the cornerstone of any successful social media strategy. We create eye-catching visuals, videos, and copy that is sure to resonate with your audience
              </p>
            </div>
            {/* Block #4 */}
            <div>
              <div className="flex items-center mb-1">
           
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#a1a1aa" className="w-5 h-5 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
</svg>

                <h3 className="font-inter-tight font-semibold text-zinc-200">
                  Analytics and Reporting
                </h3>
              </div>
              <p className="text-sm text-zinc-500">
                Get a clear picture of all of your campaign&apos;s preformace with key metrics.
              </p>
            </div>
            {/* Block #5 */}
            <div>
              <div className="flex items-center mb-1">
         
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#a1a1aa" className="w-5 h-5 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
</svg>

                <h3 className="font-inter-tight font-semibold text-zinc-200">
                  Social Media Audits
                </h3>
              </div>
              <p className="text-sm text-zinc-500">
                We offer comprehensive social media audits to evaluate the current state of your social media presence. 
              </p>
            </div>
            {/* Block #6 */}
            <div>
              <div className="flex items-center mb-1">
            
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#a1a1aa" className="w-5 h-5 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
</svg>


                <h3 className="font-inter-tight font-semibold text-zinc-200">
                  Influencer Marketing
                </h3>
              </div>
              <p className="text-sm text-zinc-500">
               Leverage influencers to promote your products or services to a wider auidence. Identify suitable influencers, negotiate partnerships, and manage influencer campaigns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
