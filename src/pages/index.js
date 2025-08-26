import Header from "../components/Header";
import Hero from "../components/Hero";
import KeyBenefits from "../components/KeyBenefits";
import Testimonials from "../components/Testimonials";
import HowToApply from "../components/HowToApply";
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
      <title>Finnova</title>
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
        <ContactBanner />
        <ContactBannerSticky />
        <Footer />
      </main>
    </>
  );
}

export default App;
