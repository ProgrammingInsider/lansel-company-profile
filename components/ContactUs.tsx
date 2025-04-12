"use client"

import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
// import { FaTelegramPlane } from "react-icons/fa";
import { PiWhatsappLogoBold } from "react-icons/pi";
import { IoLocation } from "react-icons/io5";
import SocialMedia from "./SocialMedia";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const socialLinks = [
  {
    name: "Linkedin",
    icon: <FaLinkedinIn className="text-xl text-white" />,
    link: "https://www.linkedin.com/company/lansel-trading/"
  },
  // {
  //   name: "Telegram",
  //   icon: <FaTelegramPlane className="text-xl text-white" />,
  //   link: "#"
  // },
  {
    name: "WhatsApp",
    icon: <PiWhatsappLogoBold className="text-xl text-white" />,
    link: "https://wa.me/251943074133"
  }
]

const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
  throw new Error("Missing EmailJS configuration. Please check your environment variables.");
}

const ContactUs = () => {

  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY ,
      })
      .then(
        () => {
          alert('Message sent successfully!');
          if(!form.current) return;
          form.current.reset();
        },
        () => {
          alert('Failed to send the message, please try again.')
        },
      ).finally(() => {
        setLoading(false); 
      });
  };

  return <>
  <div className="py-20">
      <h1 className='sectionName w-56 mx-auto'>Contact Information</h1>
      <h1 className='sectionHeader mb-16'>Reach Out</h1>
      <div className='flex flex-col sm:flex-row gap-10 min-h-screen w-11/12 mx-auto pb-10' id='contact'>
        <form  ref={form} onSubmit={sendEmail} className="background shadow-lg p-4 rounded-lg flex flex-col gap-5 py-14 w-full max-w-2xl">
          <div className="flex flex-col">
            <label 
            htmlFor="name" 
            className="para uppercase font-semibold text-sm mb-2">your name</label>
            <input 
            type="text" 
            id="name" 
            name="name"
            required
            className="border rounded-lg border-gray-200 p-5 para text-sm focus:outline-none focus:border-[#282f3b] transition-all duration-1000" />
          </div>
          <div className="flex flex-col">
            <label 
            htmlFor="email" 
            className="para uppercase font-semibold text-sm mb-2">your email</label>
            <input 
            type="email" 
            id="email" 
            name="email"
            required
            className="border rounded-lg border-gray-200 p-5 para text-sm focus:outline-none focus:border-[#282f3b] transition-all duration-1000" />
          </div>
          <div className="flex flex-col">
            <label 
            htmlFor="subject" 
            className="para uppercase font-semibold text-sm mb-2">subject</label>
            <input 
            type="text" 
            id="subject" 
            name="subject"
            required
            className="border rounded-lg border-gray-200 p-5 para text-sm focus:outline-none focus:border-[#282f3b] transition-all duration-1000" />
          </div>
          <div className="flex flex-col">
            <label 
            htmlFor="name" 
            className="para uppercase font-semibold text-sm mb-2">your message</label>
            <textarea 
            rows={5} 
            id="name" 
            name="message"
            required
            className="border rounded-lg border-gray-200 p-5 para text-sm focus:outline-none focus:border-[#282f3b] transition-all duration-1000" />
          </div>
          <button
            className="text-sm font-semibold nextSlide border uppercase border-gray-300 p-3 py-5 rounded-ss-lg rounded-ee-lg primaryBg text-white disabled:opacity-50 disabled:cursor-not-allowed"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>

        </form>
      <div className="max-w-96">
        <p className="para max-w-md">Send a message through given form, If your enquiry is time sensitive please use below contact details.</p>
        <div>
          <div className="flex items-center gap-5 border border-gray-200 p-4 my-5 rounded-lg mx-auto">
            <div className="flex justify-center items-center rounded-full">
              <IoLocation  className="text-5xl primaryText" />
            </div>
            <div>
              <h1 className="secondaryText text-xl mb-2">Location</h1>
              <p className="para text-sm sm:text-base">Ethiopia, Addis Ababa, Megenagna 24</p>
            </div>
          </div>
          <div className="flex items-center gap-5 border border-gray-200 p-4 my-5 rounded-lg mx-auto">
            <div className="flex justify-center items-center rounded-full">
              <MdEmail className="text-5xl primaryText" />
            </div>
            <div>
              <h1 className="secondaryText text-xl mb-2">Contact</h1>
              <p className="para text-sm sm:text-base">Phone: +251943074133</p>
              <p className="para text-sm sm:text-base">Email: lanseltrading@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 border border-gray-200 p-4 my-5 rounded-lg mx-auto">
              <h1 className="secondaryText text-xl mb-2">Get us on</h1>
              <div className="flex gap-2">
                {
                  socialLinks.map((social, index) => (
                    <SocialMedia key={index} name={social.name} icon={social.icon} link={social.link} />
                  ))
                }
              </div>
          </div>
        </div>
      </div>
      </div>
  </div>
  </>
}

export default ContactUs