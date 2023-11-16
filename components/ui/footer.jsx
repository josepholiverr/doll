import Link from "next/link"
import Image from "next/image"
import Logo from "@/public/images/logo.png"

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-zinc-200">
          {/* 1st block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-6 max-sm:order-1 flex flex-col">
            <div className="mb-4">
              {/* Logo */}
              <Link
                className="flex items-center justify-center bg-white w-8 h-8 rounded shadow-sm shadow-zinc-950/20"
                href="/"
              >
                <Image src={Logo} width={24} height={24} alt="Logo" />
              </Link>
            </div>
            <div className="grow text-sm text-zinc-500">
              &copy; Doll.com. All rights reserved.
            </div>
            {/* Social links */}
            <ul className="flex space-x-4 mt-4 mb-1">
              <li>
                <a
                  className="flex justify-center items-center text-zinc-700 hover:text-zinc-900 transition"
                  href="#0"
                  aria-label="Twitter"
                >
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                  >
                    <path d="m7.063 3 3.495 4.475L14.601 3h2.454l-5.359 5.931L18 17h-4.938l-3.866-4.893L4.771 17H2.316l5.735-6.342L2 3h5.063Zm-.74 1.347H4.866l8.875 11.232h1.36L6.323 4.347Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="flex justify-center items-center text-zinc-700 hover:text-zinc-900 transition"
                  href="#0"
                  aria-label="Instagram"
                >
                                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
<path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
</svg>
                </a>
              </li>
              <li>
                <a
                  className="flex justify-center items-center text-zinc-700 hover:text-zinc-900 transition"
                  href="#0"
                  aria-label="Telegram"
                >
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                  >
                    <path d="M17.968 3.276a.338.338 0 0 0-.232-.253 1.192 1.192 0 0 0-.63.045S3.087 8.106 2.286 8.664c-.172.121-.23.19-.259.272-.138.4.293.573.293.573l3.613 1.177a.388.388 0 0 0 .183-.011c.822-.519 8.27-5.222 8.7-5.38.068-.02.118 0 .1.049-.172.6-6.606 6.319-6.64 6.354a.138.138 0 0 0-.05.118l-.337 3.528s-.142 1.1.956 0a30.66 30.66 0 0 1 1.9-1.738c1.242.858 2.58 1.806 3.156 2.3a1 1 0 0 0 .732.283.825.825 0 0 0 .7-.622S17.894 5.292 17.98 3.909c.008-.135.021-.217.021-.317a1.177 1.177 0 0 0-.032-.316Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* 2nd block */}
          {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-zinc-800 font-medium mb-2">Company</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-zinc-500 hover:text-zinc-900 transition"
                  href="#0"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className="text-zinc-500 hover:text-zinc-900 transition"
                  href="#0"
                >
                  Diversity & Inclusion
                </a>
              </li>
              <li>
                <a
                  className="text-zinc-500 hover:text-zinc-900 transition"
                  href="#0"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="text-zinc-500 hover:text-zinc-900 transition"
                  href="#0"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="text-zinc-500 hover:text-zinc-900 transition"
                  href="#0"
                >
                  Financial statements
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-zinc-800 font-medium mb-2">
              Resources
            </h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-zinc-500 hover:text-zinc-900 transition"
                  href="#0"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  className="text-zinc-500 hover:text-zinc-900 transition"
                  href="#0"
                >
                  Terms of service
                </a>
              </li>
              <li>
                <a
                  className="text-zinc-500 hover:text-zinc-900 transition"
                  href="#0"
                >
                  Collaboration features
                </a>
              </li>
            </ul>
          </div> */}

          {/* 4th block */}
          {/* <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-sm text-zinc-800 font-medium mb-2">Legals</h6>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  className="text-zinc-500 hover:text-zinc-900 transition"
                  href="#0"
                >
                  Refund policy
                </a>
              </li>
              <li>
                <a
                  className="text-zinc-500 hover:text-zinc-900 transition"
                  href="#0"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  className="text-zinc-500 hover:text-zinc-900 transition"
                  href="#0"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  className="text-zinc-500 hover:text-zinc-900 transition"
                  href="#0"
                >
                  Brand Kit
                </a>
              </li>
            </ul>
          </div>  */}
        </div>
      </div>
    </footer>
  )
}
