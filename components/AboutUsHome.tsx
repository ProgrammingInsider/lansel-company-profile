import Link from 'next/link'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='w-full'>
      <div className='text-center w-11/12 mx-auto max-w-6xl py-20'>
          <h1 className='sectionName w-28 mx-auto'>About Us</h1>
          <h1 className='sectionHeader'>Lansel Trading</h1>
          <p className='para mb-6 text-sm sm:text-base leading-[26px] max-w-5xl w-11/12 mx-auto'>Lansel Trading is a reputable company established in Ethiopia, dedicated to delivering high-quality office materials and supplies to
          businesses and organizations across the country. With a strong commitment to excellence, we provide a wide range of premiumoffice products designed to enhance productivity and efficiency in the workplace. In addition to office supplies, Lansel Trading specializes in the importation and distribution of high-grade chemicals tailored to meet the needs of various industries. We serve numerous organizations by supplying reliable and essential chemical products that support their operations.
          </p>
          <Link href={"/aboutus"} className={`mx-auto btn mt-10 text-white`}>Learn More</Link>
      </div>
    </div>
  )
}

export default AboutUs