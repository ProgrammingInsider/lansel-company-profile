import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='grid md:grid-cols-5 text-center md:text-left w-11/12 mx-auto max-w-6xl py-20 gap-5'>
      <div className='w-full h-[50vh] md:h-[65vh] col-span-3 flex flex-col gap-5 order-1 md:order-0'>
        <div className='w-full h-1/2 relative rounded-xl overflow-hidden'>
        <Image
          src="/images/common/spray_chemicals.jpg"
          alt="spray chemicals"
          fill
          className="absolute w-full h-full object-cover"
          priority
        />
        </div>
      <div className='flex h-1/2 gap-5'>
        <div className='w-1/2 h-full relative rounded-xl overflow-hidden'>
          <Image
            src="/images/common/stationery_two.jpg"
            alt="stationery"
            fill
            className="absolute w-full h-full object-cover"
            priority
          />
        </div>
        <div className='w-1/2 h-full relative rounded-xl overflow-hidden'>
          <Image
              src="/images/common/Soap_Detergent_and_Cosmotics_two.jpg"
              alt="Soap Detergent and Cosmotics"
              fill
              className="absolute w-full h-full object-cover"
              priority
            />
        </div>
      </div>
      </div>

      <div className='flex flex-col items-center md:items-left w-11/12 mx-auto md:mx-0 max-w-6xl col-span-2 md:order-1'>
          <h1 className='sectionName w-28 md:ml-5 md:self-start'>Our Story</h1>
          <h1 className='sectionHeader md:text-left md:self-start'>Lansel Trading</h1>
          <p className='para mb-6 text-sm sm:text-base leading-[26px]'>Lansel Trading PLC was established in 2022 by four accomplished women chemical engineers. Driven by a passion for solving challenges in the chemical industry, we identified a significant gap in the market and envisioned a company dedicated to Import- export, manufacturing and supplying essential materials for various businesses. With our strong backgrounds and dynamic energy, we are committed to delivering innovative solutions that meet the needs of our clients and contribute to the advancement of the industry.
          </p>
      </div>
    </div>
  )
}

export default AboutUs