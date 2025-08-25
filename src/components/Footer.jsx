"use client";
import { useState } from "react";
import TermsModal from "../modals/TermsModal";
import PrivacyModal from "../modals/PrivacyModal";

export default function Footer() {
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer id="footer" className="bg-lightGray text-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex text-center flex-col justify-between items-center gap-6">
          {/* Left Section */}
          <div className="max-w-xl text-sm space-y-4">
            <p>
              Copyright © 2025{" "}
              <a
                href="https://volohealth.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lightBlue hover:underline"
              >
                <strong>Volohealth Services Private Limited</strong>
              </a>
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Right Section */}
          <ul className="flex flex-col md:flex-row gap-3 md:gap-6 text-sm text-secondaryBlue">
            <li>
              <button
                onClick={() => setShowTerms(true)}
                className="hover:text-lightBlue"
              >
                Terms of Use
              </button>
            </li>
            <li>
              <button
                onClick={() => setShowPrivacy(true)}
                className="hover:text-lightBlue"
              >
                Privacy Policy
              </button>
            </li>
          </ul>

          {/* Disclaimer */}
          <p className="text-gray-500 text-xs leading-relaxed">
            *All financing is subject to eligibility criteria, verification, and
            approval. Terms and conditions apply. The information provided here
            is not a substitute for professional advice.
          </p>
        </div>
      </div>

      {/* Modals */}
      {showTerms && <TermsModal onClose={() => setShowTerms(false)} />}
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
    </footer>
  );
}
