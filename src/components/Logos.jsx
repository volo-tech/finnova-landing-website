import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; // Swiper styles
import Image from "next/image";

export default function Logos() {
  const testimonials = [
    {
      logo: "/hospitalLogos/HealingHands.png",
      alt: "hospital1",
    },
    {
      logo: "/hospitalLogos/Lopmudra.png",
      alt: "hospital2",
    },
    {
      logo: "/hospitalLogos/motherland.jpg",
      alt: "hospital3",
    },
    {
      logo: "/hospitalLogos/ShreeDental.jpg",
      alt: "hospital4",
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
            1024: { slidesPerView: 5 }, // desktop
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
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <Image
                  src={t.logo}
                  alt={t.alt}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
