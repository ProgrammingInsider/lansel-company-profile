import AboutUs from "@/components/AboutUs"
import Banner from "@/components/Banner"
import OurBusiness from "@/components/OurBusiness"
import Team from "@/components/Team"
import WhyUs from "@/components/WhyUs"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - LANSEL TRADING PLC",
};

const AboutPage = () => {
  return <>
        <Banner pageName="About Us" page="About Us" url="/aboutus"/>
        <AboutUs/>
        <OurBusiness/>
        <WhyUs/>
        <Team/>
    </>
}

export default AboutPage