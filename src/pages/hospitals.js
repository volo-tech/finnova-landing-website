import Header from "../components/Header";
import Hero from "../components/Hero-Hospitals";
import KeyBenefits from "../components/KeyBenefits-Hospital";
import Testimonials from "../components/Testimonials-Hospital";
import HowToApply from "../components/HowToApply-Hosptial";
import AboutUs from "../components/AboutUs";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import ContactBanner from "../components/ContactBanner";
import ContactBannerSticky from "../components/ContactBannerSticky";
import StatsBanner from "../components/StatsBanner";
import Logos from "../components/Logos";
import AOS from "aos";
import { useEffect } from "react";
import Head from "next/head";
import FAQ from "../components/FAQs-Hospitals";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true, // whether animation happens only once
    });
  }, []);
  return (
    <>
      <Head>
        <title>Finnova - For Hospitals</title>
      </Head>
      <main>
        <Header />
        <Hero />
        <ContactForm />
        <KeyBenefits />
        <Testimonials />
        <HowToApply />
        <Logos />
        <AboutUs />
        <FAQ/>
        <ContactBanner />
        <ContactBannerSticky />
        <Footer />
      </main>
    </>
  );
}

export default App;
