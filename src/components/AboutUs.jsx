export default function AboutUs() {
  return (
    <section
      className="py-8 bg-purpleSecondary mx-auto md:px-8 text-white"
      id="about"
    >
      <div className="container mx-auto max-w-6xl text-start pl-2 md:pl-0">
        {/* Section Title */}
        <h2
          className="inline-block text-2xl md:text-4xl font-bold text-white bg-purplePrimary px-4 py-2 mb-6 -ml-4 rounded-md"
          data-aos="fade-up"
        >
          About Us
        </h2>

        {/* Content */}
        <div
          className="mx-auto text-white text-start p-4 md:p-0"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-sm md:text-lg mb-2">
            <strong>
              {" "}
              Finnova provides lending solutions to those who delay treatment
              because of out of pocket expenses.
            </strong>
          </p>

          <p className="text-sm md:text-lg mb-2 ">
            Finnova provides fast, flexible financing that goes beyond
            traditional financing in healthcare. Our hassle-free, patient-first
            approach to making care affordable and timely.
          </p>

          <p className="text-sm md:text-lg leading-relaxed mb-2 ">
            Finnova is partnering with over 5000 hospitals and has provided
            financial management to over 30,000 patients and their families.{" "}
            <strong>
              A platform developed by Volo Health Services, a leading health
              provider, we are touching more than 2.5 million lives across
              programmes.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
