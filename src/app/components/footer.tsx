import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <Link href={'/'}>
    <Image src={'/urgutt.png'} alt={'logo'} width={70} height={70} />
    </Link>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Urgut —
        <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@dilshodhaydarov</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg fill="blue" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill=" red blue" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>

        <a href="https://t.me/Devilopmen" className="ml-3 text-gray-500 cursor-pointer">
  <svg
    fill="blue"
    stroke="blue"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="0"
    className="w-5 h-5"
    viewBox="0 0 24 24"
  >
    <path d="M22.1 2.24a.987.987 0 0 0-1.02-.05c-.12.06-12.04 5.09-18.34 7.77a1.008 1.008 0 0 0 .05 1.88l4.93 1.64 2.01 6.89a.997.997 0 0 0 1.8.21l3.09-4.35 4.66 3.41c.31.23.73.28 1.09.12a1.004 1.004 0 0 0 .57-.75l3.58-16.43c.08-.37-.08-.76-.39-.98zM9.75 15.26l-.93-3.18 7.64-4.77-5.89 5.86c-.15.15-.23.35-.23.56l-.59 3.53z"></path>
  </svg>
</a>

<a href="https://t.me/Devilopmen" className="ml-3 text-gray-500 cursor-pointer">
  <svg
    fill="red"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path d="M19.635 3.065A3.07 3.07 0 0 0 17.509 2C15.353 2 12 2 12 2s-3.354 0-5.51.065A3.07 3.07 0 0 0 4.365 3.065C3.343 4.064 3.01 6.13 3.01 6.13s-.354 2.933-.354 5.87v1.998c0 2.937.354 5.87.354 5.87s.333 2.066 1.355 3.065a3.07 3.07 0 0 0 2.126 1.065C8.646 22 12 22 12 22s3.354 0 5.509-.065a3.07 3.07 0 0 0 2.126-1.065c1.022-1 1.355-3.065 1.355-3.065s.354-2.933.354-5.87v-1.998c0-2.937-.354-5.87-.354-5.87s-.333-2.066-1.355-3.065zM10 15.542V8.457L15.545 12 10 15.542z"></path>
  </svg>
</a>


        <a href="" className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </footer>
  )
}

export default Footer
