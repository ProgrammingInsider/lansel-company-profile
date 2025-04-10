import Image from 'next/image'
import React from 'react'
import { LuTarget } from "react-icons/lu";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const OurBusiness = () => {
  return (
    <div className='sectionBg min-h-screen py-20 px-1 w-full mx-auto'>
        <h1 className='sectionName w-40 mx-auto'>Our Business</h1>
        <h1 className='sectionHeader text-center'>Stand Out From The Rest</h1>
        <div className='grid gap-8 md:grid-cols-3 md:gap-1 mx-auto max-w-6xl mt-10'>
            <div className='col-span-1 w-11/12 mx-auto flex flex-col gap-8'>
                <div className='w-full h-64 md:h-auto overflow-hidden rounded-xl'>
                    <Image src={"/images/common/Soap_Detergent_and_Cosmotics_one.jpg"} alt='Soap Detergent and Cosmotics' width={200} height={200} className='object-cover w-full' />
                </div>
                <div className='col-span-1 flex flex-col justify-start items-center background text-center p-4 min-h-96 md:h-auto rounded-xl mx-auto'>
                    <LuTarget className='primaryText text-7xl mb-6' />
                    <h1 className='secondaryText text-3xl font-semibold leading-[30px] mb-3'>Our Mission</h1>
                    <p className='para text-sm sm:text-base leading-[24px]'>Our mission is to provide premium chemicals and essential office supplies, along with innovative solutions that support organizations and industries worldwide. We are dedicated to quality, sustainability, and customer satisfaction, aiming to be your trusted source for all chemical and office supply needs.</p>
                </div>
            </div>

            <div className='col-span-1 flex flex-col justify-start items-center background text-center p-4 min-h-96 md:h-auto rounded-xl w-11/12 mx-auto'>
                    <IoDiamondOutline  className='primaryText text-7xl mb-6' />
                    <h1 className='secondaryText text-3xl font-semibold leading-[30px] mb-3'>Our Core Values</h1>
                    <p className='para text-sm sm:text-base leading-[24px]'>At Lansel Trading, our values are the foundation of everything we do, guiding our actions and decisions to achieve excellence and drive success.</p>
                    <ul typeof='circle' className='para text-left w-full text-base flex flex-col gap-2 mt-6'>
                        <li>Commitments </li>
                        <li>Excellence </li>
                        <li>Productivity </li>
                        <li>Quality </li>
                        <li>Social Responsibility </li>
                    </ul>
            </div>

            <div className='col-span-1 w-11/12 mx-auto flex flex-col gap-8'>
                <div className='col-span-1 flex flex-col justify-start items-center background text-center p-4 min-h-96 md:h-auto rounded-xl w-full mx-auto'>
                    <div>
                        <MdOutlineRemoveRedEye  className='primaryText text-7xl mb-6' />
                    </div>
                    <h1 className='secondaryText text-3xl font-semibold leading-[30px] mb-3'>Our Vision</h1>
                    <p className='para text-sm sm:text-base leading-[24px]'>Our vision is to be a leading force in Ethiopia’s manufacturing sector, committed to pioneering innovative solutions that address societal challenges and bridge industrial gaps. Through excellence and sustainability we strive to drive economic growth and create lasting positive impact.</p>
                </div>
                <div className='w-full h-64 md:h-auto overflow-hidden rounded-xl'>
                    <Image src={"/images/common/Pesticides.jpg"} alt='Pesticides' width={200} height={200} className='object-fill w-full' />
                </div>
            </div>
        </div>
    </div>
)
}

export default OurBusiness