import Banner from "@/components/Banner"
import OurServices from "@/components/OurServices"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - LANSEL TRADING PLC",
};

const Services = () => {
  return <>
    <Banner pageName="Our Services" page="Services" url="/ourservices"/>
    <OurServices/>
  </>
}

export default Services