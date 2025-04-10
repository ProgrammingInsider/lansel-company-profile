'use client'

import Link from 'next/link'
import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import Products from './Products'

const chemicalProducts = [
  {
    title: 'laboratory grade chemicals',
    image: '/images/products/laboratory_grade_chemicals.jpg',
  },
  {
    title: 'food additives chemicals',
    image: '/images/products/food_additives_chemicals.jpg',
  },
  {
    title: 'plant growth chemicals',
    image: '/images/products/plant_growth_chemicals.jpg',
  },
  {
    title: 'laboratory grade chemicals',
    image: '/images/products/laboratory_grade_chemicals.jpg',
  },
  {
    title: 'food additives chemicals',
    image: '/images/products/food_additives_chemicals.jpg',
  },
  {
    title: 'plant growth chemicals',
    image: '/images/products/plant_growth_chemicals.jpg',
  },
]

const officeProducts = [
  {
    title: 'office stationery suppliers',
    image: '/images/products/office_supplies_wholesale.jpg',
  },
  {
    title: 'janitorial products wholesale',
    image: '/images/products/janitorial_products_wholesale.jpg',
  },
  {
    title: 'auto parts suppliers',
    image: '/images/products/auto_parts_suppliers.jpg',
  },
  {
    title: 'office stationery suppliers',
    image: '/images/products/office_supplies_wholesale.jpg',
  },
  {
    title: 'janitorial products wholesale',
    image: '/images/products/janitorial_products_wholesale.jpg',
  },
  {
    title: 'auto parts suppliers',
    image: '/images/products/auto_parts_suppliers.jpg',
  },
]

const HomeServices = () => {
  return (
    <div className='sectionBg w-full'>
      <div className='text-center w-11/12 mx-auto max-w-6xl py-20'>
        <h1 className='sectionName w-36 mx-auto'>Our Services</h1>
        <h1 className='sectionHeader mb-16'>Reliable Solutions for Your Business</h1>

        {/* ========== Chemical Distribution Section ========== */}
        <div className='flex flex-col gap-5 mb-16'>
          <div className='flex flex-col lg:grid lg:grid-cols-[220px_1fr] gap-5'>

            {/* Left Card */}
            <div className='primaryBg flex flex-col justify-center items-center p-5 w-full rounded-xl order-1 md:order-0'>
              <h4 className='text-white text-2xl font-bold'>Chemical Distribution</h4>
              <Link
                href={'/ourservices'}
                className='mx-auto btn text-black font-bold flex items-center text-nowrap group'
              >
                See More&nbsp;
                <span className='transition-transform duration-300 group-hover:translate-x-1'>
                  <MdOutlineArrowOutward />
                </span>
              </Link>
            </div>

            {/* Swiper on Small Screens */}
            <div className='w-full relative block lg:hidden'>
              <div className='swiper-button-prev-chemical absolute top-1/2 -left-2 z-10 transform -translate-y-1/2 cursor-pointer primaryBg text-white font-bold p-1 rounded-full shadow'>
                <HiChevronLeft size={24} />
              </div>
              <div className='swiper-button-next-chemical absolute top-1/2 -right-2 z-10 transform -translate-y-1/2 cursor-pointer primaryBg text-white font-bold p-1 rounded-full shadow'>
                <HiChevronRight size={24} />
              </div>

              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: '.swiper-button-next-chemical',
                  prevEl: '.swiper-button-prev-chemical',
                }}
                spaceBetween={20}
                loop
                breakpoints={{
                  0: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                }}
              >
                {chemicalProducts.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Products title={item.title} image={item.image} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Grid on Large Screens */}
            <div className='w-full hidden lg:grid grid-cols-3 gap-5 order-0 md:order-1'>
              {chemicalProducts.slice(0, 3).map((item, index) => (
                <Products key={index} title={item.title} image={item.image} />
              ))}
            </div>
          </div>
        </div>

        {/* ========== Office Distribution Section ========== */}
        
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col lg:flex-row-reverse lg:grid lg:grid-cols-[220px_1fr] gap-5'>

            <div className='w-full relative block lg:hidden'>
              <div className='swiper-button-prev-office absolute top-1/2 -left-2 z-10 transform -translate-y-1/2 cursor-pointer primaryBg text-white font-bold p-1 rounded-full shadow'>
                <HiChevronLeft size={24} />
              </div>
              <div className='swiper-button-next-office absolute top-1/2 -right-2 z-10 transform -translate-y-1/2 cursor-pointer primaryBg text-white font-bold p-1 rounded-full shadow'>
                <HiChevronRight size={24} />
              </div>

              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: '.swiper-button-next-office',
                  prevEl: '.swiper-button-prev-office',
                }}
                spaceBetween={20}
                loop
                breakpoints={{
                  0: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                }}
              >
                {officeProducts.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Products title={item.title} image={item.image} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className='primaryBg flex flex-col justify-center items-center p-5 w-full rounded-xl'>
              <h4 className='text-white text-2xl font-bold'>Office Material & Equipment Distribution</h4>
              <Link
                href={'/ourservices'}
                className='mx-auto btn text-black font-bold flex items-center text-nowrap group'
              >
                See More&nbsp;
                <span className='transition-transform duration-300 group-hover:translate-x-1'>
                  <MdOutlineArrowOutward />
                </span>
              </Link>

            </div>

            <div className='w-full hidden lg:grid grid-cols-3 gap-5 order-0 md:order-1'>
              {officeProducts.slice(0, 3).map((item, index) => (
                <Products key={index} title={item.title} image={item.image} />
              ))}
            </div>

            
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default HomeServices
