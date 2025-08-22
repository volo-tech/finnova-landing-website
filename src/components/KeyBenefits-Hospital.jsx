export default function KeyBenefits() {
  const benefits = [
    {
      text: "Quick Loan Disbursement",
      icon: "/icons/analysis_15225698.png",
      delay: 100,
    },
    {
      text: "24-Hour Settlement",
      icon: "/icons/stopwatch_1511951.png",
      delay: 100,
    },
    {
      text: "Instant Eligibility Check",
      icon: "/icons/tool_10225688.png",
      delay: 100,
    },
  ];

  return (
    <section
      id="benefits"
      className="py-4 md:py-8 max-w-7xl bg-white px-6 md:px-6 mx-auto"
    >
      <div className="flex md:flex-row flex-col items-center md:justify-between md:gap-16">
        {/* Section Title */}
        <div
          className="w-full md:w-auto md:mx-auto md:text-left whitespace-nowrap border-b-2 md:border-b-0 border-bgGray py-4 px-2"
          data-aos="fade-up"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-purpleSecondary">
            Key Benefits
          </h1>
        </div>

        {/* Benefits List - Always Vertical */}
        <div className="container mx-auto flex flex-col md:flex-row rounded overflow-hidden gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 border-b-2 md:border-t md:border-b-1 border-bgGray md:border-gray-400"
              data-aos="fade-up"
              data-aos-delay={benefit.delay}
            >
              <img
                src={benefit.icon}
                alt={benefit.text}
                className="w-[70px] md:w-[70px] pr-4"
              />
              <span className="text:lg md:text-lg md:font-semibold text-purpleSecondary">
                {benefit.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
