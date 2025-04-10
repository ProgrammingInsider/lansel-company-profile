'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';

const heroContent = [
  {
    image: "/images/hero/location.jpg",
    heading: "Reliable Supply, Unmatched Quality",
    para: "From industrial chemicals to office essentials, we deliver the products that keep your business running smoothly.",
    href: "/contactus",
    linkText: "Get in Touch",
  },
  {
    image: "/images/hero/agro-chemicals.jpg",
    heading: "High-Grade Chemicals for Every Industry",
    para: "Supplying top-quality chemicals for manufacturing, agriculture, food processing, and more.",
    href: "/ourservices",
    linkText: "Our Services",
  },
  {
    image: "/images/hero/office.jpg",
    heading: "Your One-Stop Office Supply Partner",
    para: "From stationery to IT equipment, we provide everything your workplace needs to stay productive.",
    href: "/ourservices",
    linkText: "Our Services",
  },
  // {
  //   image: "/images/hero/hero_one2.jpg",
  //   heading: "Smart Sourcing, Maximum Savings",
  //   para: "Competitive pricing, bulk supply options, and seamless inventory management for cost-effective procurement.",
  //   href: "/aboutus",
  //   linkText: "About Us",
  // },
  // {
  //   image: "/images/hero/hero_one2.jpg",
  //   heading: "Excellence You Can Trust",
  //   para: "We adhere to strict quality standards, ensuring reliability in every product and service we provide",
  //   href: "/contactus",
  //   linkText: "Contact Us",
  // }
];

const Hero = () => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        loop
        className="hero-slider"
      >
        {heroContent.map((content, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full min-h-[50vh] lg:h-screen flex flex-col items-center justify-center">
              <Image
                src={content.image}
                alt={`Hero Slide ${index + 1}`}
                fill
                className="w-full h-full object-cover"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
              {/* Content */}
              <div className="absolute lg:translate-y-16 inset-0 flex flex-col md:items-start justify-center text-white text-center z-20 w-4/5 max-w-5xl lg:max-w-7xl mx-auto">
                <div className="w-4/5 lg:w-3/5 flex flex-col justify-center">
                  <h1 className="headline">{content.heading}</h1>
                  <p className="sub-headline w-4/5">{content.para}</p>
                  <Link href={content.href} className="btn mt-3">
                    {content.linkText}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrows OUTSIDE the Swiper */}
      <div className="custom-swiper-button-prev swiper-nav-button">‹</div>
      <div className="custom-swiper-button-next swiper-nav-button">›</div>
    </div>
  );
};

export default Hero;
