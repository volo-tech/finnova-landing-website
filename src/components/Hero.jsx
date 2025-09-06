"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const desktopImages = [
  "/heroImages/D1.webp",
  "/heroImages/D2.webp",
  "/heroImages/D3.webp",
];

const mobileImages = [
  "/heroImages/M1.webp",
  "/heroImages/M2.webp",
  "/heroImages/M3.webp",
];

export default function Hero() {
  const [emblaRefDesktop] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);
  const [emblaRefMobile] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  return (
    <section className="md:mb-2 md:my-4 mx-auto py-2" aria-label="Hero Section">
      {/* Desktop carousel */}
      <div className="hidden md:block overflow-hidden" ref={emblaRefDesktop}>
        <div className="flex">
          {desktopImages.map((src, i) => (
            <div
              key={i}
              className="relative h-[35vh]"
              style={{
                flex: "0 0 calc(100% - 100px)",
                marginRight: i === desktopImages.length - 1 ? "0px" : "100px",
              }}
            >
              <Image
                src={src}
                alt={`Desktop slide ${i + 1}`}
                fill
                className="object-contain"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile carousel */}
      <div className="block md:hidden overflow-hidden" ref={emblaRefMobile}>
        <div className="flex gap-2">
          {mobileImages.map((src, i) => (
            <div
              key={i}
              className="relative h-[35vh]"
              style={{ flex: "0 0 calc(100% - 20px)" }} // peek 20px of next slide
            >
              <Image
                src={src}
                alt={`Mobile slide ${i + 1}`}
                fill
                className="object-contain"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
