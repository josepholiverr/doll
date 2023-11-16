import Link from "next/link"
import Image from "next/image"
import Logo from "@/public/images/logo-02.png"

export default function Features02() {
  return (
    <section>
      <div className="py-12 md:py-20" data-aos="fade-down">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-xl shadow-md mb-8 relative before:absolute before:-top-12 before:w-52 before:h-52 before:bg-zinc-900 before:opacity-[.08] before:rounded-full before:blur-3xl before:-z-10">
              <Link href="/">
                <Image src={Logo} width={60} height={60} alt="Logo" />
              </Link>
            </div>
            <h2 className="font-inter-tight text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
              Start your journey{" "}
              <em className="relative not-italic inline-flex justify-center items-end">
                today
                <svg
                  className="absolute fill-zinc-300 w-[calc(100%+1rem)] -z-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="10"
                  viewBox="0 0 120 10"
                  aria-hidden="true"
                  preserveAspectRatio="none"
                >
                  <path d="M118.273 6.09C79.243 4.558 40.297 5.459 1.305 9.034c-1.507.13-1.742-1.521-.199-1.81C39.81-.228 79.647-1.568 118.443 4.2c1.63.233 1.377 1.943-.17 1.89Z" />
                </svg>
              </em>
            </h2>
            <p className="text-lg text-zinc-500 mb-8">
              Doll NEEDS A MIDG, PLEASE HIT US UP IF YOU ARE MIDGET THANK YOU!
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:inline-flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div>
                <a
                  className="btn text-zinc-100 bg-zinc-900 hover:bg-zinc-800 w-full shadow"
                  href="/request-demo"
                >
                  Contact Us
                </a>
              </div>

            </div>
          </div>
          {/* Media Platforms */}
          <div className="text-center">
            <ul className="inline-flex flex-wrap items-center justify-center -m-2 [mask-image:linear-gradient(to_right,transparent_8px,_theme(colors.white/70)_64px,_theme(colors.white)_50%,_theme(colors.white/70)_calc(100%-64px),_transparent_calc(100%-8px))]">
              <li className="m-2 p-4 relative rounded-lg border border-transparent [background:linear-gradient(theme(colors.zinc.50),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box]">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" className="fill-zinc-400" width="40" height="40" aria-label="Reddit">
                  <circle cx="400" cy="400" r="400" />
                  <path d="M666.8 400c.08 5.48-.6 10.95-2.04 16.24s-3.62 10.36-6.48 15.04c-2.85 4.68-6.35 8.94-10.39 12.65s-8.58 6.83-13.49 9.27c.11 1.46.2 2.93.25 4.4a107.268 107.268 0 0 1 0 8.8c-.05 1.47-.14 2.94-.25 4.4 0 89.6-104.4 162.4-233.2 162.4S168 560.4 168 470.8c-.11-1.46-.2-2.93-.25-4.4a107.268 107.268 0 0 1 0-8.8c.05-1.47.14-2.94.25-4.4a58.438 58.438 0 0 1-31.85-37.28 58.41 58.41 0 0 1 7.8-48.42 58.354 58.354 0 0 1 41.93-25.4 58.4 58.4 0 0 1 46.52 15.5 286.795 286.795 0 0 1 35.89-20.71c12.45-6.02 25.32-11.14 38.51-15.3s26.67-7.35 40.32-9.56 27.45-3.42 41.28-3.63L418 169.6c.33-1.61.98-3.13 1.91-4.49.92-1.35 2.11-2.51 3.48-3.4 1.38-.89 2.92-1.5 4.54-1.8 1.61-.29 3.27-.26 4.87.09l98 19.6c9.89-16.99 30.65-24.27 48.98-17.19s28.81 26.43 24.71 45.65c-4.09 19.22-21.55 32.62-41.17 31.61-19.63-1.01-35.62-16.13-37.72-35.67L440 186l-26 124.8c13.66.29 27.29 1.57 40.77 3.82a284.358 284.358 0 0 1 77.8 24.86A284.412 284.412 0 0 1 568 360a58.345 58.345 0 0 1 29.4-15.21 58.361 58.361 0 0 1 32.95 3.21 58.384 58.384 0 0 1 25.91 20.61A58.384 58.384 0 0 1 666.8 400zm-396.96 55.31c2.02 4.85 4.96 9.26 8.68 12.97 3.71 3.72 8.12 6.66 12.97 8.68A40.049 40.049 0 0 0 306.8 480c16.18 0 30.76-9.75 36.96-24.69 6.19-14.95 2.76-32.15-8.68-43.59s-28.64-14.87-43.59-8.68c-14.94 6.2-24.69 20.78-24.69 36.96 0 5.25 1.03 10.45 3.04 15.31zm229.1 96.02c2.05-2 3.22-4.73 3.26-7.59.04-2.87-1.07-5.63-3.07-7.68s-4.73-3.22-7.59-3.26c-2.87-.04-5.63 1.07-7.94 2.8a131.06 131.06 0 0 1-19.04 11.35 131.53 131.53 0 0 1-20.68 7.99c-7.1 2.07-14.37 3.54-21.72 4.39-7.36.85-14.77 1.07-22.16.67-7.38.33-14.78.03-22.11-.89a129.01 129.01 0 0 1-21.64-4.6c-7.08-2.14-13.95-4.88-20.56-8.18s-12.93-7.16-18.89-11.53c-2.07-1.7-4.7-2.57-7.38-2.44s-5.21 1.26-7.11 3.15c-1.89 1.9-3.02 4.43-3.15 7.11s.74 5.31 2.44 7.38c7.03 5.3 14.5 9.98 22.33 14s16 7.35 24.4 9.97 17.01 4.51 25.74 5.66c8.73 1.14 17.54 1.53 26.33 1.17 8.79.36 17.6-.03 26.33-1.17A153.961 153.961 0 0 0 476.87 564c7.83-4.02 15.3-8.7 22.33-14zm-7.34-68.13c5.42.06 10.8-.99 15.81-3.07 5.01-2.09 9.54-5.17 13.32-9.06s6.72-8.51 8.66-13.58A39.882 39.882 0 0 0 532 441.6c0-16.18-9.75-30.76-24.69-36.96-14.95-6.19-32.15-2.76-43.59 8.68s-14.87 28.64-8.68 43.59c6.2 14.94 20.78 24.69 36.96 24.69z" fill="#fff" />
                </svg>
              </li>
              <li className="m-2 p-4 relative rounded-lg border border-transparent [background:linear-gradient(theme(colors.zinc.50),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box]">

                <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40" className="fill-zinc-400" viewBox="0 0 461.001 461.001" aria-label="YouTube" >
                  <path d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728   c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137   C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607   c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z" />
                </svg>
              </li>
              <li className="m-2 p-4 relative rounded-lg border border-transparent [background:linear-gradient(theme(colors.zinc.50),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box]">

                <svg xmlns="http://www.w3.org/2000/svg" className="fill-zinc-400" version="1.1" id="svg5" x="0px" y="0px" height="40" width="40" viewBox="0 0 1668.56 1221.19" aria-label="Twitter">
                  <g id="layer1" transform="translate(52.390088,-25.058597)">
                    <path id="path1009" d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99   h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z" />
                  </g>
                </svg>
              </li>
              <li className="m-2 p-4 relative rounded-lg border border-transparent [background:linear-gradient(theme(colors.zinc.50),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box]">

                <svg xmlns="http://www.w3.org/2000/svg" className="fill-zinc-400" width="40" height="40" viewBox="0 0 32 32" id="Camada_1" version="1.1" >



                  <path fill="#fff" d="M6,2h20c2.2,0,4,1.8,4,4v20c0,2.2-1.8,4-4,4H6c-2.2,0-4-1.8-4-4V6C2,3.8,3.8,2,6,2z" />

                  <g>

                    <path class="st0" d="M21.3,9.7c-0.6,0-1.2,0.5-1.2,1.2c0,0.7,0.5,1.2,1.2,1.2c0.7,0,1.2-0.5,1.2-1.2C22.4,10.2,21.9,9.7,21.3,9.7z" />

                    <path class="st0" d="M16,11.2c-2.7,0-4.9,2.2-4.9,4.9c0,2.7,2.2,4.9,4.9,4.9s4.9-2.2,4.9-4.9C21,13.4,18.8,11.2,16,11.2z M16,19.3   c-1.7,0-3.2-1.4-3.2-3.2c0-1.7,1.4-3.2,3.2-3.2c1.7,0,3.2,1.4,3.2,3.2C19.2,17.9,17.8,19.3,16,19.3z" />

                    <path class="st0" d="M20,6h-8c-3.3,0-6,2.7-6,6v8c0,3.3,2.7,6,6,6h8c3.3,0,6-2.7,6-6v-8C26,8.7,23.3,6,20,6z M24.1,20   c0,2.3-1.9,4.1-4.1,4.1h-8c-2.3,0-4.1-1.9-4.1-4.1v-8c0-2.3,1.9-4.1,4.1-4.1h8c2.3,0,4.1,1.9,4.1,4.1V20z" />

                  </g>

                </svg>
              </li>
              <li className="m-2 p-4 relative rounded-lg border border-transparent [background:linear-gradient(theme(colors.zinc.50),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box]">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  className="fill-zinc-400"
                  clipRule="evenodd"
                  width="40"
                  height="40"
                  viewBox="0 0 449.45 515.38"
                >
                  <path
                    fillRule="nonzero"
                    d="M382.31 103.3c-27.76-18.1-47.79-47.07-54.04-80.82-1.35-7.29-2.1-14.8-2.1-22.48h-88.6l-.15 355.09c-1.48 39.77-34.21 71.68-74.33 71.68-12.47 0-24.21-3.11-34.55-8.56-23.71-12.47-39.94-37.32-39.94-65.91 0-41.07 33.42-74.49 74.48-74.49 7.67 0 15.02 1.27 21.97 3.44V190.8c-7.2-.99-14.51-1.59-21.97-1.59C73.16 189.21 0 262.36 0 352.3c0 55.17 27.56 104 69.63 133.52 26.48 18.61 58.71 29.56 93.46 29.56 89.93 0 163.08-73.16 163.08-163.08V172.23c34.75 24.94 77.33 39.64 123.28 39.64v-88.61c-24.75 0-47.8-7.35-67.14-19.96z"
                  />
                </svg>

              </li>
              <li className="m-2 p-4 relative rounded-lg border border-transparent [background:linear-gradient(theme(colors.zinc.50),theme(colors.zinc.50))_padding-box,linear-gradient(120deg,theme(colors.zinc.300),theme(colors.zinc.100),theme(colors.zinc.300))_border-box]">

                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" width="40"
                  height="40" x="0px" y="0px" viewBox="0 0 40 40" className="fill-zinc-400"                  >


                  <path class="st0" d="M16.7,39.8C7.2,38.1,0,29.9,0,20C0,9,9,0,20,0s20,9,20,20c0,9.9-7.2,18.1-16.7,19.8l-1.1-0.9h-4.4L16.7,39.8z" />
                  <path class="st1" fill="#fff" d="M27.8,25.6l0.9-5.6h-5.3v-3.9c0-1.6,0.6-2.8,3-2.8h2.6V8.2c-1.4-0.2-3-0.4-4.4-0.4c-4.6,0-7.8,2.8-7.8,7.8V20  h-5v5.6h5v14.1c1.1,0.2,2.2,0.3,3.3,0.3c1.1,0,2.2-0.1,3.3-0.3V25.6H27.8z" />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
