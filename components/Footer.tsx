import Link from 'next/link'
import { FaLinkedinIn } from "react-icons/fa";
// import { FaTelegramPlane } from "react-icons/fa";
import { PiWhatsappLogoBold } from "react-icons/pi";

const Footer = () => {
  return (
    <div className='footerText upperFooterBg'>
      <div className='flex flex-col justify-between gap-20 py-32 md:flex-row w-11/12 mx-auto'>
        <div className='w-11/12 max-w-xl'>
          <h1 className='footerHeading text-2xl mb-6'>Company Overview</h1>
          <p className='text-sm sm:text-base leading-[24px] md:leading-[26px]'>
          Lansel Trading is a reputable company established in Ethiopia, dedicated to delivering high-quality office materials and supplies to businesses and organizations across the country. With a strong commitment to excellence, we provide a wide range of premium office products designed to enhance productivity and efficiency in the workplace.  In addition to office supplies, Lansel Trading specializes in the importation and distribution of high-grade chemicals tailored to meet the needs of various industries. We serve numerous organizations by supplying reliable and essential chemical products that support their operations.
          </p>
        </div>

        <div className='w-11/12 md:w-96'>
          <h1 className='footerHeading text-2xl mb-6'>Our Services</h1>

          <div className='flex flex-col gap-2 text-lg md:text-base'>
            <Link href={"/ourservices"}>Chemical Distribution</Link>
            <Link href={"/ourservices"}>Office Material & Equipment Distribution</Link>
          </div>

        </div>
        <div >
          <h1 className='footerHeading text-2xl mb-6'>Get In Touch</h1>
          <p className='mb-3'><b className='text-white'>Location: </b>Ethiopia, Addis Ababa, 
          Megenagna 24</p>
          <p className='mb-3'><b className='text-white'>Phone: </b>+251943074133</p>
          <p><b className='text-white'>Mail Us: </b>lanseltrading@gmail.com
          </p>
        </div>
      </div>
      <div className='bottomFooterBg h-20 text-white flex justify-between items-center px-5 gap-5'>
        <span className='text-base md:text-lg'>© 2025 Lansel Trading PLC. All Rights Reserved.</span>
        <div className="flex justify-center items-center rounded-full gap-2">
          <Link href="https://www.linkedin.com/company/lansel-trading/" target="_blank" className='w-8 h-8 flex justify-center items-center primaryBg rounded-full p-2'>
          <FaLinkedinIn  className="text-xl text-white" />
          </Link>
          {/* <Link href={"#"} className='w-8 h-8 flex justify-center items-center primaryBg rounded-full p-2'>
          <FaTelegramPlane className="text-xl text-white" />
          </Link> */}
          <Link href="https://wa.me/251943074133" target="_blank" className='w-8 h-8 flex justify-center items-center primaryBg rounded-full p-2'>
          <PiWhatsappLogoBold className="text-xl text-white " />
          </Link>
        </div>
</div>
    </div>
  )
}

export default Footer