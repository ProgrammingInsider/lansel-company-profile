import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Banner = ({pageName, page, url}:{pageName:string, page:string, url:string}) => {
  return (
    <div className="relative w-full h-[50vh] flex flex-col items-center justify-center">
              <Image
                src="/images/hero/stationery.jpg"
                alt="Banner Image"
                fill
                className="w-full h-full object-cover"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-90 z-10"></div>
              {/* Content */}
              <div className="inset-0 flex flex-col items-center justify-center text-white text-center z-20">
                <div className="w-full flex flex-col justify-center">
                  <h1 className="headline text-center">{pageName}</h1>
                  <div className='uppercase flex items-center text-sm gap-3 mx-auto'>
                    <Link href="/" className="">
                        Home
                    </Link>
                    <IoIosArrowForward />
                    <Link href={url} className="">
                        <b>{page}</b>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Banner