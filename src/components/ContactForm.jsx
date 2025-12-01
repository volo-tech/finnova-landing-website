"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import useAnalytics from "@/hooks/useAnalytics";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const searchParams = useSearchParams();
  const { trackEvent } = useAnalytics();

  // visible values
  const [hospital, setHospital] = useState("");
  const [city, setCity] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [hospitalId, setHospitalId] = useState("");

  // flags that record whether the field was prefilled at mount time
  const [isHospitalPrefilled, setIsHospitalPrefilled] = useState(false);
  const [isCityPrefilled, setIsCityPrefilled] = useState(false);

  useEffect(() => {
    const hospitalQP = searchParams.get("hospital") || "";
    const cityQP = searchParams.get("city") || "";
    const sourceQP = searchParams.get("sourceUrl") || (typeof window !== "undefined" ? window.location.href : "");
    const hospitalIdQP = searchParams.get("hospitalId") || "";

    // set visible values
    setHospital(hospitalQP);
    setCity(cityQP);
    setSourceUrl(sourceQP);
    setHospitalId(hospitalIdQP);

    // set "prefilled" flags based only on initial query param values.
    // These flags should NOT change when the user types.
    setIsHospitalPrefilled(!!hospitalQP);
    setIsCityPrefilled(!!cityQP);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleSubmit = () => {
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <div className="px-8 md:px-0 py-4 md:py-0 bg-bgGray md:bg-white">
      <div
        id="contact"
        className="md:space-y-4 px-5 py-2 bg-white md:bg-purplePrimary rounded-2xl md:rounded-3xl shadow-md max-w-7xl mx-auto "
      >
        <h1 className="text-2xl font-bold md:text-4xl p-1 text-purpleSecondary md:text-white my-2 ">
          Get In Touch
        </h1>
        {submitted ? (
          <div className="p-4 bg-green-100 text-green-700 rounded-lg">
            ✅ Thank you! Your form has been submitted successfully.
          </div>
        ) : (
          <>
            <form
              action="https://forms.zohopublic.in/tusharrastogi/form/Signup/formperma/POMCBtzTM3v5GMwRmdY9XLYwueuQwM19-1_4gfyv-7g/htmlRecords/submit"
              method="POST"
              target="hidden_iframe"
              acceptCharset="UTF-8"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
              className="space-y-4 md:gap-4 pb-2 md:pb-0"
            >
              <div className="md:space-y-2 flex md:flex-row flex-col justify-between gap-4">
                {/* Name */}
                <input
                  type="text"
                  name="SingleLine2"
                  placeholder="Enter your name"
                  maxLength={255}
                  required
                  className="block w-full md:rounded-xl border-gray-300 shadow-sm bg-bgGray md:bg-white text-black p-2 md:p-4"
                />

                {/* Phone Number */}
                <input
                  type="text"
                  name="PhoneNumber_countrycode"
                  placeholder="10 digit mobile number"
                  maxLength={10}
                  minLength={10}
                  required
                  className="block w-full md:rounded-xl border-gray-300 shadow-sm bg-bgGray md:bg-white text-black p-2 md:p-4"
                />

                {/* Hospital */}
                <input
                  type="text"
                  name="SingleLine1"
                  placeholder="Hospital Name"
                  maxLength={255}
                  required
                  value={hospital}
                  onChange={(e) => setHospital(e.target.value)}
                  disabled={isHospitalPrefilled}
                  aria-disabled={isHospitalPrefilled}
                  className={`block w-full md:rounded-xl border-gray-300 shadow-sm p-2 md:p-4 ${
                    isHospitalPrefilled
                      ? "bg-gray-200 cursor-not-allowed text-gray-700"
                      : "bg-bgGray md:bg-white text-black"
                  }`}
                />

                {/* City */}
                <input
                  type="text"
                  name="SingleLine"
                  placeholder="City"
                  maxLength={255}
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  disabled={isCityPrefilled}
                  aria-disabled={isCityPrefilled}
                  className={`block w-full md:rounded-xl border-gray-300 shadow-sm p-2 md:p-4 mb-2 ${
                    isCityPrefilled
                      ? "bg-gray-200 cursor-not-allowed text-gray-700"
                      : "bg-bgGray md:bg-white text-black"
                  }`}
                />
              </div>

              {/* Hidden fields for form submission */}
              <input type="hidden" name="MultiLine" value={sourceUrl} />
              <input type="hidden" name="SingleLine3" value={hospitalId} />

              {/* If a field was disabled, disabled fields won't be submitted — add hidden inputs so Zoho receives them */}
              {isHospitalPrefilled && <input type="hidden" name="SingleLine1" value={hospital} />}
              {isCityPrefilled && <input type="hidden" name="SingleLine" value={city} />}

              {/* Submit */}
              <button
                type="submit"
                className="px-8 font-bold py-2 bg-pinkCTA text-white rounded-full hover:bg-blue-700"
                onClick={() => trackEvent("Submit Button Clicked")}
              >
                Contact Us
              </button>
            </form>

            <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
          </>
        )}
      </div>
    </div>
  );
}
