import React from 'react'
import SocialMedia from './SocialMedia'
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { PiWhatsappLogoBold } from "react-icons/pi";



const TeamMembers = [
    {
        name: "Nardos Alemu",
        position: "General Manager & Co-Founder",
        description: "As General Manager, Nardos oversees the company’s overall strategy, operations, and growth. Her leadership ensures that every department aligns with Lansel’s long-term vision. She is committed to building strong networks, identifying opportunities for expansion, and fostering a unified, purposedriven team culture.",
        socialLinks: [
            {
              name: "Linkedin",
              icon: <FaLinkedinIn className="text-xl text-white" />,
              link: "#"
            },
            {
              name: "Telegram",
              icon: <FaTelegramPlane className="text-xl text-white" />,
              link: "#"
            },
            {
              name: "WhatsApp",
              icon: <PiWhatsappLogoBold className="text-xl text-white" />,
              link: "#"
            }
          ]
    },
    {
        name: "Lamrot Damene",
        position: "Operations & Technical Manager & Co-Founder",
        description: " Lamrot leads the company’s operational and technical efforts, ensuring efficiency in every process. She manages logistics, documentation, and risk mitigation, while constantly working to optimize workflows and product sourcing. Her analytical mindset and technical expertise are key to the smooth functioning of Lansel's daily operations.",
        socialLinks: [
            {
              name: "Linkedin",
              icon: <FaLinkedinIn className="text-xl text-white" />,
              link: "#"
            },
            {
              name: "Telegram",
              icon: <FaTelegramPlane className="text-xl text-white" />,
              link: "#"
            },
            {
              name: "WhatsApp",
              icon: <PiWhatsappLogoBold className="text-xl text-white" />,
              link: "#"
            }
          ]
    },
    {
        name: "Lidiya Tadesse",
        position: "Sales & Marketing Manager & Co-Founder",
        description: "Lidiya drives Lansel’s brand visibility and customer engagement. She crafts marketing strategies, manages digital platforms, and maintains strong client relationships. Through market research and active participation in trade events, she ensures Lansel stays competitive and connected to its audience.",
        socialLinks: [
            {
              name: "Linkedin",
              icon: <FaLinkedinIn className="text-xl text-white" />,
              link: "#"
            },
            {
              name: "Telegram",
              icon: <FaTelegramPlane className="text-xl text-white" />,
              link: "#"
            },
            {
              name: "WhatsApp",
              icon: <PiWhatsappLogoBold className="text-xl text-white" />,
              link: "#"
            }
          ]
    },
    {
        name: "Semira Jemal",
        position: "Financial & Administration Manager & Co-Founder",
        description: "Semira safeguards Lansel’s financial stability and strategic growth. She leads budgeting, reporting, and financial planning, while identifying new market opportunities in collaboration with the marketing team. Her keen insight into financial risks and pricing strategies keeps Lansel on a steady path forward.",
        socialLinks: [
            {
              name: "Linkedin",
              icon: <FaLinkedinIn className="text-xl text-white" />,
              link: "#"
            },
            {
              name: "Telegram",
              icon: <FaTelegramPlane className="text-xl text-white" />,
              link: "#"
            },
            {
              name: "WhatsApp",
              icon: <PiWhatsappLogoBold className="text-xl text-white" />,
              link: "#"
            }
          ]
    },
]

const Team = () => {
  return (
    <div className='sectionBg min-h-screen py-20 px-1 w-full mx-auto'>
    <h1 className='sectionName w-40 mx-auto'>Our Team</h1>
    <h1 className='sectionHeader text-center mb-16'>Meet Our Founders</h1>

        <div className='col-span-1 w-11/12 gap-2 mx-auto grid md:grid-cols-2 justify-items-center lg:grid-cols-4'>
        {
            TeamMembers.map((member, index) => (
                <div key={index} className='flex flex-col justify-between items-center background text-center p-7 h-auto rounded-xl col-span-1'>
                    <h1 className='secondaryText text-xl font-bold leading-[30px] mb-2'>{member.name}</h1>
                    <h1 className='secondaryText text-lg font-medium leading-[24px] mb-3'>{member.position}</h1>
                    <p className='para text-sm leading-[24px]'>{member.description}</p>
                    <div className="flex gap-2 mt-5">
                        {
                            member.socialLinks.map((social, index) => (
                                <SocialMedia key={index} name={social.name} icon={social.icon} link={social.link} />
                            ))
                        }
                    </div>
                </div>
            ))
        }
            {/* <div className='flex flex-col justify-center items-center background text-center p-7 h-72 md:h-auto rounded-xl col-span-1'>
                <h1 className='secondaryText text-xl font-bold leading-[30px] mb-2'>Nardos Alemu</h1>
                <h1 className='secondaryText text-lg font-medium leading-[30px] mb-3'>General Manager & Co-Founder</h1>
                <p className='para text-sm leading-[24px]'>As General Manager, Nardos oversees the company’s overall strategy, operations, and growth. Her leadership ensures that every department aligns with Lansel’s long-term vision. She is committed to building strong networks, identifying opportunities for expansion, and fostering a unified, purposedriven team culture.</p>
                {
                socialLinks.map((social, index) => (
                  <SocialMedia key={index} name={social.name} icon={social.icon} link={social.link} />
                ))
              }
            </div> */}
        </div>
</div>
  )
}

export default Team