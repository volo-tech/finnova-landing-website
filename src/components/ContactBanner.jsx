import useAnalytics from "@/hooks/useAnalytics"; // analytics
export default function ContactBanner() {
  const { trackEvent } = useAnalytics();
  return (
    <section className="mt-2" id="contact">
      <div className="w-full bg-purplePrimary md:py-8 py-4 flex justify-center">
        <a href="#contact">
          <button
            onClick={() => trackEvent("Contact us button non sticky")}
            className="text-white font-bold flex items-center justify-center text-lg md:text-3xl px-10 py-1 md:py-3 bg-pinkCTA rounded-full"
          >
            Contact Us
          </button>
        </a>
      </div>
    </section>
  );
}
