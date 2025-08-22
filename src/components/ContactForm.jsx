import React, { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Wait a bit for Zoho to process
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
              className="space-y-4 md:gap-4"
            >
              {/* Name */}
              <div className="md:space-y-2 flex md:flex-row flex-col justify-between gap-4">
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
                  className="block w-full md:rounded-xl border-gray-300 shadow-sm bg-bgGray md:bg-white text-black p-2 md:p-4"
                />

                {/* City */}

                <input
                  type="text"
                  name="SingleLine"
                  placeholder="City"
                  maxLength={255}
                  required
                  className="block w-full md:rounded-xl border-gray-300 shadow-sm bg-bgGray md:bg-white text-black p-2 md:p-4 mb-2"
                />
              </div>
              {/* Submit */}
              <button
                type="submit"
                className="px-8 font-bold py-2 bg-pinkCTA text-white rounded-full hover:bg-blue-700"
              >
                Contact Us
              </button>
            </form>

            {/* Hidden iframe to prevent redirect */}
            <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
          </>
        )}
      </div>
    </div>
  );
}
