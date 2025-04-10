import AboutUs from "@/components/AboutUs"
import Banner from "@/components/Banner"
import OurBusiness from "@/components/OurBusiness"
import Team from "@/components/Team"
import WhyUs from "@/components/WhyUs"

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