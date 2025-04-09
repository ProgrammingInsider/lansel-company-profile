import Banner from "@/components/Banner"
import Header from "@/components/HeaderNoSticky"
import OurServices from "@/components/OurServices"

const Services = () => {
  return <>
    <Header/>
    <Banner pageName="Our Services" page="Services" url="/ourservices"/>
    <OurServices/>
  </>
}

export default Services