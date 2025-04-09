import AboutUs from "@/components/AboutUs"
import Banner from "@/components/Banner"
import Header from "@/components/HeaderNoSticky"
import OurBusiness from "@/components/OurBusiness"
import Team from "@/components/Team"
import WhyUs from "@/components/WhyUs"

const AboutPage = () => {
  return <>
        <Header/>
        <Banner pageName="About Us" page="About Us" url="/aboutus"/>
        <AboutUs/>
        <OurBusiness/>
        <WhyUs/>
        <Team/>
    </>
}

export default AboutPage