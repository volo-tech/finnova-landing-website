import "@/styles/globals.css";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { useEffect } from "react";
import AOS from "aos";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true, // run only once
    });
  }, []);

  return <Component {...pageProps} />;
}
