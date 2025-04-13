import Banner from "@/components/Banner"
import ContactUs from "@/components/ContactUs"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - LANSEL TRADING PLC",
};

const ContactPage = () => {
  return <>
    <Banner pageName="Contact Us" page="Contact Us" url="/contactus"/>
    <ContactUs/>
  </>
}

export default ContactPage