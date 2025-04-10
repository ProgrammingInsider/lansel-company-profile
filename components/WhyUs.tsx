import Image from 'next/image'
import React from 'react'

const whyuslist = [
  {
    id: 1,
    title: "Customized Solutions",
    description: "Tailored packages for different industries, ensuring the right fit for your business.",
  },
  {
    id: 2,
    title: "Integrated Supply Chain",
    description: "A one-stop solution for office supplies and chemical distribution.",
  },
  {
    id: 3,
    title: "Cost Efficiency",
    description: "Competitive bulk pricing with long-term supply contracts and favorable terms.",
  },
  {
    id: 4,
    title: "Uncompromising Quality",
    description: "We adhere to strict quality standards, ensuring reliable and high-grade products.",
  }
]

const WhyUs = () => {
  return (
    <div className='grid md:grid-cols-5 text-center md:text-left w-11/12 mx-auto md:max-w-6xl py-20 gap-5'>
       <div className='flex flex-col items-center md:items-end text-center md:text-left w-11/12 mx-auto max-w-6xl col-span-3 md:order-1'>
          <h1 className='sectionName mx-w-80 w-11/12 text-wrap md:text-nowrap md:mr-5'>Why Choose Lansel Trading?</h1>
          <h1 className='sectionHeader mb-10 md:text-right'>Cornerstones of Our Business</h1>
          <div>
            <div className='flex flex-col items-center gap-5'>
              {
                whyuslist.map((item) => (
                  <div key={item.id} className='grid grid-cols-5 justify-items-center items-center p-3 rounded-xl sectionBg w-full gap-2'>
                    <div className='col-span-1 flex justify-center items-center w-full mx-auto'>
                      <h1 className='primaryBg text-white font-bold text-3xl md:text-6xl p-5 pt-7 rounded-full flex justify-center items-center w-12 h-12 md:w-16 md:h-16'>{item.id}</h1>
                    </div>
                    <div className='col-span-4 text-center w-full'>
                      <h3 className='text-2xl primaryText text-center sm:text-left'>{item.title}</h3>
                      <p className='text-base text-center sm:text-left'>{item.description}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
      </div>

      <div className='w-full h-full col-span-2 flex flex-col gap-5 order-1 md:order-0'>
        <div className='w-full h-full relative rounded-xl overflow-hidden'>
        <Image
          src="/images/common/stationery_one.jpg"
          alt="spray chemicals"
          fill
          className="absolute w-full h-full object-cover"
          priority
        />
        </div>
      </div>
    </div>
  )
}

export default WhyUs