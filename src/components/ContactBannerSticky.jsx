import { useEffect, useState } from "react";

export default function ContactBannerSticky() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const sections = [
      document.getElementById("contact"),
      document.getElementById("footer"), // 👈 example second section
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const anyIntersecting = entries.some((entry) => entry.isIntersecting);
        setIsVisible(!anyIntersecting); // hide if any is visible
      },
      { threshold: 0.1 } // adjust for sensitivity
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  if (!isVisible) return null; // hide completely

  return (
    <section className="w-full bg-purplePrimary flex justify-center fixed bottom-0 left-0 z-50 md:py-8 py-4 transition-all duration-300">
      <a href="#contact">
        <button className="text-white font-bold text-lg md:text-3xl px-10 py-1 md:py-2 bg-pinkCTA rounded-full">
          Contact Us
        </button>
      </a>
    </section>
  );
}
