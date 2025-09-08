export default function AboutUs() {
  return (
    <section
      className="py-8 bg-purpleSecondary mx-auto md:px-8 text-white"
      id="about"
    >
      <div className="container mx-auto max-w-7xl text-start pl-2 md:pl-0">
        {/* Section Title */}
        <h2
          className="inline-block text-2xl md:text-4xl font-bold text-white bg-purplePrimary md:bg-transparent px-4 py-2 mb-6 -ml-4 rounded-md"
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
            <>
              {" "}
              At <strong>Finnova</strong>, we believe that access to healthcare
              should never be compromised due to liquidity constraints. By
              bridging the gap between urgent medical expenses and limited or no
              insurance coverage, Finnova enables hospitals and patients to
              maintain continuity of care without funding shortfalls.
            </>
          </p>

          <p className="text-sm md:text-lg mb-2 ">
            <>
              With 62% of healthcare expenses in India paid out-of-pocket,
              households often face cash flow strain, asset liquidation, or
              deferred treatment. Finnova addresses these challenges by offering
              instant credit assessment, direct hospital settlements, and
              structured repayment options—ensuring treatment affordability
              without compromising financial stability.
            </>
          </p>

          <div className="space-y-2 text-sm md:text-lg">
            {/* Platform Strength */}
            <div>
              <p className="font-semibold">
                Our platform strengthens the healthcare ecosystem by:
              </p>
              <ul className="list-disc list-inside pl-4">
                <li>
                  Enhancing patient liquidity through immediate financing
                  solutions
                </li>
                <li>
                  Reducing bad debt exposure for hospitals via timely settlement
                </li>
                <li>
                  Preserving working capital for families by preventing asset
                  liquidation
                </li>
                <li>
                  Expanding healthcare access through inclusive and transparent
                  patient financing
                </li>
              </ul>
            </div>

            {/* Finnova Impact */}
            <div>
              <p className="font-semibold">
                Finnova Impact:
              </p>
              <ul className="list-disc list-inside pl-4">
                <li>30,000+ patients supported</li>
                <li>5,000+ partner hospitals across India</li>
                <li>
                  Platform developed by Volo Health Services, impacting 2.5M+
                  lives
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
