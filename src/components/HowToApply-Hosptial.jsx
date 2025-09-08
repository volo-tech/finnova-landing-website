export default function HowToApply() {
  return (
    <section id="howToApply" className="py-12 bg-white max-w-7xl mx-auto">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Column: Text */}
          <div
            className="md:w-1/2 text-center md:text-start mb-8 md:mb-0"
            data-aos="fade-up"
          >
            <h1 className="text-4xl font-bold text-purplePrimary mb-4">
              How to Apply?
            </h1>
            <h5
              className="text-2xl text-purpleSecondary mb-5"
              data-aos-delay="100"
            >
              Patient Financing in
              <br className="md:hidden" />{" "}
              <span className="font-bold">3 Quick Steps</span>
            </h5>
          </div>

          {/* Right Column: Image */}
          <div
            className="md:w-1/2 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src="3-Steps.png"
              alt="3 Steps to Apply"
              className="mx-auto max-w-sm w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
