import Banner from "@/components/Banner"
import ContactUs from "@/components/ContactUs"
import Header from "@/components/HeaderNoSticky"

const ContactPage = () => {
  return <>
    <Header/>
    <Banner pageName="Contact Us" page="Contact Us" url="/contactus"/>
    <ContactUs/>
  </>
}

export default ContactPage