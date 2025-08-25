import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; // Swiper styles
import Image from "next/image";

export default function Logos() {
  const testimonials = [
    {
      logo: "/hospitalLogos/3.webp",
      alt: "hospital3",
    },
    {
      logo: "/hospitalLogos/4.webp",
      alt: "hospital4",
    },
    {
      logo: "/hospitalLogos/1.webp",
      alt: "hospital1",
    },
    {
      logo: "/hospitalLogos/2.webp",
      alt: "hospital2",
    },
  ];

  return (
    <section className="py-6 bg-bgGray" id="testimonials">
      <div className="container mx-auto justify-center max-w-6xl">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 2 }, // mobile
            640: { slidesPerView: 3 }, // tablet
            1024: { slidesPerView: 4 }, // desktop
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide
              key={i}
              className="flex items-center justify-center" // ✅ centers content
            >
              <div
                key={i}
                className="flex-[0_0_30%] md:flex-[0_0_20%] lg:flex-[0_0_10%] flex items-center justify-center"
              >
                <Image
                  src={t.logo}
                  alt={t.alt}
                  width={120}
                  height={50}
                  className="object-contain md:transition-transform md:duration-300 md:hover:scale-110 md:grayscale md:hover:grayscale-0"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
